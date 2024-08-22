'use client'

import Image from "next/image";
import Logo from "@/assets/logo-blue.jpg";
import { useState } from "react";

export default function Header() {

    const [ IsHiddenSolution, setIsHiddenSolution ] = useState(false);
    const [ IsHiddenSeg, setIsHiddenSeg ] = useState(false);

    return(
        <header className="h-16 flex flex-row justify-around bg-[#f7f7f7] items-center">
            <div>
                <Image src={Logo} alt="logo-emove" height={56}/>
            </div>
            <nav>
                <ul className="flex flex-row gap-10">
                    <li className="relative cursor-pointer"
                        onMouseEnter={() => setIsHiddenSolution(true)}
                        onMouseLeave={() => setIsHiddenSolution(false)}
                    >
                        <p>
                            Soluções
                        </p>
                        <ul className={`${IsHiddenSolution ? 'flex' : 'hidden'} z-10 transition delay-300 gap-4 rounded-lg absolute top-6 justify-center items-center translate-x-[-50%] left-[50%] flex-col bg-white p-5 overflow-ellipsis whitespace-nowrap`}>
                            <li>Cartazeamento</li>
                            <li>Gestão de Ofertas</li>
                            <li>Tabloide</li>
                        </ul>
                    </li>
                    <li className="relative cursor-pointer"
                        onMouseEnter={() => setIsHiddenSeg(true)}
                        onMouseLeave={() => setIsHiddenSeg(false)}
                    >
                        <p>
                            Soluções
                        </p>
                        <ul className={`${IsHiddenSeg ? 'flex' : 'hidden'} z-10 transition delay-300 gap-4 rounded-lg absolute top-6 justify-center items-center translate-x-[-50%] left-[50%] flex-col bg-white p-5 overflow-ellipsis whitespace-nowrap`}>
                            <li>Supermercados</li>
                            <li>Farmácias</li>
                            <li>Home Centers</li>
                            <li>Atacarejos</li>
                            <li>Eletromóveis</li>
                            <li>Outros segmentos</li>
                        </ul>
                    </li>
                    <li>Sobre</li>
                    <li>Conteúdos</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <div className="flex gap-5">
                <button className="transition w-fit font-semibold rounded-full p-2 px-4 bg-slate-300 items-center hover:bg-[#1e65ff] hover:text-slate-100 delay-400">
                    Entrar
                </button>
                <button className="transition w-fit text-slate-100 font-bold rounded-full p-2 px-3  bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                    Fale com um especialista
                </button>
            </div>
        </header>
    )
}