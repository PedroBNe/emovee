'use client';

import { useState, useEffect } from 'react';
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

export default function AboutEmo() {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    loadAboutContent();
  }, []);

  const loadAboutContent = async () => {
    try {
      const data = await fetch('https://imagensladingpage.s3.sa-east-1.amazonaws.com/data/about.json').then((res) => res.json());

      setSlides(data.sideImages.map((image: { url: any; }) => ({ imagem: image.url })));
      setContent(data.content);
    } catch (error) {
      console.error("Erro ao carregar conteúdo 'Sobre' do S3:", error);
    }
  };

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
