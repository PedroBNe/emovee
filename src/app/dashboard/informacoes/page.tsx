'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface EmpresaInfo {
  celular: string;
  endereco: string;
  email: string;
  instagram: string;
  linkedin: string;
  politicasPrivacidade: string;
  termosUso: string;
  logoUrl: string;
  nomeSite: string;
}

interface Color {
  id: number;
  name: string;
  default: string;
  text: string;
}

export default function InformacoesEmpresaDashboard() {
  const [info, setInfo] = useState<EmpresaInfo | null>(null);
  const [editando, setEditando] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    loadEmpresaInfo();
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      const response = await fetch('/api/color');
      if (!response.ok) {
        throw new Error('Erro ao buscar as cores.');
      }
      const colors = await response.json();
      setColors(colors);
      console.log('Cores:', colors);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const updateColors = async (newColors: Color[]) => {
    try {
      const response = await fetch('/api/color', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newColors),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar as cores.');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const loadEmpresaInfo = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/informacoes.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const empresaInfo = JSON.parse(bodyContents);
        setInfo(empresaInfo);
      } else {
        console.error("Erro: Dados de 'informacoes.json' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar 'informacoes.json' do S3:", error);
    }
  };

  const saveEmpresaInfo = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/informacoes.json';

    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: JSON.stringify(info),
        ContentType: 'application/json',
      });
      await s3.send(command);
      toast({
        title: 'Informações atualizadas',
        description: 'As informações da empresa foram salvas com sucesso.',
      });
    } catch (error) {
      console.error("Erro ao salvar 'informacoes.json' no S3:", error);
    }
  };

  const uploadLogoToS3 = async (file: File) => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const uniqueFileName = `logos/${uuidv4()}_${file.name}`;

    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: uniqueFileName,
        Body: file,
        ContentType: file.type,
      });
      await s3.send(command);
      return `https://${bucketName}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${uniqueFileName}`;
    } catch (error) {
      console.error('Erro ao fazer upload da logo no S3:', error);
      return null;
    }
  };

  const handleLogoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const uploadedUrl = await uploadLogoToS3(file);
      if (uploadedUrl) {
        setInfo((prev) => (prev ? { ...prev, logoUrl: uploadedUrl } : null));
        toast({
          title: 'Logo atualizada',
          description: 'A logo foi enviada com sucesso.',
        });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target; // Pegando o 'id' e o 'value' do input

    setColors((prev) =>
      prev.map((color) =>
        color.id.toString() === id
          ? {
              ...color,
              // Se a cor tem um campo 'text', atualizamos com base no 'name' (default ou text)
              [e.target.name]: value,
            }
          : color,
      ),
    );
  };

  const handleSalvar = async () => {
    await saveEmpresaInfo();
    await updateColors(colors);
    setEditando(false);
  };

  const handleCancelar = () => {
    loadEmpresaInfo();
    setEditando(false);
  };

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  if (!info) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Informações da Empresa</h1>

      <Tabs defaultValue="nome-site" className="w-full">
        <TabsList>
          <TabsTrigger value="nome-site">Nome do Site</TabsTrigger>
          <TabsTrigger value="contato">Contato</TabsTrigger>
          <TabsTrigger value="redes-sociais">Redes Sociais</TabsTrigger>
          <TabsTrigger value="documentos">Documentos Legais</TabsTrigger>
          <TabsTrigger value="logo">Logo</TabsTrigger>
          <TabsTrigger value="cores">Cores</TabsTrigger>
        </TabsList>

        <TabsContent value="contato">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Informações de Contato
                <Button variant="outline" onClick={() => setEditando(!editando)}>
                  {editando ? 'Cancelar Edição' : 'Editar'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="celular">Número de Celular</Label>
                  <Input
                    id="celular"
                    name="celular"
                    value={info.celular}
                    onChange={handleInputChange}
                    disabled={!editando}
                  />
                </div>
                <div>
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    id="endereco"
                    name="endereco"
                    value={info.endereco}
                    onChange={handleInputChange}
                    disabled={!editando}
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={info.email}
                    onChange={handleInputChange}
                    disabled={!editando}
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="redes-sociais">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Redes Sociais
                <Button variant="outline" onClick={() => setEditando(!editando)}>
                  {editando ? 'Cancelar Edição' : 'Editar'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="instagram">Link do Instagram</Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    value={info.instagram}
                    onChange={handleInputChange}
                    disabled={!editando}
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">Link do LinkedIn</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={info.linkedin}
                    onChange={handleInputChange}
                    disabled={!editando}
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documentos">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Documentos Legais
                <Button variant="outline" onClick={() => setEditando(!editando)}>
                  {editando ? 'Cancelar Edição' : 'Editar'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="politicasPrivacidade">Políticas de Privacidade</Label>
                  <Textarea
                    id="politicasPrivacidade"
                    name="politicasPrivacidade"
                    value={info.politicasPrivacidade}
                    onChange={handleInputChange}
                    disabled={!editando}
                    rows={10}
                  />
                </div>
                <div>
                  <Label htmlFor="termosUso">Termos de Uso</Label>
                  <Textarea
                    id="termosUso"
                    name="termosUso"
                    value={info.termosUso}
                    onChange={handleInputChange}
                    disabled={!editando}
                    rows={10}
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logo">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Logo da Empresa{' '}
                <Button variant="outline" onClick={() => setEditando(!editando)}>
                  {editando ? 'Cancelar Edição' : 'Editar'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {info.logoUrl && (
                <div className="mb-4">
                  <Label>Logo Atual</Label>
                  <Image src={info.logoUrl} alt="Logo da Empresa" width={150} height={150} className="rounded-lg" />
                </div>
              )}
              <div>
                <Label htmlFor="logo">Alterar Logo</Label>
                <Input id="logo" type="file" onChange={handleLogoChange} accept="image/*" disabled={!editando} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nome-site">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Nome do Site{' '}
                <Button variant="outline" onClick={() => setEditando(!editando)}>
                  {editando ? 'Cancelar Edição' : 'Editar'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="nomeSite">Nome do Site</Label>
                <Input
                  id="nomeSite"
                  name="nomeSite"
                  value={info.nomeSite}
                  onChange={handleInputChange}
                  disabled={!editando}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cores">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Cores do site{' '}
                <Button variant="outline" onClick={() => setEditando(!editando)}>
                  {editando ? 'Cancelar Edição' : 'Editar'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {colors.map((color) => (
                <div key={color.id} className="mt-4 flex flex-col gap-2">
                  <Label htmlFor={`${color.id}`} className="flex items-center gap-2">
                    {`Cores de ${color.name}`}
                    <span
                      className="w-5 h-5 rounded-full border-2 border-black"
                      style={{ backgroundColor: color.default }}
                    ></span>
                  </Label>
                  <Input
                    id={`${color.id}`}
                    name="default" // Para atualizar a cor de fundo
                    value={color.default}
                    onChange={handleColorChange}
                    disabled={!editando}
                  />
                  {color.text && (
                    <div className="mt-4 flex flex-col gap-2">
                      <Label htmlFor={`${color.id}-text`} className="flex items-center gap-2">
                        {`Texto de ${color.name} - texto`}
                        <span
                          className="w-5 h-5 rounded-full border-2 border-black"
                          style={{ backgroundColor: color.text }}
                        ></span>
                      </Label>
                      <Input
                        id={`${color.id}`}
                        name="text" // Para atualizar a cor do texto
                        value={color.text}
                        onChange={handleColorChange}
                        disabled={!editando}
                      />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {editando && (
        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline" onClick={handleCancelar}>
            Cancelar
          </Button>
          <Button onClick={handleSalvar}>Salvar Alterações</Button>
        </div>
      )}
    </div>
  );
}
