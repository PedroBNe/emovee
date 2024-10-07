'use client';

import { Carousel } from './Carousel';
import Imagem from '@/assets/logo-white.png';
import { StaticImageData } from 'next/image';
import Header from '@/components/utils/Header';
import Emovee from './Emovee';
import Services from './Services';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import CardLink from './CardLink';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface slide {
  imagem: StaticImageData;
  text: string;
}

const slides: slide[] = [
  {
    imagem: Imagem,
    text: 'A agilidade que você sempre sonhou! ',
  },
  {
    imagem: Imagem,
    text: 'Defina ofertas estratégicas para o seu negócio. ',
  },
  {
    imagem: Imagem,
    text: 'O caminho de sucesso para a sua empresa! ',
  },
  {
    imagem: Imagem,
    text: 'Desfrute da rapidez que impulsiona resultados. ',
  },
];

const gradientVariants = {
  gradient1: { background: 'linear-gradient(to right, #00A000, #BE0000)' },
  gradient2: { background: 'linear-gradient(to right, #BE0000, #969673)' },
  gradient3: { background: 'linear-gradient(to right, #969673, #808000)' },
  gradient5: { background: 'linear-gradient(to right, #808000, #800080)' },
  gradient6: { background: 'linear-gradient(to right, #800080, #008080)' },
  gradient7: { background: 'linear-gradient(to right, #008080, #000080)' },
  gradient8: { background: 'linear-gradient(to right, #000080, #00A000)' },
};

export default function Home() {
  const [currentGradient, setCurrentGradient] = useState('gradient1');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentGradient((prev) => {
        const gradientKeys = Object.keys(gradientVariants);
        const currentIndex = gradientKeys.indexOf(prev);
        return gradientKeys[(currentIndex + 1) % gradientKeys.length];
      });
    }, 2000); // Altere o gradiente a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="w-full h-full relative">
      <motion.div
        className="w-full h-[55em] text-white mb-10 z-10 rounded-b-[70px]"
        variants={gradientVariants}
        animate={currentGradient}
        transition={{ duration: 2 }}
      >
        <Carousel slides={slides} />
      </motion.div>
      <div className="w-full min-h-[105em] flex flex-col items-center rounded-t-[70px]">
        <Emovee />
        <Services />
        <Benefits />
        <Testimonials />
        <div className="w-full">
          <Header>Teste grátis</Header>
        </div>
        <CardLink />
      </div>
    </div>
  );
}
