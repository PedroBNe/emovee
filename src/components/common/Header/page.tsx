'use client';

import Image from 'next/image';
import Logo from '@/assets/logo-blue.jpg';
import { useState } from 'react';
import Link from 'next/link';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import MenuIcon from '@/assets/menu-icon';
import CloseMenu from '@/assets/close-menu-icon';
import React from 'react';
import useWindowSize from '@/components/utils/Window';

export default function Header() {
  const window = useWindowSize();

  const [IsHiddenSolution, setIsHiddenSolution] = useState(false);
  const [IsHiddenSeg, setIsHiddenSeg] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <header className="w-full h-[12vh] 2xl:h-[10vh] flex justify-between items-center bg-[#f7f7f7] px-5 relative">
      <div className="w-fit h-full flex items-center justify-center">
        <Link href="/Home">
          <Image src={Logo} alt="logo-emove" width={110} height={110} />
        </Link>
      </div>
      {window.width > 1150 && (
        <>
          <nav className="hidden lg:flex justify-center items-center font-semibold absolute left-[15%] xl:left-[37%]">
            <ul className="flex flex-row gap-10">
              <li>
                <Link href="/Home">Inicio</Link>
              </li>
              <li
                className="relative cursor-pointer justify-center items-center flex"
                onMouseEnter={() => setIsHiddenSolution(true)}
                onMouseLeave={() => setIsHiddenSolution(false)}
              >
                <Link href="/cartazeamento">Serviços</Link>
                {IsHiddenSolution && (
                  <ul
                    className="flex delay-300 gap-4 rounded-lg absolute z-10 top-6 justify-center items-center flex-col bg-white p-5 overflow-ellipsis whitespace-nowrap"
                    data-aos="fade-down"
                    data-aos-duration="200"
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
              <li
                className="relative cursor-pointer justify-center items-center flex"
                onMouseEnter={() => setIsHiddenSeg(true)}
                onMouseLeave={() => setIsHiddenSeg(false)}
              >
                <p>
                  <Link href="/segmentos">Segmentos</Link>
                </p>
                {IsHiddenSeg && (
                  <ul
                    className="flex z-10 delay-300 gap-4 rounded-lg absolute top-6 justify-center items-center flex-col bg-white p-5 overflow-ellipsis whitespace-nowrap"
                    data-aos="fade-down"
                    data-aos-duration="200"
                    data-aos-offset="300"
                  >
                    <li>
                      <Link href="/segmentos#sup">Supermercados</Link>
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
                <Link href="/Blog">Conteúdos</Link>
              </li>
            </ul>
          </nav>
          <div className="hidden gap-5 lg:flex justify-center items-center absolute right-2">
            <button className="transition w-fit font-semibold rounded-full py-3 px-5 bg-slate-300 items-center hover:bg-[#1e65ff] hover:text-slate-100 delay-400">
              Entrar
            </button>
            <Link href="/fale-especialista">
              <button className="transition w-fit text-slate-100 font-bold rounded-full py-3 2xl:py-4 px-4 2xl:px-6 bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                Fale com um Especialista
              </button>
            </Link>
          </div>
        </>
      )}
      {window.width <= 1150 && menu === false && (
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <MenuIcon w={25} h={25} />
        </button>
      )}
      {menu && (
        <div className="w-full h-[100vh] fixed left-0 bottom-0 bg-white z-20">
          <nav className="relative w-full h-full flex justify-center items-center">
            <ul className="w-fit flex flex-col gap-7 justify-center items-center font-bold">
              <li>
                <Link
                  href="/Home"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li
                className="text-[#1e90ff]"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <Link href="/cartazeamento">Cartazeamento</Link>
              </li>
              <li
                className="text-[#1e90ff]"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <Link href="/gestao-ofertas">Gestão de Ofertas</Link>
              </li>
              <li
                className="text-[#1e90ff]"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <Link href="/tabloides">Tablóides</Link>
              </li>
              <li>
                <Link
                  href="/segmentos"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Segmentos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/Blog"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  Conteúdos
                </Link>
              </li>
              <ul className="flex flex-col justify-center items-center gap-3">
                <li>
                  <button className="transition w-fit font-semibold rounded-full py-3 px-4 bg-slate-300 items-center hover:bg-[#1e65ff] hover:text-slate-100 delay-400">
                    Entrar
                  </button>
                </li>
                <li>
                  <Link
                    href="/fale-especialista"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  >
                    <button className="transition w-fit text-slate-100 font-bold rounded-full py-3 px-4 bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                      Fale com um Especialista
                    </button>
                  </Link>
                </li>
              </ul>
            </ul>
            <button
              className="absolute right-9 top-[85px]"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <CloseMenu Width={25} Height={25} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
