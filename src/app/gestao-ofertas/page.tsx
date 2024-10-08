'use client';

import Link from 'next/link';
import FormInterface from '../../components/utils/Form';
import Button from '../../components/utils/Button';
import Banner from '../../components/utils/BannerTop';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Gest() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="xl:relative w-full min-h-[50em] flex flex-col justify-center items-center gap-12">
      <Banner>Gestão de Ofertas</Banner>
      <div className="w-full min-h-[10em] flex flex-col justify-center xl:justify-start items-center xl:items-start">
        <div className="w-full h-[100%] flex flex-col justify-between items-center" data-aos="fade-right">
          <div className="w-[95%] sm:w-[85%] flex flex-col items-center justify-around gap-12 text-start">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#1e90ff]">
              Gerencie suas ofertas de maneira segura e eficaz!
            </h2>
            <p className="text-md lg:text-xl">
              Integramos todas as fases do processo de criação de ofertas em nossa plataforma, promovendo colaboração
              eficiente entre todos os setores envolvidos. Oferecemos flexibilidade para realizar ajustes em tempo real,
              garantindo um fluxo de trabalho otimizado e colaborativo. Além disso, nosso software proporciona análise
              de dados em tempo real, auxiliando na tomada de decisões estratégicas.
            </p>
            <div className="w-[600px] h-[400px] bg-white shadow-2xl flex justify-center items-center rounded-xl">
              Video
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-[#1e90ff]">A solução que você procura</h2>
            <p className="text-md lg:text-xl">
              Administre as suas ofertas de maneira unificada, concentrando todas as informações essenciais em um único
              ambiente. Ganhe em produtividade e clareza ao unificar seus processos, facilitando a tomada de decisões
              estratégicas e a execução de campanhas com maior precisão e impacto.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <FormInterface />
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
