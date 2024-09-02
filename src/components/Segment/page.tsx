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
        <div className="w-full min-h-[100em] flex flex-col gap-12">
            <Banner>Segmentos</Banner>
            <div className="w-full flex justify-center items-center mb-10">
                <div className="w-[85%] flex flex-col justify-center items-center text-center p-16 gap-12" data-aos="fade-up">
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
            <div>
                <Header>
                    Nossos Segmentos
                </Header>
            </div>
            <div className="w-full min-h-[35em] flex flex-col justify-center items-center gap-14 mt-10">
                <div data-aos="fade-left"><SegSup /></div>
                <div data-aos="fade-right"><SegFarma /></div>
                <div data-aos="fade-left"><SegHome /></div>
                <div data-aos="fade-right"><SegAta /></div>
                <div data-aos="fade-left"><SegElec /></div>
                <div data-aos="fade-right"><SegOut /></div>
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
