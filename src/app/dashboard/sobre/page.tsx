'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Save, X } from 'lucide-react';
import Image from 'next/image';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

// Configuração do S3 Client para o AWS SDK v3
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface AboutContent {
  videoUrl: string;
  title: string;
  description: string;
  sideText: string;
}

interface PartnerLogo {
  id: number;
  url: string;
  name: string;
}

interface CardSection {
  id: number;
  icon: string;
  title: string;
  text: string;
}

interface SideImage {
  id: number;
  url: string;
}

export default function AboutEmovieeDashboard() {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [partnerLogos, setPartnerLogos] = useState<PartnerLogo[]>([]);
  const [cardSections, setCardSections] = useState<CardSection[]>([]);
  const [sideImages, setSideImages] = useState<SideImage[]>([]);
  const [newLogoFile, setNewLogoFile] = useState<File | null>(null);
  const [newLogoName, setNewLogoName] = useState('');
  const [newSideImageFile, setNewSideImageFile] = useState<File | null>(null);

  useEffect(() => {
    loadAboutContent();
  }, []);

  const loadAboutContent = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/about.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const aboutData = JSON.parse(bodyContents);
        setContent(aboutData.content);
        setPartnerLogos(aboutData.partnerLogos);
        setCardSections(aboutData.cardSections);
        setSideImages(aboutData.sideImages || []);
      } else {
        console.error("Erro: Dados de 'sobre' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdo 'Sobre' do S3:", error);
    }
  };

  const saveAboutContent = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/about.json';

    const aboutData = {
      content,
      partnerLogos,
      cardSections,
      sideImages,
    };

    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: JSON.stringify(aboutData),
        ContentType: 'application/json',
      });
      await s3.send(command);
      console.log("Conteúdo 'Sobre' salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar conteúdo 'Sobre' no S3:", error);
    }
  };

  const handleSave = async () => {
    await saveAboutContent();
    setIsEditing(false);
  };

  const handleCancel = () => {
    loadAboutContent(); // Recarrega o conteúdo original
    setIsEditing(false);
  };

  const uploadImageToS3 = async (file: File) => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const uniqueFileName = `images/${uuidv4()}_${file.name}`;

    const params = {
      Bucket: bucketName,
      Key: uniqueFileName,
      Body: file,
      ContentType: file.type,
    };

    try {
      const command = new PutObjectCommand(params);
      await s3.send(command);
      return `https://${bucketName}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${uniqueFileName}`;
    } catch (error) {
      console.error('Erro ao enviar imagem para o S3:', error);
      return null;
    }
  };

  const handleAddPartner = async () => {
    if (newLogoFile && newLogoName) {
      const uploadedUrl = await uploadImageToS3(newLogoFile);
      if (uploadedUrl) {
        setPartnerLogos([...partnerLogos, { id: Date.now(), url: uploadedUrl, name: newLogoName }]);
        setNewLogoFile(null);
        setNewLogoName('');
      }
    }
  };

  const handleRemovePartner = (id: number) => {
    setPartnerLogos(partnerLogos.filter((logo) => logo.id !== id));
  };

  const handleCardSectionChange = (id: number, field: keyof CardSection, value: string) => {
    setCardSections(cardSections.map((card) => (card.id === id ? { ...card, [field]: value } : card)));
  };

  const handleAddSideImage = async () => {
    if (newSideImageFile) {
      const uploadedUrl = await uploadImageToS3(newSideImageFile);
      if (uploadedUrl) {
        setSideImages([...sideImages, { id: Date.now(), url: uploadedUrl }]);
        setNewSideImageFile(null);
      }
    }
  };

  const handleRemoveSideImage = (id: number) => {
    setSideImages(sideImages.filter((image) => image.id !== id));
  };

  if (!content) {
    return <div>Carregando...</div>; // Renderiza um estado de carregamento enquanto os dados estão sendo buscados
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard - Sobre a E-moviee</h1>

      {/* Video Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Vídeo de Apresentação
            <Button variant="outline" size="icon" onClick={() => setIsEditing(true)} disabled={isEditing}>
              <Save className="h-4 w-4" />
              <span className="sr-only">Editar vídeo</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-4">
              <Label htmlFor="videoUrl">URL do Vídeo</Label>
              <Input
                id="videoUrl"
                value={content.videoUrl}
                onChange={(e) => setContent({ ...content, videoUrl: e.target.value })}
              />
            </div>
          ) : (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={content.videoUrl}
                title="Vídeo de apresentação E-moviee"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sobre Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Sobre
            <Button variant="outline" size="icon" onClick={() => setIsEditing(true)} disabled={isEditing}>
              <Save className="h-4 w-4" />
              <span className="sr-only">Editar sobre</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-4">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
              />
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={content.description}
                onChange={(e) => setContent({ ...content, description: e.target.value })}
                rows={4}
              />
              <Label htmlFor="sideText">Texto Lateral</Label>
              <Textarea
                id="sideText"
                value={content.sideText}
                onChange={(e) => setContent({ ...content, sideText: e.target.value })}
                rows={4}
              />
              <Label>Imagens Laterais</Label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {sideImages.map((image) => (
                  <div key={image.id} className="relative">
                    <Image src={image.url} alt={`Imagem ${image.id}`} width={100} height={100} />
                    {isEditing && (
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2"
                        onClick={() => setSideImages(sideImages.filter((img) => img.id !== image.id))}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              {isEditing && (
                <div className="space-y-4">
                  <Label>Arquivo de Imagem</Label>
                  <Input type="file" onChange={(e) => setNewSideImageFile(e.target.files?.[0] || null)} />
                  <Button onClick={handleAddSideImage}>
                    <PlusCircle className="h-4 w-4 mr-2" /> Adicionar Imagem
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-2">{content.title}</h2>
              <p>{content.description}</p>
              <p className="mt-4">{content.sideText}</p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {sideImages.map((image) => (
                  <Image key={image.id} src={image.url} alt={`Imagem ${image.id}`} width={100} height={100} />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Card Sections - Missão, Visão, Valores */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Seção de Cards (Missão, Visão, Valores)
            <Button variant="outline" size="icon" onClick={() => setIsEditing(true)} disabled={isEditing}>
              <Save className="h-4 w-4" />
              <span className="sr-only">Editar cards</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {cardSections.map((card) => (
              <div key={card.id} className="p-4 border rounded-lg">
                {isEditing ? (
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor={`icon-${card.id}`}>Ícone</Label>
                      <Input
                        id={`icon-${card.id}`}
                        value={card.icon}
                        onChange={(e) => handleCardSectionChange(card.id, 'icon', e.target.value)}
                        placeholder="Ex: 🌟"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`title-${card.id}`}>Título</Label>
                      <Input
                        id={`title-${card.id}`}
                        value={card.title}
                        onChange={(e) => handleCardSectionChange(card.id, 'title', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`text-${card.id}`}>Texto</Label>
                      <Textarea
                        id={`text-${card.id}`}
                        value={card.text}
                        onChange={(e) => handleCardSectionChange(card.id, 'text', e.target.value)}
                        rows={4}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl">{card.icon}</div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Partner Logos */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">Empresas Parceiras</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="relative flex flex-col items-center">
                <Image src={logo.url} alt={`Parceiro ${logo.name}`} width={100} height={50} />
                <span className="mt-2 text-sm">{logo.name}</span>
                {isEditing && (
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2"
                    onClick={() => setPartnerLogos(partnerLogos.filter((l) => l.id !== logo.id))}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="space-y-4">
              <Label>Arquivo do Logo</Label>
              <Input type="file" onChange={(e) => setNewLogoFile(e.target.files?.[0] || null)} />
              <Label>Nome da Empresa</Label>
              <Input
                value={newLogoName}
                onChange={(e) => setNewLogoName(e.target.value)}
                placeholder="Nome da Empresa"
              />
              <Button onClick={handleAddPartner}>
                <PlusCircle className="h-4 w-4 mr-2" /> Adicionar Parceiro
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Save and Cancel Buttons */}
      <CardFooter className="flex justify-end space-x-2">
        {isEditing && (
          <>
            <Button variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>Salvar Alterações</Button>
          </>
        )}
      </CardFooter>
    </div>
  );
}

// Função auxiliar para converter o stream para string
async function streamToString(stream: any): Promise<string> {
  if (stream instanceof Buffer) {
    return stream.toString('utf-8');
  }

  const chunks: any[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf-8');
}
