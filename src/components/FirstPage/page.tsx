'use client'

import { Carousel } from "./Carousel";
import Imagem from "@/assets/logo-white.png";
import { StaticImageData } from "next/image";
import SlideIn from "../utils/SlideIn";
import Header from "../utils/Header";
import Emoviee from "./Emoviee";
import Services from "./Services";
import Benefits from "./Benefits";
// import Testimonials from "./Testimonials";
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
                <SlideIn Content={
                    <Header>
                        E-moviee
                    </Header>
                } />
            </div>     
            <div className="w-full min-h-[105em] flex flex-col items-center">
                <SlideIn Content={
                    <Emoviee />
                } />
                <div className="w-full">
                    <SlideIn Content={
                        <Header>
                            Serviços
                        </Header>
                    } />
                </div>         
                <SlideIn Content={
                    <Services />
                } />
                <div className="w-full">
                    <SlideIn Content={
                        <Header>
                            Benefícios
                        </Header>
                    } />
                </div>                    
                <SlideIn Content={
                    <Benefits />
                } />
                {/* <div className="w-full">
                    <SlideIn Content={
                        <Header>
                            Depoimentos
                        </Header>
                    } />
                </div>   
                 <SlideIn Content={
                    <Testimonials />
                } />  */}
                <div className="w-full">
                    <SlideIn Content={
                        <Header>
                            Teste grátis
                        </Header>
                    } />
                </div>                  
                <SlideIn Content={
                    <CardLink />
                } />
            </div>
        </div>
    );
}