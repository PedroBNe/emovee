'use client'

import Link from "next/link";
import Button from "../utils/Button";

export default function Seg() {
    return (
        <div className="w-full min-h-[100em] flex flex-col gap-12">
            <div className="w-full min-h-[20em] bg-[#1e65ff] text-white flex flex-col justify-center pl-12 shadow-xl">
                <h1 className="text-5xl font-bold">Segmentos</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-[85%] flex flex-col justify-center items-center text-center p-16 gap-12">
                    <h2 className="text-3xl font-bold text-[#1e90ff]">
                        Descubra os segmentos que podemos ajudar com as nossas soluções! 
                    </h2>
                    <p className="text-xl">
                        Descubra como nossa plataforma pode transformar a gestão de cartazes em diversos setores, proporcionando uma solução eficiente e precisa para substituir métodos manuais. 
                    </p>
                    <p className="text-xl">
                        Supermercados, atacarejos, home centers e farmácias são apenas alguns dos segmentos que podem revolucionar sua operação com nossa tecnologia. 
                    </p>
                    <p className="text-xl">
                        Ganhe em eficiência, reduza erros e aumente a agilidade na atualização de informações, garantindo uma comunicação visual eficaz e alinhada com suas estratégias de marketing e vendas.
                    </p>
                </div>
            </div>
            <div className="w-full min-h-[25em] flex flex-col justify-center items-center gap-14">
                <div className="w-full h-[25em] flex flex-row">
                    <div className="w-[50%] bg-red-500 flex justify-center items-center">
                        foto
                    </div>
                    <div className="w-[50%] bg-blue-600 flex justify-center items-center">
                        texto
                    </div>
                </div>
                <div className="w-full h-[25em] flex flex-row">
                    <div className="w-[50%] bg-blue-600 flex justify-center items-center">
                        texto
                    </div>
                    <div className="w-[50%] bg-red-500 flex justify-center items-center">
                        foto
                    </div>
                </div>
                <div className="w-full h-[25em] flex flex-row">
                    <div className="w-[50%] bg-red-500 flex justify-center items-center">
                        foto
                    </div>
                    <div className="w-[50%] bg-blue-600 flex justify-center items-center">
                        texto
                    </div>
                </div>
                <div className="w-full h-[25em] flex flex-row">
                    <div className="w-[50%] bg-blue-600 flex justify-center items-center">
                        texto
                    </div>
                    <div className="w-[50%] bg-red-500 flex justify-center items-center">
                        foto
                    </div>
                </div>
                <div className="w-full h-[25em] flex flex-row">
                    <div className="w-[50%] bg-red-500 flex justify-center items-center">
                        foto
                    </div>
                    <div className="w-[50%] bg-blue-600 flex justify-center items-center">
                        texto
                    </div>
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
