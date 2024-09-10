'use client'

import Link from "next/link";
import Banner from "../utils/BannerTop";

export default function PrivacyCall() {
    return(
        <div className="w-full h-auto flex flex-col items-center">
            <Banner>Solicitação de Privacidade</Banner>
            <div className="w-[95%] lg:w-[70%] h-auto flex flex-col items-center gap-12 pb-12">
                <div className="flex flex-col gap-8 text-sm lg:text-xl">
                    <p>
                        <strong>Introdução:</strong> Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir ou excluir os dados pessoais que possuímos sobre você. Também é possível solicitar informações sobre como seus dados estão sendo utilizados.
                    </p>
                    <p>
                        <strong>Direitos do Usuário:</strong> Você tem os seguintes direitos em relação aos seus dados pessoais:
                    </p>
                    <ul className="list-disc ml-9">
                        <li>Solicitar o acesso às suas informações pessoais.</li>
                        <li>Corrigir dados incorretos ou incompletos.</li>
                        <li>Solicitar a exclusão dos seus dados.</li>
                        <li>Retirar o consentimento para o uso de seus dados.</li>
                    </ul>
                    <p>
                        <strong>Como realizar uma solicitação?</strong> Para exercer seus direitos de privacidade, entre em contato conosco por meio do e-mail [e-mail de contato] ou preencha o formulário de <Link href="/fale-especialista" className="underline text-blue-500 hover:text-opacity-60">solicitação de privacidade</Link>. Responderemos à sua solicitação dentro do prazo legal.
                    </p>      
                </div>        
            </div> 
        </div>
    )
}