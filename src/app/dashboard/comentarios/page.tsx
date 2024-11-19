'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

interface Comentario {
  id: number;
  nome: string;
  cargo: string;
  comentario: string;
  imagemUrl: string;
}

// Configuração do S3 Client
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export default function DashboardComentarios() {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [novoComentario, setNovoComentario] = useState<Comentario>({
    id: 0,
    nome: '',
    cargo: '',
    comentario: '',
    imagemUrl: '',
  });
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [imagemFile, setImagemFile] = useState<File | null>(null);

  useEffect(() => {
    loadComentarios();
  }, []);

  const loadComentarios = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/comentarios.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const comentariosData = JSON.parse(bodyContents);
        setComentarios(comentariosData);
      }
    } catch (error) {
      console.error('Erro ao carregar os comentários do S3:', error);
    }
  };

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNovoComentario((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagemFile(file);
  };

  const uploadImageToS3 = async (file: File): Promise<string | null> => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const uniqueFileName = `comentarios/${uuidv4()}_${file.name}`;

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

  const handleAdicionar = async () => {
    let imagemUrl = novoComentario.imagemUrl;

    if (imagemFile) {
      const uploadedUrl = await uploadImageToS3(imagemFile);
      if (uploadedUrl) imagemUrl = uploadedUrl;
    }

    const comentarioAtualizado = { ...novoComentario, imagemUrl };

    if (editandoId !== null) {
      setComentarios(comentarios.map((c) => (c.id === editandoId ? { ...comentarioAtualizado, id: editandoId } : c)));
      setEditandoId(null);
    } else {
      comentarioAtualizado.id = Date.now();
      setComentarios([...comentarios, comentarioAtualizado]);
    }

    await saveComentarios([...comentarios, comentarioAtualizado]);

    setNovoComentario({ id: 0, nome: '', cargo: '', comentario: '', imagemUrl: '' });
    setImagemFile(null);
  };

  const saveComentarios = async (comentariosData: Comentario[]) => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/comentarios.json';

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(comentariosData),
      ContentType: 'application/json',
    };

    try {
      const command = new PutObjectCommand(params);
      await s3.send(command);
      console.log('Comentários salvos no S3 com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar comentários no S3:', error);
    }
  };

  const handleEditar = (id: number) => {
    const comentarioParaEditar = comentarios.find((c) => c.id === id);
    if (comentarioParaEditar) {
      setNovoComentario(comentarioParaEditar);
      setEditandoId(id);
    }
  };

  const handleRemover = async (id: number) => {
    const updatedComentarios = comentarios.filter((c) => c.id !== id);
    setComentarios(updatedComentarios);
    await saveComentarios(updatedComentarios);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Comentários</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{editandoId !== null ? 'Editar Comentário' : 'Adicionar Novo Comentário'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                name="nome"
                value={novoComentario.nome}
                onChange={handleInputChange}
                placeholder="Nome do cliente"
              />
            </div>
            <div>
              <Label htmlFor="cargo">Cargo</Label>
              <Input
                id="cargo"
                name="cargo"
                value={novoComentario.cargo}
                onChange={handleInputChange}
                placeholder="Cargo do cliente"
              />
            </div>
            <div>
              <Label htmlFor="comentario">Comentário</Label>
              <Textarea
                id="comentario"
                name="comentario"
                value={novoComentario.comentario}
                onChange={handleInputChange}
                placeholder="Digite o comentário aqui"
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="imagem">Imagem do Cliente</Label>
              <Input id="imagem" type="file" onChange={handleImagemChange} accept="image/*" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAdicionar}>
            {editandoId !== null ? 'Atualizar Comentário' : 'Adicionar Comentário'}
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {comentarios.map((comentario) => (
          <Card key={comentario.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-4">
                <Image
                  src={comentario.imagemUrl}
                  alt={`Foto de ${comentario.nome}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{comentario.nome}</h3>
                  <p className="text-sm text-gray-500">{comentario.cargo}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{comentario.comentario}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" size="icon" onClick={() => handleEditar(comentario.id)}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="icon" onClick={() => handleRemover(comentario.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
