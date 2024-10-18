'use client';

import Image from 'next/image';
import Logo from '@/assets/logo-blue.jpg';
import Link from 'next/link';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import MenuIcon from '@/assets/menu-icon';
import CloseMenu from '@/assets/close-menu-icon';
import useWindowSize from '@/components/utils/Window';
import { usePathname } from 'next/navigation';

export default function Header() {
  const window = useWindowSize();
  const [menu, setMenu] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(!pathname.startsWith('/dashboard'));
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <header className="w-full h-[12vh] 2xl:h-[10vh] flex justify-between items-center bg-[#f7f7f7] px-5 relative">
      <div className="w-fit h-full flex items-center">
        <Link href="/Home">
          <Image src={Logo} alt="logo-emove" width={110} height={110} />
        </Link>
      </div>
      {window.width > 1150 && (
        <>
          <nav className="hidden lg:flex items-center absolute left-[15%] xl:left-[37%]">
            <ul className="flex gap-10">
              <li><Link href="/Home">Inicio</Link></li>
              <li className="relative">
                <Link href="/cartazeamento">Serviços</Link>
                {menu && (
                  <ul className="absolute top-6 bg-white p-5 rounded-lg shadow-lg">
                    <li><Link href="/cartazeamento">Cartazeamento</Link></li>
                    <li><Link href="/gestao-ofertas">Gestão de Ofertas</Link></li>
                    <li><Link href="/tabloides">Tablóides</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/segmentos">Segmentos</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/Blog">Conteúdos</Link></li>
            </ul>
          </nav>
          <div className="hidden lg:flex gap-5 absolute right-2">
            <button className="py-3 px-5 bg-slate-300 rounded-full hover:bg-[#1e65ff] hover:text-white">
              Entrar
            </button>
            <Link href="/fale-especialista">
              <button className="py-3 px-6 bg-[#1e90ff] text-white font-bold rounded-full hover:bg-[#1e65ff]">
                Fale com um Especialista
              </button>
            </Link>
          </div>
        </>
      )}
      {window.width <= 1150 && !menu && (
        <button onClick={() => setMenu(true)}>
          <MenuIcon w={25} h={25} />
        </button>
      )}
      {menu && (
        <div className="fixed inset-0 bg-white z-20">
          <nav className="h-full flex flex-col items-center justify-center gap-7">
            <ul className="flex flex-col items-center gap-7">
              <li><Link href="/Home" onClick={() => setMenu(false)}>Inicio</Link></li>
              <li><Link href="/cartazeamento" onClick={() => setMenu(false)}>Cartazeamento</Link></li>
              <li><Link href="/gestao-ofertas" onClick={() => setMenu(false)}>Gestão de Ofertas</Link></li>
              <li><Link href="/tabloides" onClick={() => setMenu(false)}>Tablóides</Link></li>
              <li><Link href="/segmentos" onClick={() => setMenu(false)}>Segmentos</Link></li>
              <li><Link href="/sobre" onClick={() => setMenu(false)}>Sobre</Link></li>
              <li><Link href="/Blog" onClick={() => setMenu(false)}>Conteúdos</Link></li>
            </ul>
            <button
              className="absolute top-5 right-5"
              onClick={() => setMenu(false)}
            >
              <CloseMenu w={25} h={25} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
