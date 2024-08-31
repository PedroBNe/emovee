'use client'

import Link from "next/link";
import FormInterface from "../utils/Form";
import Button from "../utils/Button";

export default function Tablo() {
    return (
        <div className="relative w-full min-h-[100em] flex flex-col gap-12">
            <div className="w-full min-h-[20em] bg-[#1e65ff] text-white flex flex-col justify-center pl-12 shadow-xl">
                <h1 className="text-5xl font-bold">Tablóides</h1>
            </div>
            <div className="w-full min-h-[10em] flex justify-start items-start">
                <div className="w-[50%] h-[100%] flex flex-col justify-between items-center">
                    <div className="w-[70%] flex flex-col items-start justify-around gap-12">
                        <h2 className="text-4xl font-bold text-[#1e90ff]">
                            A otimização para a precificação de ofertas! 
                        </h2>
                        <p className="text-xl">
                            Transforme a comunicação visual da sua empresa com nossa plataforma. Alcance a padronização e agilidade que você sempre desejou com mais de dois mil modelos de cartazes à sua disposição. Encontre rapidamente o design perfeito para atender às suas necessidades e eleve a qualidade da sua comunicação visual.
                        </p>
                        <h2 className="text-4xl font-bold text-[#1e90ff]">
                            Um software, uma solução 
                        </h2>
                        <p className="text-xl">
                            Ao utilizar nosso software, você poderá dizer adeus aos processos manuais e erros indesejados. Nossa solução é ideal para quem busca criar cartazes atrativos de maneira rápida e fácil. Simplifique seu trabalho e eleve a qualidade da sua comunicação visual com nossa plataforma.
                        </p>
                    </div>
                </div>
                <div className="w-[50%] absolute right-0 top-40">
                    <FormInterface />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-[90%] flex flex-col justify-center items-center p-16 gap-12">
                    <h2 className="text-4xl font-bold text-[#1e90ff]">
                        Benefícios 
                    </h2>
                    <p className="text-xl">
                        Nossa plataforma é a solução para quem busca padronizar a comunicação de suas lojas, criando cartazes alinhados com a identidade visual e a oferta desejada. Integrando-se ao seu ERP, nossa plataforma facilita a criação de campanhas de cartazes em grande escala, garantindo distribuição rápida e eficiente em diversos locais. Com gestão centralizada, você ganha agilidade e reduz significativamente os custos operacionais, eliminando erros e otimizando recursos. 
                    </p>
                    <h2 className="text-4xl font-bold text-[#1e90ff]">
                        Experiência do cliente 
                    </h2>
                    <p className="text-xl">
                        Crie cartazes que captem a atenção dos seus clientes, sem renunciar à sua identidade visual! Nossa plataforma oferece uma comunicação visual atrativa e impactante para suas ofertas, garantindo que suas mensagens se destaquem melhorem a experiência dos consumidores.
                    </p>
                </div>
            </div>
            <div className="w-full min-h-[15em] bg-black flex flex-col justify-evenly items-center">
                <h2 className="text-white text-3xl font-bold">Dúvidas?</h2>
                <Link href="">
                    <Button>
                        Fale com um Especialista
                    </Button>
                </Link>
            </div>
        </div>
    );
};
