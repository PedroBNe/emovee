import { Carousel } from "./Carousel"
import Imagem1 from "@/assets/social-email.png"
import Imagem2 from "@/assets/social-insta.png"
import Imagem3 from "@/assets/social-whatsapp.png"
import { StaticImageData } from "next/image"

interface slide {
    imagem: StaticImageData,
    text: string,
}

const slides: slide[] = [
    {
        imagem: Imagem1,
        text: "Otimizacao e Eficiencia, com foco na agilidade..."
    },
    {
        imagem: Imagem2,
        text: "Insterfaces que lhe proporcionam tudo..."
    },
    {
        imagem: Imagem3,
        text: "Nosso objetivo? Além ser um parceiro estratégico para as demais empresas no mercado, buscamos facilitar e oferecer os melhores meios para a gestao e o sucesso contínuo do seu negócio. Nao perca suas chances... Basta um clique."
    }
]

export default function Banner() {
    return(
        <div className="w-full min-h-[600px] bg-black text-white">
            <Carousel slides={slides} />
        </div>
    )
}