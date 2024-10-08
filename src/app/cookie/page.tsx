'use client';

import Banner from '../../components/utils/BannerTop';
import React from 'react';

export default function CookiesWarn() {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Banner>Aviso de Cookies</Banner>
      <div className="w-[95%] lg:w-[70%] h-auto flex flex-col items-center gap-12 pb-12">
        <div className="flex flex-col gap-8 text-sm lg:text-xl">
          <p>
            <strong>O que são cookies?</strong> Cookies são pequenos arquivos de texto enviados para o seu navegador
            quando você acessa nosso site. Eles nos ajudam a entender como você interage com nosso conteúdo e nos
            permitem melhorar sua experiência de navegação.
          </p>
          <p>
            <strong>Por que usamos cookies?</strong> Usamos cookies para diversas finalidades, como:
          </p>
          <ul className="list-disc ml-9">
            <li>Garantir o funcionamento adequado do site.</li>
            <li>Lembrar suas preferências e configurações de navegação.</li>
            <li>Coletar dados analíticos para melhorar nossos serviços.</li>
            <li>Oferecer publicidade personalizada com base nos seus interesses.</li>
          </ul>
          <p>
            <strong>Tipos de Cookies Utilizados:</strong>
          </p>
          <ul className="list-disc ml-9">
            <li>Cookies essenciais: Necessários para o funcionamento básico do site.</li>
            <li>Cookies de desempenho: Coletam dados sobre como os visitantes usam o site.</li>
            <li>Cookies de funcionalidade: Lembram as escolhas feitas pelo usuário, como idioma ou região.</li>
            <li>Cookies de marketing: Utilizados para exibir anúncios relevantes para o usuário.</li>
          </ul>
          <p>
            <strong>Como gerenciar cookies?</strong> Você pode gerenciar e desativar cookies através das configurações
            do seu navegador. No entanto, a desativação de certos cookies pode afetar a funcionalidade do site.
          </p>
        </div>
      </div>
    </div>
  );
}
