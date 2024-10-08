'use client';

import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Button from '../../components/utils/Button';
import Banner from '../../components/utils/BannerTop';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Imagem from '@/assets/location.png';
import Imagem2 from '@/assets/insta-media.png';
import Imagem3 from '@/assets/social-insta.png';
import Imagem4 from '@/assets/values.png';
import { CarouselPartiners } from './CarouselPartiners';
import WeHave from './WeHave';
import Header from '../../components/utils/Header';
import AboutEmo from './AboutE';
import React from 'react';

interface slide {
  imagem: StaticImageData;
}

const slides: slide[] = [
  {
    imagem: Imagem,
  },
  {
    imagem: Imagem2,
  },
  {
    imagem: Imagem3,
  },
  {
    imagem: Imagem4,
  },
  {
    imagem: Imagem,
  },
  {
    imagem: Imagem2,
  },
  {
    imagem: Imagem3,
  },
  {
    imagem: Imagem4,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full min-h-[100em] flex flex-col gap-12 justify-center items-center">
      <Banner>Soluções inteligentes para a sua loja!!!</Banner>
      <AboutEmo />
      <Header>Temos</Header>
      <WeHave />
      <Header>Empresas parceiras</Header>
      <div className="w-[80%] min-h-[7em] flex flex-row justify-center items-center">
        <div className="w-[70%] flex flex-col justify-center items-center">
          <CarouselPartiners slides={slides} />
        </div>
      </div>
      <div className="w-full min-h-[18em] bg-black flex gap-12 flex-col justify-center items-center">
        <h2 className="text-white text-5xl font-bold">Dúvidas?</h2>
        <Link href="">
          <Button>Fale com um Especialista</Button>
        </Link>
      </div>
    </div>
  );
}
