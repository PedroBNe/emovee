'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type OnlineClassForm = {
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  students: string;
};

export default function EditOnlineClass() {
  const [form, setForm] = useState<OnlineClassForm>({
    title: '',
    subtitle: '',
    date: '',
    imageUrl: '',
    students: '',
  });

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchClass = async () => {
      const res = await fetch(`/api/onlineclass/${id}`);
      const data = await res.json();
      setForm(data);
    };
    fetchClass();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/onlineclass/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push('/onlineclass');
      } else {
        console.error('Erro ao atualizar aula online.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <div className='w-full min-h-screen flex flex-col gap-4 text-black'>
      <h2 className='font-bold text-3xl'>Editar Aula</h2>
      <form onSubmit={handleSubmit} className='w-fit h-auto p-4 flex flex-col gap-2 bg-white rounded-lg'>
        <Input placeholder='Titulo' name="title" value={form.title} onChange={handleChange} required />
        <Input placeholder='Subtitulo' name="subtitle" value={form.subtitle} onChange={handleChange} required />
        <Input name="date" type="date" value={form.date} onChange={handleChange} required />
        <Input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
        <Textarea placeholder="Descrição" name="students" value={form.students} onChange={handleChange} />
        <Button type="submit">Update Online Class</Button>
      </form>
    </div>
  );
}
