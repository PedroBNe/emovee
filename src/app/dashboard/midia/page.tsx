'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Midia = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
  imageUrl: string;
};

export default function MidiaList() {
  const [midias, setMidias] = useState<Midia[]>([]);

  useEffect(() => {
    const fetchMidias = async () => {
      const res = await fetch('/api/midia');
      const data = await res.json();
      setMidias(data);
    };
    fetchMidias();
  }, []);

  return (
    <div className="w-full min-h-screen py-4 flex justify-center text-black">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-3xl">Midia List</h1>
          <Link href={'/dashboard/midia/new'}>
            <Button>Criar midia</Button>
          </Link>
        </div>
        <ul className="p-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {midias.map((midia, index) => (
            <Card key={midia.id}>
              <CardHeader className="w-full">
                <CardTitle>{midia.title}</CardTitle>
                <CardDescription>{midia.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{new Date(midia.date).toLocaleDateString()}</p>
                <p>{midia.content}</p>
                {/* {midia.imageUrl && <img src={midia.imageUrl} alt={midia.title} width={100} />} */}
              </CardContent>
              <CardFooter className="w-full flex justify-between">
                <Button variant={'destructive'}>Excluir</Button>
                <Link href={`/dashboard/midia/${index}`}>
                  <Button variant={'secondary'}>Editar</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
