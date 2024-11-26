'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Save, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// Configuração do S3 Client para o AWS SDK v3
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export default function AdminDashboard() {
  const [services, setServices] = useState<Service[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Função para carregar os serviços chamando a API
  const loadServices = async () => {
    const response = await fetch('/api/services');
    const servicesData = await response.json();
    setServices(servicesData);
  };

  // Função para salvar os serviços chamando a API
  const saveServices = async (services: Service[]) => {
    await fetch('/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(services),
    });
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleEditService = (service: Service) => {
    setEditingService(service);
  };

  const handleUpdateService = async () => {
    if (editingService) {
      if (imageFile) {
        const uploadResult = await uploadImageToS3(imageFile);
        if (uploadResult) {
          editingService.imageUrl = uploadResult;
        }
      }
      const updatedServices = services.map((s) => (s.id === editingService.id ? editingService : s));
      setServices(updatedServices);
      await saveServices(updatedServices); // Salva os serviços atualizados usando a API
      setEditingService(null);
      setImageFile(null);
    }
  };

  const handleAddService = () => {
    const newService: Service = {
      id: services.length + 1,
      title: 'Novo Serviço',
      description: 'Descrição do novo serviço.',
      imageUrl: '/placeholder.svg?height=100&width=100',
    };
    const updatedServices = [...services, newService];
    setServices(updatedServices);
    saveServices(updatedServices); // Salva o novo serviço usando a API
    setEditingService(newService);
  };

  const handleDeleteService = (id: number) => {
    const updatedServices = services.filter((s) => s.id !== id);
    setServices(updatedServices);
    saveServices(updatedServices); // Salva após exclusão usando a API
    if (editingService && editingService.id === id) {
      setEditingService(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const uploadImageToS3 = async (file: File) => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;

    if (!bucketName) {
      console.error('Nome do bucket não foi definido nas variáveis de ambiente');
      return null;
    }

    // Gera um nome único para o arquivo
    const uniqueFileName = `images/${uuidv4()}_${file.name}`;

    const params = {
      Bucket: bucketName,
      Key: uniqueFileName,
      Body: file,
      ContentType: file.type,
    };

    try {
      const command = new PutObjectCommand(params);
      const data = await s3.send(command);
      return `https://${bucketName}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${uniqueFileName}`;
    } catch (error) {
      console.error('Erro ao enviar imagem para o S3:', error);
      return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Administração</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nossos Serviços</h2>
          {services.map((service) => (
            <Card key={service.id} className="mb-4">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {service.title}
                  <Button variant="outline" size="icon" onClick={() => handleEditService(service)}>
                    <Save className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Image src={service.imageUrl} alt={service.title} width={100} height={100} className="rounded-md" />
                  <p className="text-sm">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Editar Serviço</h2>
          {editingService ? (
            <Card>
              <CardHeader>
                <CardTitle>Editando: {editingService.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="title">Título</Label>
                    <Input
                      id="title"
                      value={editingService.title}
                      onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      value={editingService.description}
                      onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Imagem</Label>
                    <Input type="file" id="image" onChange={handleImageChange} />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button onClick={handleUpdateService}>Salvar Alterações</Button>
              </CardFooter>
            </Card>
          ) : (
            <p>Selecione um serviço para editar.</p>
          )}
        </div>
      </div>
    </div>
  );
}
