'use client';

import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from 'next/link';
import { hasCookie, setCookie } from 'cookies-next';

interface Colors {
  name: string;
  default: string;
  text?: string;
}

export default function CookiePage() {
  const key = 'key';
  const value = 'value';
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // 7 days

  const [colors, setColors] = useState<Colors[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const backCookie = isHovered ? colors?.[1]?.default : colors?.[0]?.default;
  const textCookie = isHovered ? colors?.[1]?.text : colors?.[0]?.text;

  const backCookie2 = isHovered2 ? colors?.[1]?.default : colors?.[0]?.default;
  const textCookie2 = isHovered2 ? colors?.[1]?.text : colors?.[0]?.text;

  const hasCookies = hasCookie(key);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    if (hasCookies) {
      setSiteCookie(false);
    }

    fetchColors();
  }, [hasCookies]);

  const fetchColors = async () => {
    try {
      const response = await fetch('/api/color');
      if (response.ok) {
        const data = await response.json();
        setColors(data);
      } else {
        console.error('Erro ao buscar as cores');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  const [siteCookie, setSiteCookie] = React.useState(true);

  return (
    <span
      className={`${siteCookie ? 'fixed' : 'hidden'} w-full bottom-0 z-20 lg:z-0 pt-0 lg:pt-[16em]`}
      data-aos="fade-up"
    >
      {siteCookie && (
        <div
          className="w-full h-[15em] lg:h-[5em] flex justify-center items-center"
          style={{ backgroundColor: colors?.[0]?.default, color: colors?.[0]?.text }}
        >
          <div className="w-full lg:w-[80%] h-full flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="w-[95%] lg:w-[50%] h-full flex flex-col justify-center items-center gap-2">
              <h2 className="text-xl font-semibold">Aviso de cookies</h2>
              <p className="text-sm lg:text-md text-center">
                Este site utiliza cookies para personalizar sua Experiência de Usuário.
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-full flex flex-col lg:flex-row justify-center items-center gap-4 mb-4 lg:mb-0 font-bold">
              <button
                onClick={() => {
                  setSiteCookie(false),
                    setCookie(key, value, {
                      path: '/',
                      expires: expirationDate,
                    });
                }}
                className="w-[33vh] border-2 py-2 rounded-lg text-sm lg:text-md transition ease-in-out delay-100"
                style={{ backgroundColor: backCookie, color: textCookie, borderColor: colors?.[1]?.default }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Aceitar
              </button>
              <button
                className="w-[33vh] border-2 py-2 rounded-lg text-sm lg:text-md transition ease-in-out delay-100"
                style={{ backgroundColor: backCookie2, color: textCookie2, borderColor: colors?.[1]?.default }}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <Link href="/cookies">Definição de Cookie</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
