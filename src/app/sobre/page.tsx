'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../../components/utils/Button';
import Banner from '../../components/utils/BannerTop';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { CarouselPartiners } from './CarouselPartiners';
import WeHave from './WeHave';
import Header from '../../components/utils/Header';
import AboutEmo from './AboutE';
import Image from 'next/image';

interface PartnerLogo {
  id: number;
  url: string;
}

// Configuração do S3 Client para buscar os dados
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export default function About() {
  const [partnerLogos, setPartnerLogos] = useState<PartnerLogo[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    loadPartnerLogos();
  }, []);

  const loadPartnerLogos = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/about.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const aboutData = JSON.parse(bodyContents);
        setPartnerLogos(aboutData.partnerLogos);
      } else {
        console.error("Erro: Dados de 'partnerLogos' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar 'partnerLogos' do S3:", error);
    }
  };

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  return (
    <div className="w-full min-h-[100em] flex flex-col gap-12 justify-center items-center">
      <Banner>Soluções inteligentes para a sua loja!!!</Banner>
      <AboutEmo />
      <Header>Temos</Header>
      <WeHave />
      <Header>Empresas parceiras</Header>
      <div className="w-[80%] min-h-[7em] flex flex-row justify-center items-center">
        <div className="w-[70%] flex flex-col justify-center items-center">
          {/* Passa os logos dos parceiros para o carrossel */}
          <CarouselPartiners slides={partnerLogos.map((logo) => ({ imagem: logo.url }))} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center px-5">
        <div className="w-full min-h-[18em] bg-black rounded-[60px] flex gap-12 flex-col justify-center items-center">
          <h2 className="text-white text-5xl font-bold">Dúvidas?</h2>
          <Link href="/fale-especialista">
            <Button>Fale com um Especialista</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
