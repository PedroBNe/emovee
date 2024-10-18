'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewCategory() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        router.push('/dashboard/category');
      } else {
        console.error('Erro ao criar categoria.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-fit flex flex-col gap-3 bg-white rounded-xl p-4'>
      <h2 className='font-semibold '>New Category</h2>
      <Input
        name="name"
        placeholder="Category Name"
        value={name}
        onChange={handleChange}
        required
      />
      <Button type="submit">Create Category</Button>
    </form>
  );
}
