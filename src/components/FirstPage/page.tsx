'use client'

import { Carousel } from "./Carousel";
import Imagem from "@/assets/logo-white.png";
import Verify from '@/assets/verify-icon.png';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SlideIn from "./SlideInPage";
import { motion } from "framer-motion";

interface slide {
    imagem: StaticImageData,
    text: string,
}

const slides: slide[] = [
    {
        imagem: Imagem,
        text: "A agilidade que você sempre sonhou! "
    },
    {
        imagem: Imagem,
        text: "Defina ofertas estratégicas para o seu negócio. "
    },
    {
        imagem: Imagem,
        text: "O caminho de sucesso para a sua empresa! "
    },
    {
        imagem: Imagem,
        text: "Desfrute da rapidez que impulsiona resultados. "
    }
]

export default function FirstPage() {
    return(
        <div>
            <div className="w-full min-h-[54em] bg-black text-white mb-10">
                <Carousel slides={slides} />
            </div>
            <div className="w-full">
                    <SlideIn Content={
                        <div className="w-full flex justify-center items-center gap-2">
                            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
                                <h2 className="font-bold text-2xl">
                                    E-moviee
                                </h2>
                            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
                        </div>
                    } />
            </div>     
            <div className="w-full min-h-[105em] flex flex-col items-center">
                <SlideIn Content={
                    <div className="w-full h-[35em] flex flex-row gap-16 justify-center">
                        <div className="w-[50%] flex justify-center items-center">
                        <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                                <motion.div
                                    className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <p>
                                        Video
                                    </p>
                                </motion.div>
                            </div>
                        </div>               
                        <div className="w-[50%] flex justify-center items-center font-bold">
                            <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                                <motion.div
                                    className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <h1 className="font-bold text-xl">
                                        Conheça a E-moviee
                                    </h1>
                                    <p className="text-center m-5">
                                        Fruto da busca pela otimização e eficiência, a E-moviee se insere no mercado com uma plataforma intuitiva capaz de simplificar processos e aumentar a produtividade e reduzir custos operacionais. Em um ambiente de negócios cada vez mais competitivo e dinâmico, a necessidade de ferramentas que proporcionem rapidez e precisão nas operações é imprescindível.
                                    </p>
                                    <button className="transition w-fit text-slate-100 font-bold rounded-full p-4 px-5 text-xl bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                                        Sobre a E-movee
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                } />
                <div className="w-full">
                    <SlideIn Content={
                        <div className="w-full flex justify-center items-center gap-2">
                            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
                                <h2 className="font-bold text-2xl">
                                Serviços
                                </h2>
                            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
                        </div>
                    } />
                </div>         
                <SlideIn Content={
                    <div className="w-full min-h-[35em] flex flex-row gap-16 justify-center">
                        <div className="w-[20%] flex items-center justify-">
                            <motion.div
                                className="w-[100%] h-[60%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <h1 className="font-bold text-xl">
                                    Cartazeamento
                                </h1>
                                <p className="text-center m-5">
                                    Em poucos cliques, crie e imprima cartazes promocionais atrativos, que despertem desejo nos consumidores. 
                                </p>
                                <button className="transition w-fit text-slate-100 font-bold rounded-full p-4 px-5 text-xl bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                                    Saiba mais
                                </button>                            
                            </motion.div>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <motion.div
                                className="w-[100%] h-[60%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <p className="font-bold text-xl">
                                    Gestão de ofertas
                                </p>
                                <p className="text-center m-5">
                                    De maneira ágil e simplificada, gerencie e organize seu calendário promocional.
                                </p>
                                <button className="transition w-fit text-slate-100 font-bold rounded-full p-4 px-5 text-xl bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                                    Saiba ma
                                </button>                            
                            </motion.div>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <motion.div
                                className="w-[100%] h-[60%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <p className="font-bold text-xl">
                                    TABLOIDE
                                </p>
                                <p className="text-center m-5">
                                    Frase
                                </p>
                                <button className="transition w-fit text-slate-100 font-bold rounded-full p-4 px-5 text-xl bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                                    Saiba mais
                                </button>                            
                            </motion.div>
                        </div>
                    </div>            
                } />
                <div className="w-full">
                    <SlideIn Content={
                        <div className="w-full flex justify-center items-center gap-2">
                            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
                                <h2 className="font-bold text-2xl">
                                    Benefícios
                                </h2>
                            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
                        </div>
                    } />
                </div>                    
                <SlideIn Content={
                    <div className="w-full min-h-[35em] flex flex-row gap-16 justify-center">
                        <div className="w-[20%] flex items-center justify-center">
                            <motion.div
                                className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="flex gap-2">
                                    <Image src={Verify} alt="verify-icon" width={28} />
                                    <h1 className="font-bold text-xl">
                                        Agilidade e padronização
                                    </h1>
                                </div>
                                <p className="text-center m-5">
                                    Uma solução que, além de automatizar o processo e aumentar e eficiência, garante que a comunicação seja igual em todas as unidades do seu negócio. 
                                </p>
                            </motion.div>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <motion.div
                                className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="flex gap-2">
                                    <Image src={Verify} alt="verify-icon" width={28} />
                                    <h1 className="font-bold text-xl">
                                        Experiência do cliente
                                    </h1>
                                </div>
                                <p className="text-center m-5">
                                    Uma decisão rápida do cliente é crucial. Acelere o processo de tomada de decisão do seu cliente, melhorando sua experiência e aumentando a satisfação com seu serviço.
                                </p>
                            </motion.div>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <motion.div
                                className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="flex gap-2">
                                    <Image src={Verify} alt="verify-icon" width={28} />
                                    <h1 className="font-bold text-xl">
                                        Ofertas estratégias
                                    </h1>
                                </div> 
                                <p className="text-center m-5">
                                    Simplifique a programação das promoções e torne suas ofertas mais atraentes. Comunique suas ofertas de maneira eficaz e impactante, capturando a atenção do cliente de maneira eficiente.
                                </p>
                            </motion.div>
                        </div>
                    </div>            
                } />
            </div>
        </div>
    );
}