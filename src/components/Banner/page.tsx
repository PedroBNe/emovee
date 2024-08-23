import { Carousel } from "./Carousel"
import Imagem from "@/assets/logo-white.png"
import { StaticImageData } from "next/image"

interface slide {
    imagem: StaticImageData,
    text: string,
}

const slides: slide[] = [
    {
        imagem: Imagem,
        text: "Otimizacao e Eficiencia, incentivando na agilidade... "
    },
    {
        imagem: Imagem,
        text: "Insterfaces que lhe proporcionam tudo... "
    },
    {
        imagem: Imagem,
        text: "Com foco em facilitar e oferecer os melhores meios para o sucesso do seu negócio. "
    }
]

export default function Banner() {
    return(
        <div className="w-full min-h-[600px] bg-black text-white">
            <Carousel slides={slides} />
        </div>
    )
}