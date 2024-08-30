'use client'

import Link from "next/link";
import FormInterface from "../utils/Form";
import Button from "../utils/Button";

export default function Gest() {
    return (
        <div className="relative w-full min-h-[65em] flex flex-col gap-12">
            <div className="w-full min-h-[20em] bg-[#1e65ff] text-white flex flex-col justify-center pl-12 shadow-xl">
                <h1 className="text-5xl font-bold">Gestão de Ofertas</h1>
            </div>
            <div className="w-full min-h-[10em] flex justify-start items-start">
                <div className="w-[50%] h-[100%] flex flex-col justify-between items-center">
                    <div className="w-[70%] flex flex-col items-start justify-around gap-12">
                        <h2 className="text-4xl font-bold text-[#1e90ff]">
                            Gerencie suas ofertas de maneira segura e eficaz!
                        </h2>
                        <p className="text-2xl">
                            Integramos todas as fases do processo de criação de ofertas em nossa plataforma, promovendo colaboração eficiente entre todos os setores envolvidos. Oferecemos flexibilidade para realizar ajustes em tempo real, garantindo um fluxo de trabalho otimizado e colaborativo. Além disso, nosso software proporciona análise de dados em tempo real, auxiliando na tomada de decisões estratégicas. 
                        </p>
                        <h2 className="text-4xl font-bold text-[#1e90ff]">
                            A solução que você procura
                        </h2>
                        <p className="text-2xl">
                            Administre as suas ofertas de maneira unificada, concentrando todas as informações essenciais em um único ambiente. Ganhe em produtividade e clareza ao unificar seus processos, facilitando a tomada de decisões estratégicas e a execução de campanhas com maior precisão e impacto.
                        </p>
                    </div>
                </div>
                <div className="w-[50%] absolute right-0 top-40">
                    <FormInterface />
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
