'use client'

import { motion } from "framer-motion";
import Vision from '@/assets/vision.png';
import Values from '@/assets/values.png';
import Mission from '@/assets/mission.png';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "../utils/Button";
import Banner from "../utils/BannerTop";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Imagem from '@/assets/location.png'
import Imagem2 from '@/assets/insta-media.png'
import Imagem3 from '@/assets/social-insta.png'
import Imagem4 from '@/assets/values.png'
import { CarouselSize } from "./Carousel";

interface slide {
    imagem: StaticImageData,
}

const slides: slide[] = [
    {
        imagem: Imagem,
    },
    {
        imagem: Imagem2,
    },
    {
        imagem: Imagem3,
    },
    {
        imagem: Imagem4,
    },
    {
        imagem: Imagem,
    },
    {
        imagem: Imagem2,
    },
    {
        imagem: Imagem3,
    },
    {
        imagem: Imagem4,
    }
]

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <div className="w-full min-h-[100em] flex flex-col gap-12 justify-center items-center">
            <Banner>Soluções inteligentes para a sua loja</Banner>
            <div className="w-full min-h-[35em] flex gap-5 mb-[8em]">
                <div className="w-[50%] h-full m-3 flex flex-col gap-12" data-aos="fade-right">
                    <h2 className="text-center text-3xl font-bold">
                        Sobre a E-movee
                    </h2>
                    <div className="text-xl flex flex-col gap-8">
                        <p className="pl-7">Fruto da busca pela otimização e eficiência, a E-moviee se insere no mercado com uma plataforma intuitiva capaz de simplificar processos e aumentar a produtividade e reduzir custos operacionais. Em um ambiente de negócios cada vez mais competitivo e dinâmico, a necessidade de ferramentas que proporcionem rapidez e precisão nas operações é imprescindível.</p>
                        <p className="pl-7">Com uma interface de fácil aprendizado e funcionalidades avançadas, nossa plataforma permite que sua equipe tenha mais agilidade no dia a dia. Estamos preparados para nos adaptarmos a sua necessidade específica, oferecendo soluções personalizadas que atendem às particularidades do seu setor.
                        </p>
                        <p className="pl-7">Nosso objetivo vai além de fornecer um simples software; buscamos ser um parceiro estratégico para empresas que almejam excelência operacional e competitividade no mercado. Ao facilitar uma gestão de ofertas mais eficiente e inteligente, contribuímos significativamente para o crescimento sustentável e o sucesso contínuo do seu negócio.</p>
                    </div>
                </div>
                <div className="w-[50%] flex justify-center items-center" data-aos="fade-left">
                    <div className="w-[60%] h-[95%] flex flex-col gap-5 justify-center items-center">
                        <div className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl">
                            Fotos
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
                <hr className="w-[25%] border-2 border-[#1E293B] rounded-full"/>
                    <h2 className="font-bold text-2xl">
                        Temos
                    </h2>
                <hr className="w-[25%] border-2 border-[#1E293B] rounded-full"/>
            </div>
            <div>
                <div className="w-full min-h-[35em] flex flex-row gap-16 justify-center">
                    <div className="w-[20%] flex items-center justify-center" data-aos="fade-right">
                            <motion.div
                                className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="flex flex-col gap-2 justify-center items-center m-2">
                                    <Image src={Mission} alt="mission-icon" width={40} height={40} />
                                    <h1 className="font-bold text-xl">
                                        Missão
                                    </h1>
                                </div>
                                <p className="text-center m-5">
                                    Utilizar o avanço tecnológico para simplificar processos, aumentar a produtividade e reduzir custos operacionais, impulsionando o crescimento e a expansão dos nossos clientes.
                                </p>
                            </motion.div>
                    </div>
                    <div className="w-[20%] flex items-center justify-center" data-aos="fade-up">
                        <motion.div
                            className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >                     
                            <div className="flex flex-col gap-2 justify-center items-center m-2">
                                <Image src={Vision} alt="vision-icon" width={40} height={40} /> 
                                <h1 className="font-bold text-xl">
                                    Visão
                                </h1>
                            </div>
                            <p className="text-center m-5">
                                Ser reconhecidos como líderes no mercado de soluções digitais, oferecendo uma interface intuitiva e funcionalidades avançadas que promovem agilidade e precisão na gestão de operações.
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-[20%] flex items-center justify-center" data-aos="fade-left">
                        <motion.div
                            className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >                           
                            <div className="flex flex-col gap-2 justify-center items-center m-2">
                                <Image src={Values} alt="value-icon" width={40} height={40} />
                                <h1 className="font-bold text-xl">
                                    Valores
                                </h1>
                            </div>
                            <p className="text-center m-5">
                                Temos o compromisso de entregar soluções de alta qualidade, enquanto buscamos continuamente a inovação e desempenhamos o papel de parceiro estratégico dos nossos clientes.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
                <hr className="w-[25%] border-2 border-[#1E293B] rounded-full"/>
                    <h2 className="font-bold text-2xl">
                        Empresas parceiras
                    </h2>
                <hr className="w-[25%] border-2 border-[#1E293B] rounded-full"/>
            </div>
            <div className="w-[80%] min-h-[7em] flex flex-row justify-center items-center">
                <div className="w-[70%] flex flex-col justify-center items-center">
                    <CarouselSize slides={slides} />
                </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
                <hr className="w-[25%] border-2 border-[#1E293B] rounded-full"/>
                    <h2 className="font-bold text-2xl">
                        Como podemos ajudar o Seu Negócio
                    </h2>
                <hr className="w-[25%] border-2 border-[#1E293B] rounded-full"/>
            </div>
            <div className="w-full min-h-[15em] bg-black flex flex-col justify-evenly items-center">
                <h2 className="text-white text-3xl font-bold">Descubra com um clique!</h2>
                <Link href="">
                    <Button>
                        Fale com um Especialista
                    </Button>
                </Link>
            </div>
        </div>
    );
};
