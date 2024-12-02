'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import useWindowSize from '@/components/utils/Window';
import { usePathname } from 'next/navigation';
import MenuIcon from '@/assets/menu-icon';
import CloseMenu from '@/assets/close-menu-icon';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface CompanyInfo {
  logoUrl: string; // Adicionamos o logoUrl
}

interface Colors {
  name: string;
  default: string;
  text?: string;
}

export default function Header() {
  const window = useWindowSize();
  const [menu, setMenu] = useState(false);
  const [IsHiddenSolution, setIsHiddenSolution] = useState(false);
  const [IsHiddenSeg, setIsHiddenSeg] = useState(false);

  const [colors, setColors] = useState<Colors[]>([]);

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const handleScroll = () => (document.body.style.position = 'sticky'); // Can scroll down

  const handleNoScroll = () => (document.body.style.position = 'fixed'); // Can not scroll down

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  const fetchColors = async () => {
    try {
      const response = await fetch('/api/color');
      if (response.ok) {
        const data = await response.json();
        setColors(data);
      } else {
        console.error('Erro ao buscar as cores');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setIsVisible(!pathname.startsWith('/dashboard'));

    loadCompanyInfo();
    fetchColors();
  }, [pathname]);

  const loadCompanyInfo = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/informacoes.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const info = JSON.parse(bodyContents);
        setCompanyInfo(info);
      } else {
        console.error("Erro: Dados de 'informacoes.json' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar 'informacoes.json' do S3:", error);
    }
  };

  if (!isVisible || !companyInfo) return null;

  return (
    <header
      className="w-full h-[12vh] 2xl:h-[10vh] flex justify-between items-center px-5 relative"
      style={{ backgroundColor: colors?.[0]?.default, color: colors?.[0]?.text }}
    >
      <div className="relative w-full max-w-36 h-full max-h-10 flex items-center justify-center">
        <Link href="/Home">
          <Image src={companyInfo.logoUrl} alt="logo-emove" fill quality={100} />
        </Link>
      </div>
      {window.width > 1150 && (
        <>
          <nav className="hidden lg:flex justify-center items-center font-semibold absolute left-[15%] xl:left-[37%]">
            <ul className="flex flex-row gap-10">
              <li>
                <Link href="/Home">Inicio</Link>
              </li>
              <li
                className="relative cursor-pointer justify-center items-center flex"
                onMouseEnter={() => setIsHiddenSolution(true)}
                onMouseLeave={() => setIsHiddenSolution(false)}
              >
                <Link href="/cartazeamento">Serviços</Link>
                {IsHiddenSolution && (
                  <ul
                    className="flex delay-300 gap-4 rounded-lg absolute z-10 top-6 justify-center items-center flex-col p-5 overflow-ellipsis whitespace-nowrap"
                    style={{
                      backgroundColor: colors?.[0]?.default,
                      color: colors?.[0]?.text,
                      border: `2px solid ${colors?.[0]?.text}`,
                    }}
                    data-aos="fade-down"
                    data-aos-duration="200"
                    data-aos-offset="300"
                  >
                    <li>
                      <Link href="/cartazeamento">Cartazeamento</Link>
                    </li>
                    <li>
                      <Link href="/gestao-ofertas">Gestão de Ofertas</Link>
                    </li>
                    <li>
                      <Link href="/tabloides">Tablóides</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="relative cursor-pointer justify-center items-center flex"
                onMouseEnter={() => setIsHiddenSeg(true)}
                onMouseLeave={() => setIsHiddenSeg(false)}
              >
                <p>
                  <Link href="/segmentos">Segmentos</Link>
                </p>
                {IsHiddenSeg && (
                  <ul
                    className="flex z-10 delay-300 gap-4 rounded-lg absolute top-6 justify-center items-center flex-col p-5 overflow-ellipsis whitespace-nowrap"
                    style={{
                      backgroundColor: colors?.[0]?.default,
                      color: colors?.[0]?.text,
                      border: `2px solid ${colors?.[0]?.text}`,
                    }}
                    data-aos="fade-down"
                    data-aos-duration="200"
                    data-aos-offset="300"
                  >
                    <li>
                      <Link href="/segmentos#sup">Supermercados</Link>
                    </li>
                    <li>
                      <Link href="/segmentos#farma">Farmácias</Link>
                    </li>
                    <li>
                      <Link href="/segmentos#home">Home Centers</Link>
                    </li>
                    <li>
                      <Link href="/segmentos#ata">Atacarejos</Link>
                    </li>
                    <li>
                      <Link href="/segmentos#elec">Eletromóveis</Link>
                    </li>
                    <li>
                      <Link href="/segmentos#out">Outros segmentos</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <Link href="/Blog">Conteúdos</Link>
              </li>
            </ul>
          </nav>
          <div className="hidden gap-5 lg:flex justify-center items-center absolute right-2">
            <Link href="/fale-especialista">
              <button
                className="transition w-fit font-bold rounded-full py-3 2xl:py-4 px-4 2xl:px-6 hover:opacity-80 items-center"
                style={{ backgroundColor: colors?.[1]?.default, color: colors?.[1]?.text }}
              >
                Fale com um Especialista
              </button>
            </Link>
          </div>
        </>
      )}
      {window.width <= 1150 && menu === false && (
        <button
          onClick={() => {
            setMenu(!menu);
            handleNoScroll();
          }}
        >
          <MenuIcon w={25} h={25} color={colors?.[0]?.text} />
        </button>
      )}
      {menu && (
        <div
          className="w-full h-screen fixed left-0 bottom-0 z-20"
          style={{ backgroundColor: colors?.[0]?.default, color: colors?.[0]?.text }}
        >
          <nav className="relative w-full h-full flex justify-center items-center">
            <ul className="w-fit flex flex-col gap-7 justify-center items-center font-bold">
              <li>
                <Link
                  href="/Home"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <Link href="/cartazeamento">Cartazeamento</Link>
              </li>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <Link href="/gestao-ofertas">Gestão de Ofertas</Link>
              </li>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <Link href="/tabloides">Tablóides</Link>
              </li>
              <li>
                <Link
                  href="/segmentos"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Segmentos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/Blog"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Conteúdos
                </Link>
              </li>
              <ul className="flex flex-col justify-center items-center gap-3">
                <li>
                  <Link
                    href="/fale-especialista"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  >
                    <button
                      className="transition w-fit font-bold rounded-full py-3 px-4 items-center"
                      style={{ backgroundColor: colors?.[1]?.default, color: colors?.[1]?.text }}
                    >
                      Fale com um Especialista
                    </button>
                  </Link>
                </li>
              </ul>
            </ul>
            <button
              className="absolute right-9 top-[85px]"
              onClick={() => {
                setMenu(!menu);
                handleScroll();
              }}
            >
              <CloseMenu Width={25} Height={25} color={colors?.[0]?.text} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
