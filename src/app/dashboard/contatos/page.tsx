'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  documento: string;
  tipoDocumento: string;
  empresa: string;
  segmento: string;
}

export default function DashboardContatos() {
  const [contatos, setContatos] = useState<Contato[]>([]);

  useEffect(() => {
    loadContatos();
  }, []);

  const loadContatos = async () => {
    try {
      const response = await fetch('/api/register-contact');
      if (response.ok) {
        const data = await response.json();
        setContatos(data.contatos || []);
      } else {
        console.error('Erro ao carregar contatos:', await response.json());
      }
    } catch (error) {
      console.error('Erro ao carregar contatos:', error);
    }
  };

  const handleRemover = async (id: number) => {
    try {
      const response = await fetch('/api/register-contact', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const updatedContatos = contatos.filter((c) => c.id !== id);
        setContatos(updatedContatos);

        toast({
          title: 'Contato removido',
          description: 'O contato foi removido com sucesso.',
          variant: 'destructive',
        });
      } else {
        console.error('Erro ao remover contato:', await response.json());
        toast({
          title: 'Erro',
          description: 'Não foi possível remover o contato.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Erro ao remover contato:', error);
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao tentar remover o contato.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Lista de Contatos</h1>

      <Card>
        <CardHeader>
          <CardTitle>Contatos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Tipo de Documento</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Segmento</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contatos.map((contato) => (
                <TableRow key={contato.id}>
                  <TableCell>{contato.nome}</TableCell>
                  <TableCell>{contato.email}</TableCell>
                  <TableCell>{contato.telefone}</TableCell>
                  <TableCell>{contato.documento}</TableCell>
                  <TableCell>{contato.tipoDocumento}</TableCell>
                  <TableCell>{contato.empresa}</TableCell>
                  <TableCell>{contato.segmento}</TableCell>
                  <TableCell>
                    <Button variant="destructive" size="icon" onClick={() => handleRemover(contato.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
