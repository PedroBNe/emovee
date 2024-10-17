'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Info = {
  logo: string;
  email: string;
  phoneNumber: string;
  address: string;
  politicas: string;
  cookies: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [info, setInfo] = useState<Info | null>(null);

  const fetchInfo = async () => {
    try {
      const res = await fetch('/api/info');
      if (!res.ok) throw new Error(`Erro ao buscar Info: ${res.status}`);

      const data = await res.json();
      setInfo(data);
    } catch (err) {
      console.error('Erro ao buscar Info:', err);
    }
  };

  // Chama a função ao carregar o componente
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen absolute top-0 z-30">
      <nav className="w-full h-[11vh] flex justify-between items-center p-8 bg-[#111827]">
        <div className="w-fit flex justify-center items-center">
          {info && (
            <Image src={info.logo} alt="logo" width={120} height={120} />
          )}
        </div>
        <div className="flex gap-8">
          <Button variant={'secondary'}>Administração</Button>
          <Link href={'/Home'}>
            <Button variant={'destructive'}>Sair</Button>
          </Link>
        </div>
      </nav>
      <div className="w-full h-auto flex text-black">
        <nav className="w-[350px] flex justify-center bg-gray-900 text-white">
          <hr className="w-[250px] bg-white absolute"/>
          <div className="w-full flex flex-col items-center text-start font-bold">
            <Link
              href={`/dashboard/about`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Analytics
            </Link>
            <Link
              href={`/dashboard/blog`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Clientes
            </Link>
            <Link
              href={`/dashboard/category`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Configuração
            </Link>
            <Link
              href={`/dashboard/info`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              E-mails
            </Link>
            <Link
              href={`/dashboard/midia`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Formulários
            </Link>
            <Link
              href={`/dashboard/onlineclass`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Leads
            </Link>
            <Link
              href={`/dashboard/visit`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              LGPD
            </Link>
            <Link
              href={`/dashboard/about`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Pagina Blog
            </Link>
            <Link
              href={`/dashboard/blog`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Pagina Inicial
            </Link>
            <Link
              href={`/dashboard/category`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Pop-up
            </Link>
            <Link
              href={`/dashboard/info`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Redes Sociais
            </Link>
            <Link
              href={`/dashboard/midia`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Serviços
            </Link>
            <Link
              href={`/dashboard/onlineclass`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Textos e Imagens
            </Link>
            <Link
              href={`/dashboard/visit`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Tripulação
            </Link>
            <Link
              href={`/dashboard/visit`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              WhatsApp
            </Link>
            <Link
              href={`/dashboard/about`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Sobre
            </Link>
            <Link
              href={`/dashboard/blog`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Blog
            </Link>
            <Link
              href={`/dashboard/category`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Categoria
            </Link>
            <Link
              href={`/dashboard/info`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Informação
            </Link>
            <Link
              href={`/dashboard/midia`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Na Midia
            </Link>
            <Link
              href={`/dashboard/onlineclass`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Aulas online
            </Link>
            <Link
              href={`/dashboard/visit`}
              className="w-full h-fit p-3 hover:bg-slate-600 transition"
            >
              Visitas
            </Link>
          </div>
        </nav>
        <main className="w-full p-6">{children}</main>
      </div>
    </div>
  );
}
