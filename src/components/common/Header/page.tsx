'use client'

import Image from "next/image";
import Logo from "@/assets/logo-blue.jpg";
import { useState } from "react";
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import MenuIcon from "@/assets/menu-icon";

export default function Header() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });

        let timer: NodeJS.Timeout;
  
        const handleResize = () => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            setWindowSize({
              width: window.innerWidth,
            });
          }, 100); // Espera 200ms antes de atualizar
        };
    
        handleResize(); // Pega o tamanho da tela na montagem
    
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [ IsHiddenSolution, setIsHiddenSolution ] = useState(false);
    const [ IsHiddenSeg, setIsHiddenSeg ] = useState(false);

    const teste = () => {
        console.log("testanto")
    }

    return(
        <header className="w-full h-[12vh] 2xl:h-[8vh] flex justify-between items-center bg-[#f7f7f7] px-5">
            <div className="w-[16%]">
                <Link href="/inicio"><Image src={Logo} alt="logo-emove" width={60} height={60}/></Link>
            </div>
            { windowSize.width > 1024 && (
                <>
                    <nav className="w-[65%] hidden xl:flex justify-center items-center">
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
                                            <Link href="/tabloides">Tablóides</Link>
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
                                            <Link href="/segmentos#super">Supermercados</Link>
                                        </li>
                                        <li>
                                            <Link href="/segmentos#farma">Farmácias</Link>
                                        </li>
                                        <li>
                                            <Link href="/segmentos#home">Home Centers</Link>
                                        </li>
                                        <li>
                                            <Link href="/segmentos#ata">Atacarejos</Link>
                                        </li>
                                        <li>
                                            <Link href="/segmentos#elec">Eletromóveis</Link>
                                        </li>
                                        <li>
                                            <Link href="/segmentos#out">Outros segmentos</Link>
                                        </li>
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
                    <div className="w-[19%] hidden gap-5 xl:flex">
                        <button className="transition w-fit font-semibold rounded-full py-2 px-4 bg-slate-300 items-center hover:bg-[#1e65ff] hover:text-slate-100 delay-400">
                            Entrar
                        </button>
                        <Link href="/fale-especialista">
                            <button className="transition w-fit text-slate-100 font-bold rounded-full py-1 2xl:py-4 px-4 2xl:px-6 bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                                Fale com um Especialista
                            </button>
                        </Link>
                    </div>
                </>
            )}
            { windowSize.width <= 1024 && (
                <button onClick={teste}>
                    <MenuIcon w={25} h={25} />
                </button>
            )}
        </header>
    )
}
