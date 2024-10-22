'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Visit = {
  id: string;
  title: string;
  imageUrl: string;
};

export default function VisitList() {
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    const fetchVisits = async () => {
      const res = await fetch('/api/visit');
      const data = await res.json();
      setVisits(data);
    };
    fetchVisits();
  }, []);

  return (
    <div className='w-full min-h-screen py-4 flex justify-center text-black'>
      <div className='w-full flex flex-col'>
        <div className='w-full flex justify-between'>
          <h1 className='font-bold text-3xl'>Lista de visitas</h1>
          <Link href={"/dashboard/visit/new"}>
            <Button>Criar visita</Button>
          </Link>
        </div>
        <ul className='p-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
          {visits.map((visit, index) => (
            <Card key={visit.id} className='max-h-[350px] flex flex-col justify-between bg-white'>
              <CardHeader>
                <CardTitle>{visit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {visit.imageUrl && <Image src={visit.imageUrl} alt={visit.title} width={200} height={200} className='max-h-[90px]' />}
              </CardContent>
              <CardFooter className='w-full flex justify-between'>
                <Button variant={'destructive'}>Excluir</Button>
                <Link href={`/dashboard/onlineclass/${index}`}>
                  <Button>Editar</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
