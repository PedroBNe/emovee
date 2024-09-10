'use client'

import Banner from "../utils/BannerTop";

export default function UseTerms(){
    return(
        <div className="w-full h-auto flex flex-col items-center">
            <Banner>Termos de Uso</Banner>
            <div className="w-[95%] lg:w-[70%] h-auto flex flex-col items-center gap-12 pb-12">
                <div className="flex flex-col gap-8 text-sm lg:text-xl">
                    <p>
                        <strong>Aceitação dos Termos:</strong> Ao acessar e utilizar os serviços oferecidos pela E-movee, você concorda com os termos e condições estabelecidos nesta página. Leia atentamente os Termos de Uso antes de continuar utilizando nosso site.
                    </p>
                    <p>
                        <strong>Propriedade Intelectual:</strong> Todo o conteúdo presente em nosso site, incluindo textos, imagens, gráficos e logotipos, é de propriedade exclusiva da E-movee ou de seus licenciadores. É proibido copiar, distribuir ou modificar qualquer conteúdo sem a nossa autorização prévia.
                    </p>
                    <p>
                        <strong>Limitação de Responsabilidade:</strong> A E-movee não se responsabiliza por eventuais danos diretos ou indiretos resultantes do uso do nosso site ou de quaisquer links externos que possam ser acessados através dele.
                    </p>
                    <p>
                        <strong>Alterações dos Termos:</strong> Reservamo-nos o direito de alterar os Termos de Uso a qualquer momento. As modificações entrarão em vigor assim que publicadas no site.
                    </p>                
                </div>  
            </div>
        </div>  
    )
}