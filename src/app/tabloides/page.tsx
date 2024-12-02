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

export default function Tablo() {
  const [colors, setColors] = useState<Color[]>([]);

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

    fetchColors();
  }, []);

  return (
    <div className="xl:relative w-full min-h-[50em] flex flex-col gap-12">
      <Banner>Tablóides</Banner>
      <div className="w-full min-h-[10em] flex flex-col gap-12 justify-center items-center">
        <div className="w-full h-[100%] flex flex-col justify-between items-center" data-aos="fade-right">
          <div className="w-[80%] flex flex-col items-start justify-around gap-12">
            <h2 className="text-lg lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              A otimização para a precificação de ofertas!
            </h2>
            <p className="text-sm lg:text-xl">
              Transforme a comunicação visual da sua empresa com nossa plataforma. Alcance a padronização e agilidade
              que você sempre desejou com mais de dois mil modelos de cartazes à sua disposição. Encontre rapidamente o
              design perfeito para atender às suas necessidades e eleve a qualidade da sua comunicação visual.
            </p>
            <h2 className="text-lg lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }}>
              Um software, uma solução
            </h2>
            <p className="text-sm lg:text-xl">
              Ao utilizar nosso software, você poderá dizer adeus aos processos manuais e erros indesejados. Nossa
              solução é ideal para quem busca criar cartazes atrativos de maneira rápida e fácil. Simplifique seu
              trabalho e eleve a qualidade da sua comunicação visual com nossa plataforma.
            </p>
          </div>
        </div>
        <div className="w-[600px] h-[400px] rounded-xl bg-white shadow-2xl flex justify-center items-center">Video</div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <div className="w-[80%] flex flex-col items-start justify-around gap-12">
          <h2 className="text-lg lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }} data-aos="fade-right">
            Benefícios
          </h2>
          <p className="text-sm lg:text-xl" data-aos="fade-left">
            Nossa plataforma é a solução para quem busca padronizar a comunicação de suas lojas, criando cartazes
            alinhados com a identidade visual e a oferta desejada. Integrando-se ao seu ERP, nossa plataforma facilita a
            criação de campanhas de cartazes em grande escala, garantindo distribuição rápida e eficiente em diversos
            locais. Com gestão centralizada, você ganha agilidade e reduz significativamente os custos operacionais,
            eliminando erros e otimizando recursos.
          </p>
          <h2 className="text-lg lg:text-4xl font-bold" style={{ color: colors?.[2]?.default }} data-aos="fade-right">
            Experiência do cliente
          </h2>
          <p className="text-sm lg:text-xl" data-aos="fade-left">
            Crie cartazes que captem a atenção dos seus clientes, sem renunciar à sua identidade visual! Nossa
            plataforma oferece uma comunicação visual atrativa e impactante para suas ofertas, garantindo que suas
            mensagens se destaquem melhorem a experiência dos consumidores.
          </p>
        </div>
        <div className="mt-16">
          <FormInterface />
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
