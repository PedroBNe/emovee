'use client'

import Link from "next/link";
import Button from "../utils/Button";
import Banner from "../utils/BannerTop";
import SegSup from "./Seg-Sup";
import SegFarma from "./Seg-Farma";
import SegHome from "./Seg-Home";
import SegAta from "./Seg-Ata";
import SegElec from "./Seg-Elec";
import Header from "../utils/Header";
import SegOut from "./Seg-Out";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Seg() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <div className="w-full min-h-[270em] flex flex-col justify-between gap-12">
            <Banner>Segmentos</Banner>
            <div className="w-full flex flex-col justify-between items-center px-3 mb-10">
                <div className="w-full md:w-[85%] flex flex-col items-start justify-around text-center py-8 md:px-8 gap-12" data-aos="fade-up">
                    <h2 className="text-lg lg:text-4xl font-bold text-[#1e90ff]">
                        Descubra os segmentos que podemos ajudar com as nossas soluções! 
                    </h2>
                    <p className="text-sm lg:text-xl">
                        Descubra como nossa plataforma pode transformar a gestão de cartazes em diversos setores, proporcionando uma solução eficiente e precisa para substituir métodos manuais. 
                    </p>
                    <p className="text-sm lg:text-xl">
                        Supermercados, atacarejos, home centers e farmácias são apenas alguns dos segmentos que podem revolucionar sua operação com nossa tecnologia. 
                    </p>
                    <p className="text-sm lg:text-xl">
                        Ganhe em eficiência, reduza erros e aumente a agilidade na atualização de informações, garantindo uma comunicação visual eficaz e alinhada com suas estratégias de marketing e vendas.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <Header>
                    Nossos Segmentos
                </Header>
            </div>
            <div className="w-full h-full flex flex-col gap-8">
                <SegSup />
                <SegFarma />
                <SegHome />
                <SegAta />
                <SegElec />
                <SegOut />
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
