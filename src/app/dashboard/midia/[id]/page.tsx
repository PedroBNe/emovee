'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type MidiaForm = {
  title: string;
  subtitle: string;
  date: string;
  content: string;
  imageUrl: string;
};

export default function EditMidia() {
  const [form, setForm] = useState<MidiaForm>({
    title: '',
    subtitle: '',
    date: '',
    content: '',
    imageUrl: '',
  });

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchMidia = async () => {
      const res = await fetch(`/api/midia/${id}`);
      const data = await res.json();
      setForm(data);
    };
    fetchMidia();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/midia/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push('/midia');
      } else {
        console.error('Erro ao atualizar mídia.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <div className='w-full min-h-screen flex flex-col gap-4 text-black'>
      <h2 className='font-bold text-3xl'>Editar Post Midia</h2>
      <form onSubmit={handleSubmit} className='w-fit h-auto p-4 flex flex-col gap-2 bg-white rounded-lg'>
        <h2 className='font-semibold'>Post</h2>
        <Input placeholder='Titulo' name="title" value={form.title} onChange={handleChange} required />
        <Input placeholder='Subtitulo' name="subtitle" value={form.subtitle} onChange={handleChange} required />
        <Input name="date" type="date" value={form.date} onChange={handleChange} required />
        <Textarea placeholder='Descrição' name="content" value={form.content} onChange={handleChange} required />
        <Input type='file' name="imageUrl" value={form.imageUrl} onChange={handleChange} />
        <Button variant={'secondary'} type="submit">Update Midia</Button>
      </form>
    </div>
  )
}
