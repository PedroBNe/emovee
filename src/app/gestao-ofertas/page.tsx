'use client';

import Link from 'next/link';
import FormInterface from '../../components/utils/Form';
import Button from '../../components/utils/Button';
import Banner from '../../components/utils/BannerTop';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';

interface Color {
  name: string;
  default: string;
  text?: string;
}

export default function Gest() {
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

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

    fetchColors();
  }, []);

  return (
    <div className="xl:relative w-full min-h-[50em] flex flex-col justify-center items-center gap-12">
      <Banner>Gestão de Ofertas</Banner>
      <div className="w-full min-h-[10em] flex flex-col justify-center xl:justify-start items-center xl:items-start">
        <div className="w-full h-[100%] flex flex-col justify-between items-center">
          <div className="w-[95%] sm:w-[75%] flex flex-col items-center justify-around gap-[75px] text-start">
            <h2 className="text-2xl lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              Gerencie suas ofertas de maneira segura e eficaz!
            </h2>
            <p className="text-md lg:text-xl">
              Integramos todas as fases do processo de criação de ofertas em nossa plataforma, promovendo colaboração
              eficiente entre todos os setores envolvidos. Oferecemos flexibilidade para realizar ajustes em tempo real,
              garantindo um fluxo de trabalho otimizado e colaborativo. Além disso, nosso software proporciona análise
              de dados em tempo real, auxiliando na tomada de decisões estratégicas.
            </p>
            <div className="w-[600px] h-[400px] bg-white shadow-2xl flex justify-center items-center rounded-xl mb-8">
              Video
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              A solução que você procura
            </h2>
            <p className="text-md lg:text-xl">
              Administre as suas ofertas de maneira unificada, concentrando todas as informações essenciais em um único
              ambiente. Ganhe em produtividade e clareza ao unificar seus processos, facilitando a tomada de decisões
              estratégicas e a execução de campanhas com maior precisão e impacto.
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              Criação de Tabloides
            </h2>
            <p className="text-md lg:text-xl">
              Nosso software é integrado, por isso, você conseguirá gerir suas ofertas e criar tabloides estratégicos e
              assertivos. Desta maneira, os materiais promocionais ficam prontos em alguns segundos, de maneira rápida e
              intuitiva.
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              100% completo
            </h2>
            <p className="text-md lg:text-xl">
              Por ser integrada com o ERP, nossa plataforma possui uma grande biblioteca de fotos dos produtos, bem
              cadastro com informações completas e relevantes.
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              Acompanhamento em tempo real
            </h2>
            <p className="text-md lg:text-xl">
              Temos um local exclusivo para você acompanhar como está o processo de desenvolvimento dos cartazes de
              oferta, para facilitar a aprovação e eliminar erros de diagramação antes da impressão.
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              Economize tempo
            </h2>
            <p className="text-md lg:text-xl">
              Elimine atividades manuais e simplifique o processo de criação dos materiais de oferta! Com poucos
              cliques, sua equipe ganha eficiência operacional e consegue focar em processos estratégicos.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <FormInterface />
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
