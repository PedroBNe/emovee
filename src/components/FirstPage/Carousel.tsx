// import NextL from '@/assets/next-left.png'
// import NextR from '@/assets/next-right.png'
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

interface slide {
    imagem: StaticImageData,
    text: string,
}


interface CarouselProps {
    slides: slide[];
}

export const Carousel = ({ slides }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const intervalId: number = window.setInterval(nextSlide, 8000);
      
        return () => clearInterval(intervalId);
    });

    return (
        <div className="relative w-full min-h-[800px] flex">
            <div className="w-full min-h[800px] flex overflow-hidden items-center">
                {slides.map((b, index) => (
                <div
                    key={index}
                    className={`relative flex justify-center w-full h-full items-center flex-shrink-0 transition-transform duration-500 ${
                    index === currentIndex ? "block" : "hidden"
                    }`}
                >
                    <div className='flex flex-col gap-40 items-center'>
                        <Image src={b.imagem} alt={`Slide ${index}`} />
                        <div className='flex flex-col items-center gap-16 text-xl'>
                            <div className='flex flex-row'>
                                <div className="inline-block overflow-hidden whitespace-nowrap animate-typewriter text-3xl">
                                    {b.text}
                                </div>
                                <div className="animate-blinkTextCursor border-l-2"></div>
                            </div>
                            <Link href="/sobre">
                                <button className="transition w-fit text-slate-100 font-bold rounded-full p-6 px-9 text-xl bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
                                    Saiba mais
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {/* <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform-translate-y-1/2 p-2 pl-3 hover:opacity-70"
            >
                <Image src={NextL} alt='next-left-button' width={40}/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform-translate-y-1/2 p-2 pr-3 hover:opacity-70"
            >
                <Image src={NextR} alt='next-left-button' width={40}/>
            </button> */}
        </div>
    );
};