'use client'

import Link from "next/link";
import FormInterface from "../utils/Form";
import Button from "../utils/Button";
import Banner from "../utils/BannerTop";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Gest() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <div className="xl:relative w-full min-h-[50em] flex flex-col gap-12">
            <Banner>Gestão de Ofertas</Banner>
            <div className="w-full min-h-[10em] flex flex-col justify-center xl:justify-start items-center xl:items-start">
                <div className="w-full xl:w-[50%] h-[100%] flex flex-col justify-between items-center" data-aos="fade-right">
                    <div className="w-[90%] flex flex-col items-start justify-around gap-12">
                        <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]">
                            Gerencie suas ofertas de maneira segura e eficaz!
                        </h2>
                        <p className="text-sm lg:text-xl">
                            Integramos todas as fases do processo de criação de ofertas em nossa plataforma, promovendo colaboração eficiente entre todos os setores envolvidos. Oferecemos flexibilidade para realizar ajustes em tempo real, garantindo um fluxo de trabalho otimizado e colaborativo. Além disso, nosso software proporciona análise de dados em tempo real, auxiliando na tomada de decisões estratégicas. 
                        </p>
                        <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]">
                            A solução que você procura
                        </h2>
                        <p className="text-sm lg:text-xl">
                            Administre as suas ofertas de maneira unificada, concentrando todas as informações essenciais em um único ambiente. Ganhe em produtividade e clareza ao unificar seus processos, facilitando a tomada de decisões estratégicas e a execução de campanhas com maior precisão e impacto.
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-16 xl:mt-0 xl:w-[50%] xl:absolute xl:right-0 xl:top-40">
                    <FormInterface />
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
