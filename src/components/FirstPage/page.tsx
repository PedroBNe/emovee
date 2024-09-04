'use client'

import { Carousel } from "./Carousel";
import Imagem from "@/assets/logo-white.png";
import { StaticImageData } from "next/image";import Header from "../utils/Header";
import Emovee from "./Emovee";
import Services from "./Services";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import CardLink from "./CardLink";

interface slide {
    imagem: StaticImageData,
    text: string,
}

const slides: slide[] = [
    {
        imagem: Imagem,
        text: "A agilidade que você sempre sonhou! "
    },
    {
        imagem: Imagem,
        text: "Defina ofertas estratégicas para o seu negócio. "
    },
    {
        imagem: Imagem,
        text: "O caminho de sucesso para a sua empresa! "
    },
    {
        imagem: Imagem,
        text: "Desfrute da rapidez que impulsiona resultados. "
    }
]

export default function FirstPage() {
    return(
        <div>
            <div className="w-full min-h-[54em] bg-black text-white mb-10">
                <Carousel slides={slides} />
            </div>
            <div className="w-full">
                <Header>
                    E-moviee
                </Header>
            </div>     
            <div className="w-full min-h-[105em] flex flex-col items-center">
                <Emovee />
                <div className="w-full">
                    <Header>
                        Serviços
                    </Header>
                </div>         
                <Services />
                <div className="w-full">
                    <Header>
                        Benefícios
                    </Header>
                </div>                    
                    <Benefits />
                <div className="w-full">
                    <Header>
                        Depoimentos
                    </Header>
                </div>   
                <Testimonials />
                <div className="w-full">
                    <Header>
                        Teste grátis
                    </Header>
                </div>                  
                <CardLink />
            </div>
        </div>
    );
}