'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Category = {
  id: string;
  name: string;
};

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/category');
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className='w-full min-h-screen flex text-black'>
      <div className='w-full h-auto flex flex-col'>
        <div className='w-[55%] flex items-center justify-between gap-16'>
          <h1 className='font-bold text-3xl'>Category List</h1>
          <Link href={"/dashboard/category/new"}>
            <Button>Criar Categoria</Button>
          </Link>
        </div>
        <ul className='w-[50%] p-4 m-5 flex flex-col gap-2 justify-center items-center bg-white rounded-xl'>
          <div className='w-full flex justify-start mb-2'>
            <p>Categorias criadas</p>
          </div>
          {categories.map((category) => (
            <div key={category.id} className='w-full flex items-center gap-2'>
              <li className='w-full p-2 rounded-lg flex justify-center font-semibold bg-slate-200'>
                {category.name}
              </li>
              <Button variant={'destructive'}>Deletar</Button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
