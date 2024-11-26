'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type OnlineClass = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  students: string;
};

export default function OnlineClassList() {
  const [classes, setClasses] = useState<OnlineClass[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch('/api/onlineclass');
      const data = await res.json();
      setClasses(data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="w-full min-h-screen py-4 flex justify-center text-black">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-3xl">Online Classes</h1>
          <Link href={'/dashboard/onlineclass/new'}>
            <Button>Criar midia</Button>
          </Link>
        </div>
        <ul className="p-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {classes.map((onlineClass, index) => (
            <Card key={onlineClass.id} className="h-[350px] flex flex-col justify-between bg-white">
              <CardHeader className="w-full">
                <CardTitle>{onlineClass.title}</CardTitle>
                <CardDescription>{onlineClass.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex  flex-col gap-3 text-sm">
                <p>Data: {new Date(onlineClass.date).toLocaleDateString()}</p>
                {onlineClass.imageUrl && (
                  <Image
                    src={onlineClass.imageUrl}
                    alt={onlineClass.title}
                    width={100}
                    height={100}
                    className="max-h-[90px]"
                  />
                )}
                <p className="w-fit border-[1px] border-black border-opacity-20 p-1 px-2 rounded-sm">
                  Alunos: {onlineClass.students}
                </p>
              </CardContent>
              <CardFooter className="w-full flex justify-between">
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
