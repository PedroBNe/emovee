'use client';

import Banner from '../../components/utils/BannerTop';

export default function Privacy() {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Banner>Politicas de Privacidade</Banner>
      <div className="w-[95%] lg:w-[70%] h-auto flex flex-col items-center gap-12 pb-12">
        <div className="flex flex-col gap-8 text-sm lg:text-xl">
          <p>
            <strong>Introdução:</strong> Nós, da E-movee, levamos sua privacidade a sério e estamos comprometidos em
            proteger seus dados pessoais. Esta Política de Privacidade tem como objetivo esclarecer como coletamos,
            utilizamos e protegemos as informações que você nos fornece enquanto utiliza nossos serviços e navega em
            nosso site.
          </p>
          <p>
            <strong>Coleta de Dados:</strong> Coletamos dados pessoais como nome, endereço de e-mail, número de telefone
            e outras informações que podem ser solicitadas no momento do cadastro ou durante a interação com nossos
            serviços. Além disso, coletamos automaticamente dados de navegação por meio de cookies e tecnologias
            similares.
          </p>
          <p>
            <strong>Uso dos Dados:</strong> Os dados coletados são utilizados para fornecer nossos serviços de maneira
            eficiente, personalizar sua experiência no site, processar transações e enviar comunicações relevantes, como
            promoções e atualizações sobre nossos produtos.
          </p>
          <p>
            <strong>Compartilhamento de Dados:</strong> Não compartilhamos suas informações pessoais com terceiros sem o
            seu consentimento, exceto em casos exigidos por lei ou para proteger nossos direitos legais.
          </p>
          <p>
            <strong>Segurança:</strong> Implementamos medidas de segurança rigorosas para proteger suas informações
            contra acessos não autorizados, uso indevido, alteração ou destruição.
          </p>
          <p>
            Alterações nesta Política: Podemos atualizar esta Política de Privacidade periodicamente, e qualquer
            alteração será comunicada em nosso site.
          </p>
        </div>
      </div>
    </div>
  );
}
