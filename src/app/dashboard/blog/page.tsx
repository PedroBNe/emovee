'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Blog = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
  imageUrl: string;
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog', {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error(`Erro: ${res.status}`);
      }

      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Falha ao buscar os posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='w-full min-h-screen py-4 flex justify-center text-black'>
      <div className='w-full flex flex-col h-auto'>
        <div className='w-full flex justify-between'>
          <h1 className='font-bold text-3xl'>Blog List</h1>
          <Link href={"/dashboard/blog/new"}>
            <Button>Criar Post</Button>
          </Link>
        </div>
        <ul className='p-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
          {blogs.map((blog) => (
            <li key={blog.id} className='w-auto max-h-[350px] p-4 flex flex-col justify-between items-center bg-[#111827] text-white rounded-xl'>
              <h2 className='w-full font-bold text-lg'>{blog.title}</h2>
              <div className='w-full'>
                <p>Sobre: {blog.subtitle}</p>
                <p>Data: {new Date(blog.date).toLocaleDateString()}</p>
              </div>
              <Image src={blog.imageUrl} alt={blog.title} width={200} height={200} className='my-4'/>
              <div className='w-full flex justify-between'>
                <Button variant={'secondary'}>Editar</Button>
                <Button variant={'destructive'}>Excluir</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
