'use client'

import Image from "next/image";
import Logo from "@/assets/logo-blue.jpg";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/utils/Button";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    const [ IsHiddenSolution, setIsHiddenSolution ] = useState(false);
    const [ IsHiddenSeg, setIsHiddenSeg ] = useState(false);

    return(
        <header className="h-16 flex flex-row justify-around bg-[#f7f7f7] items-center">
            <div>
                <Link href="/inicio" ><Image src={Logo} alt="logo-emove" height={56}/></Link>
            </div>
            <nav>
                <ul className="flex flex-row gap-10">
                    <li className="relative cursor-pointer justify-center items-center flex"
                        onMouseEnter={() => setIsHiddenSolution(true)}
                        onMouseLeave={() => setIsHiddenSolution(false)}
                    >
                        <Link href="/cartazeamento">
                            Serviços
                        </Link>
                        {IsHiddenSolution && (
                            <ul 
                                className="flex z-10 delay-300 gap-4 rounded-lg absolute top-6 justify-center items-center flex-col bg-white p-5 overflow-ellipsis whitespace-nowrap" 
                                data-aos="fade-down"
                                data-aos-duration="300"    
                                data-aos-offset="300"
                            >
                                <li>
                                    <Link href="/cartazeamento">Cartazeamento</Link>
                                </li>
                                <li>
                                    <Link href="/gestao-ofertas">Gestão de Ofertas</Link>
                                </li>
                                <li>
                                    <Link href="/tabloide">Tablóides</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="relative cursor-pointer justify-center items-center flex"
                        onMouseEnter={() => setIsHiddenSeg(true)}
                        onMouseLeave={() => setIsHiddenSeg(false)}
                    >
                        <p>
                            <Link href="/segmentos">
                                Segmentos
                            </Link>
                        </p>
                        {IsHiddenSeg && (
                            <ul 
                                className="flex z-10 delay-300 gap-4 rounded-lg absolute top-6 justify-center items-center flex-col bg-white p-5 overflow-ellipsis whitespace-nowrap" data-aos="fade-down"
                                data-aos-duration="300"    
                                data-aos-offset="300"
                            >
                                <li>
                                    <Link href="/segmentos">Supermercados</Link>
                                </li>
                                <li>Farmácias</li>
                                <li>Home Centers</li>
                                <li>Atacarejos</li>
                                <li>Eletromóveis</li>
                                <li>Outros segmentos</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/conteudo">Conteúdos</Link>
                    </li>
                    <li>
                        <Link href="/fale-especialista">Contato</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-5">
                <button className="transition w-fit font-semibold rounded-full p-2 px-4 bg-slate-300 items-center hover:bg-[#1e65ff] hover:text-slate-100 delay-400">
                    Entrar
                </button>
                <Link href="/fale-especialista">
                    <Button>
                        Fale com um Especialista
                    </Button>
                </Link>
            </div>
        </header>
    )
}