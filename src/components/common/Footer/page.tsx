'use client';

import Link from 'next/link';
import { Sites } from './Sites';
import Instagram from '@/assets/social-insta.png';
import Linkedin from '@/assets/social-linkedin.png';
import WhatsApp from '@/assets/social-whatsapp.png';
import Email from '@/assets/social-email.png';
import Location from '@/assets/location.png';
import { Images } from './Images';
import { Information } from './Information';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

// Configuração do S3 Client
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface CompanyInfo {
  celular: string;
  email: string;
  endereco: string;
  instagram: string;
  linkedin: string;
  logoUrl: string; // Adicionamos o logoUrl
}

export default function Footer() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    setIsVisible(!pathname.startsWith('/dashboard'));
    loadCompanyInfo();
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

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  if (!isVisible || !companyInfo) return null;

  return (
    <footer className="w-full bg-back min-h-40 flex flex-col justify-between text-text-primary">
      <div className="flex flex-col md:flex-row justify-center gap-[90px] md:gap-[120px] xl:gap-[250px] items-center md:items-start py-10">
        <div className="hover:opacity-60">
          <Link href="/">
            <Image src={companyInfo.logoUrl} alt="Logo da Empresa" width={200} height={200} className="rounded-lg" />
          </Link>
        </div>
        <div>
          <ul className="flex flex-col items-center sm:items-start gap-3">
            <li className="hover:opacity-60 hover:underline">
              <Link href="/">Inicio</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link href="/segmentos">Servicos</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link href="/fale-especialista">Suporte</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link href="/privacidade">Politicas de Privacidade</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link href="/termos-de-uso">Termos de Uso</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col pb-1">
          <div className="flex flex-col gap-3">
            <div>
              <Images image={WhatsApp} alt="whatsapp" text="Telefone:" />
              <Link href={`tel:${companyInfo.celular}`}>
                <Information text={companyInfo.celular} />
              </Link>
            </div>
            <div>
              <Images image={Email} alt="email" text="E-mail:" />
              <Link href={`mailto:${companyInfo.email}`}>
                <Information text={companyInfo.email} />
              </Link>
            </div>
            <div>
              <Images image={Location} alt="location" text="Localizacao" />
              <Information text={companyInfo.endereco} />
            </div>
          </div>
        </div>
        <div>
          <p className="pb-1">Nossas Redes:</p>
          <div className="flex flex-row justify-around">
            <Link href={companyInfo.instagram} target="_blank">
              <Sites image={Instagram} alt="instagram" />
            </Link>
            <Link href={companyInfo.linkedin} target="_blank">
              <Sites image={Linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm sm:text-md">
        <p>&copy; 2024 E-movee todos os direitos reservados</p>
      </div>
    </footer>
  );
}
