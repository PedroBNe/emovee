'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

type VisitForm = {
  title: string;
  imageUrl: string;
};

export default function EditVisit() {
  const [form, setForm] = useState<VisitForm>({
    title: '',
    imageUrl: '',
  });

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchVisit = async () => {
      const res = await fetch(`/api/visit/${id}`);
      const data = await res.json();
      setForm(data);
    };
    fetchVisit();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/visit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push('/visit');
      } else {
        console.error('Erro ao atualizar visita.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white'>
      <input name="title" value={form.title} onChange={handleChange} required />
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
      <Button type="submit">Update Visit</Button>
    </form>
  );
}
