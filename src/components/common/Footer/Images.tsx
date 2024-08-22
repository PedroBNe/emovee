import Image, { StaticImageData } from "next/image"

interface SitesProps {
    image: StaticImageData,
    alt: string,
    text: string,
}

export const Images = ({ image, alt, text }: SitesProps) => {
    return(
        <div className="flex gap-2">
            <Image src={image} alt={alt} width={20} height={14}/>{text}
        </div>
    )
}