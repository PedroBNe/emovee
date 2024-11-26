'use client';

import { useState, useEffect } from 'react';
import Imagem from '@/assets/location.png';
import Imagem2 from '@/assets/insta-media.png';
import Imagem3 from '@/assets/social-insta.png';
import Imagem4 from '@/assets/values.png';
import { StaticImageData } from 'next/image';
import { CarouselEmovee } from './CarouselEmovee';
import React from 'react';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

interface AboutContent {
  title: string;
  description: string;
  sideText: string;
  sideImages: Array<{ id: number; url: string }>;
}

interface Slide {
  imagem: StaticImageData | string;
}

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export default function AboutEmo() {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    loadAboutContent();
  }, []);

  const loadAboutContent = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/about.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const aboutData = JSON.parse(bodyContents);
        setContent({
          title: aboutData.content.title,
          description: aboutData.content.description,
          sideText: aboutData.content.sideText,
          sideImages: aboutData.sideImages,
        });

        // Configura os slides usando as URLs das imagens no JSON
        const slideData = aboutData.sideImages.map((img: { id: number; url: string }) => ({
          imagem: img.url,
        }));
        setSlides(slideData);
      } else {
        console.error("Erro: Dados de 'sobre' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdo 'Sobre' do S3:", error);
    }
  };

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  if (!content) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="w-full min-h-[35em] flex flex-col xl:flex-row gap-8">
      {/* Text Section */}
      <div
        className="w-full xl:w-[60%] h-full flex flex-col justify-center items-center gap-12 lg:mx-16"
        data-aos="fade-right"
      >
        <h2 className="text-start text-2xl xl:text-4xl font-bold text-text">{content.title}</h2>
        <div className="text-md xl:text-xl text-start flex flex-col gap-8">
          <p>{content.sideText}</p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full xl:w-[50%] flex justify-center items-center" data-aos="fade-left">
        <div className="w-[450px] shadow-2xl rounded-lg bg-white min-h-[7em] flex flex-row justify-center items-center">
          <div className="w-full h-full flex justify-center items-center">
            <CarouselEmovee slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}
