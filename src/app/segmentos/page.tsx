'use client';

import Link from 'next/link';
import Button from '../../components/utils/Button';
import Banner from '../../components/utils/BannerTop';
import SegSup from './Seg-Sup';
import SegFarma from './Seg-Farma';
import SegHome from './Seg-Home';
import SegAta from './Seg-Ata';
import SegElec from './Seg-Elec';
import Header from '../../components/utils/Header';
import SegOut from './Seg-Out';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Seg() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-between items-center gap-12">
      <Banner>Segmentos</Banner>
      <div className="w-[90%] flex flex-col gap-10 justify-between items-center px-3 mb-10 text-start">
        <div className="w-full md:w-[75%] flex items-center justify-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1e90ff]">
            Descubra os segmentos que podemos ajudar com as nossas soluções!
          </h2>
        </div>
        <div
          className="w-full md:w-[75%] flex flex-col items-start justify-around text-start py-8 md:px-8 gap-12"
          data-aos="fade-up"
        >
          <p className="text-md lg:text-xl">
            Descubra como nossa plataforma pode transformar a gestão de cartazes em diversos setores, proporcionando uma
            solução eficiente e precisa para substituir métodos manuais.
          </p>
          <p className="text-md lg:text-xl">
            Supermercados, atacarejos, home centers e farmácias são apenas alguns dos segmentos que podem revolucionar
            sua operação com nossa tecnologia.
          </p>
          <p className="text-md lg:text-xl">
            Ganhe em eficiência, reduza erros e aumente a agilidade na atualização de informações, garantindo uma
            comunicação visual eficaz e alinhada com suas estratégias de marketing e vendas.
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-[90px] py-5">
        <p id='sup'></p>
        <SegSup />
          <p id='farmma'></p>
        <SegFarma />
          <p id='home'></p>
        <SegHome />
          <p id='ata'></p>
        <SegAta />
          <p id='elec'></p>
        <SegElec />
          <p id='out'></p>
        <SegOut />
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
