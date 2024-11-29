'use client';

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from 'next/link';
import { hasCookie, setCookie } from 'cookies-next';

export default function CookiePage() {
  const key = 'key';
  const value = 'value';
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // 7 days

  const hasCookies = hasCookie(key);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    if (hasCookies) {
      setSiteCookie(false);
    }
  }, [hasCookies]);

  const [siteCookie, setSiteCookie] = React.useState(true);

  return (
    <span
      className={`${siteCookie ? 'fixed' : 'hidden'} w-full bottom-0 z-20 lg:z-0 pt-0 lg:pt-[16em]`}
      data-aos="fade-up"
    >
      {siteCookie && (
        <div className="w-full h-[15em] lg:h-[5em] fundo flex justify-center items-center">
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
                className="w-[33vh] border-2 py-2 rounded-lg botoes-background text-sm lg:text-md transition ease-in-out delay-100"
              >
                Aceitar
              </button>
              <button className="w-[33vh] border-2 py-2 rounded-lg botoes-background text-sm lg:text-md transition ease-in-out delay-100">
                <Link href="/cookies">Definição de Cookie</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
