import Imagem from '@/assets/location.png'
import Imagem2 from '@/assets/insta-media.png'
import Imagem3 from '@/assets/social-insta.png'
import Imagem4 from '@/assets/values.png'
import { StaticImageData } from 'next/image'
import { CarouselEmovee } from './CarouselEmovee'

interface slide {
    imagem: StaticImageData,
}

const slides: slide[] = [
    {
        imagem: Imagem,
    },
    {
        imagem: Imagem2,
    },
    {
        imagem: Imagem3,
    },
    {
        imagem: Imagem4,
    },
    {
        imagem: Imagem,
    },
    {
        imagem: Imagem2,
    },
    {
        imagem: Imagem3,
    },
    {
        imagem: Imagem4,
    }
]

export default function AboutEmo() {
    return(
        <div className="w-full min-h-[35em] flex flex-col xl:flex-row gap-8">
            <div className="w-full xl:w-[50%] h-full flex flex-col justify-center items-center gap-12 xl:mx-3" data-aos="fade-right">
                <h2 className="text-center text-xl xl:text-3xl font-bold">
                    Sobre a E-movee
                </h2>
                <div className="text-sm xl:text-xl text-center flex flex-col gap-8">
                    <p>Fruto da busca pela otimização e eficiência, a E-moviee se insere no mercado com uma plataforma intuitiva capaz de simplificar processos e aumentar a produtividade e reduzir custos operacionais. Em um ambiente de negócios cada vez mais competitivo e dinâmico, a necessidade de ferramentas que proporcionem rapidez e precisão nas operações é imprescindível.</p>
                    <p>Com uma interface de fácil aprendizado e funcionalidades avançadas, nossa plataforma permite que sua equipe tenha mais agilidade no dia a dia. Estamos preparados para nos adaptarmos a sua necessidade específica, oferecendo soluções personalizadas que atendem às particularidades do seu setor.
                    </p>
                    <p >Nosso objetivo vai além de fornecer um simples software; buscamos ser um parceiro estratégico para empresas que almejam excelência operacional e competitividade no mercado. Ao facilitar uma gestão de ofertas mais eficiente e inteligente, contribuímos significativamente para o crescimento sustentável e o sucesso contínuo do seu negócio.</p>
                </div>
            </div>
            <div className="w-full xl:w-[50%] flex justify-center items-center" data-aos="fade-left">
                <div className="w-[450px] h-[500px] shadow-2xl rounded-lg bg-white min-h-[7em] flex flex-row justify-center items-center">
                    <div className="w-full flex flex-col justify-center items-center">
                        <CarouselEmovee slides={slides} />
                    </div>
                </div>
            </div>
        </div>
    )
}