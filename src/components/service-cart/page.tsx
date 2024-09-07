'use client'

import Link from "next/link";
import FormInterface from "../utils/Form";
import Button from "../utils/Button";
import Banner from "../utils/BannerTop";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Carta() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <div className="xl:relative w-full min-h-[100em] flex flex-col gap-12">
            <Banner>Cartazeamento</Banner>
            <div className="w-full min-h-[10em] flex flex-col justify-center xl:justify-start items-center xl:items-start">
                <div className="w-full xl:w-[50%] h-[100%] flex flex-col justify-between items-center" data-aos="fade-right">
                    <div className="w-[90%] flex flex-col items-start justify-around gap-12">
                        <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]">
                            A otimização para a precificação de ofertas! 
                        </h2>
                        <p className="text-sm lg:text-xl">
                            Transforme a comunicação visual da sua empresa com nossa plataforma. Alcance a padronização e agilidade que você sempre desejou com mais de dois mil modelos de cartazes à sua disposição. Encontre rapidamente o design perfeito para atender às suas necessidades e eleve a qualidade da sua comunicação visual.
                        </p>
                        <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]">
                            Um software, uma solução 
                        </h2>
                        <p className="text-sm lg:text-xl">
                            Ao utilizar nosso software, você poderá dizer adeus aos processos manuais e erros indesejados. Nossa solução é ideal para quem busca criar cartazes atrativos de maneira rápida e fácil. Simplifique seu trabalho e eleve a qualidade da sua comunicação visual com nossa plataforma.
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-16 xl:mt-0 xl:w-[50%] xl:absolute xl:right-0 xl:top-40">
                    <FormInterface />
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-8">
                <div className="w-[90%] flex flex-col items-start justify-around gap-12">
                    <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]" data-aos="fade-right">
                        Benefícios 
                    </h2>
                    <p className="text-sm lg:text-xl" data-aos="fade-left">
                        Nossa plataforma é a solução para quem busca padronizar a comunicação de suas lojas, criando cartazes alinhados com a identidade visual e a oferta desejada. Integrando-se ao seu ERP, nossa plataforma facilita a criação de campanhas de cartazes em grande escala, garantindo distribuição rápida e eficiente em diversos locais. Com gestão centralizada, você ganha agilidade e reduz significativamente os custos operacionais, eliminando erros e otimizando recursos. 
                    </p>
                    <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]" data-aos="fade-right">
                        Experiência do cliente 
                    </h2>
                    <p className="text-sm lg:text-xl" data-aos="fade-left">
                        Crie cartazes que captem a atenção dos seus clientes, sem renunciar à sua identidade visual! Nossa plataforma oferece uma comunicação visual atrativa e impactante para suas ofertas, garantindo que suas mensagens se destaquem melhorem a experiência dos consumidores.
                    </p>
                    <ul className="text-sm lg:text-xl list-disc w-full pl-16" data-aos="fade-left">
                        <li>Personalização;</li>
                        <li>Comunicação eficiente.</li>
                    </ul>
                    <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]" data-aos="fade-right">
                        A sua identidade em destaque
                    </h2>
                    <p className="text-sm lg:text-xl" data-aos="fade-left">
                        Destaque-se dos concorrentes com nossa plataforma de personalização exclusiva. Cada cartaz pode refletir o padrão visual único da sua rede, proporcionando clareza e eficiência na comunicação de suas ofertas. Aproveite nossa base para criar campanhas que atraiam o seu público-alvo com facilidade.
                    </p>
                    <ul className="text-sm lg:text-xl list-disc w-full pl-16" data-aos="fade-left">
                        <li>Diferenciação;</li>
                        <li>Impacto na mensagem;</li>
                        <li>Eficiência;</li>
                        <li>Fortalecimento de marca.</li>
                    </ul>
                    <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]" data-aos="fade-right">
                        Agilidade e facilidade
                    </h2>
                    <p className="text-sm lg:text-xl" data-aos="fade-left">
                        Otimize o gerenciamento de cartazes com nossa solução integrada e automatizada. Ao integrar o nosso software com o seu ERP, você elimina a necessidade de digitar as informações de maneira manual e individual! Ganhe agilidade, eficiência e segurança no processo de comunicação visual da sua empresa. 
                    </p>
                    <ul className="text-sm lg:text-xl list-disc w-full pl-16" data-aos="fade-left">
                        <li>Agilidade;</li>
                        <li>Eficiência;</li>
                        <li>Praticidade;</li>
                        <li>Segurança.</li>
                    </ul>
                    <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]" data-aos="fade-right">
                        A eficiência que você deseja
                    </h2>
                    <p className="text-sm lg:text-xl" data-aos="fade-left">
                        Economize tempo e aumente sua produtividade com nossa plataforma intuitiva! Em apenas alguns cliques, você cria o cartaz ideal para qualquer oferta, mantendo a consistência e a identidade visual da sua empresa. Além disso, você ganha acesso a uma biblioteca de templates modernos e personalizáveis, garantindo que cada peça publicitária seja atrativa e eficaz.
                    </p>
                    <ul className="text-sm lg:text-xl list-disc w-full pl-16" data-aos="fade-left">
                        <li>Autonomia;</li>
                        <li>Redução de custos;</li>
                        <li>Personalização.</li>
                    </ul>
                    <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]" data-aos="fade-right">
                        Redução de custo e tempo
                    </h2>
                    <p className="text-sm lg:text-xl" data-aos="fade-left">
                        Modernize seu processo de cartazeamento com nossa solução integrada. Ao automatizar a criação de cartazes, elimine o trabalho manual. Nossa plataforma oferece recursos avançados, permitindo ajustes rápidos e precisos conforme necessário, aumentando a eficiência e a flexibilidade da sua operação.
                    </p>
                </div>
            </div>
            <div className="w-full min-h-[15em] bg-black flex flex-col justify-evenly items-center">
                <h2 className="text-white text-xl lg:text-3xl font-bold">Dúvidas?</h2>
                <Link href="/fale-especialista">
                    <Button>
                        Fale com um Especialista
                    </Button>
                </Link>
            </div>
        </div>
    );
};
