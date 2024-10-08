'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar o novo post
    console.log('Novo post:', { title, content });
    // Resetar os campos após o envio
    setTitle('');
    setContent('');
  };

  return (
    <div className="w-full h-screen flex justify-center p-10">
      <Card className="w-[400px] h-fit">
        <CardHeader>
          <CardTitle>Criar Novo Post</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <CardContent className="space-y-4">
            <div className="w-full">
              <label htmlFor="title" className="w-full block text-sm font-medium text-gray-700">
                Título
              </label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="w-full">
              <label htmlFor="title" className="w-full block text-sm font-medium text-gray-700">
                Categoria
              </label>
              <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div className="w-full">
              <label htmlFor="content" className="w-full block text-sm font-medium text-gray-700">
                Conteúdo
              </label>
              <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required rows={10} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Imagem</Label>
              <Input id="picture" type="file" />
            </div>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button type="submit">Publicar Post</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
