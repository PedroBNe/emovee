"use client"

import NextL from '@/assets/next-left.png'
import NextR from '@/assets/next-right.png'
import Image, { StaticImageData } from "next/image";
import { useState } from "react"

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
    
    return (
        <div className="relative w-full">
            <div className="w-full flex overflow-hidden">
                {slides.map((b, index) => (
                <div
                    key={index}
                    className={`relative flex justify-center w-full flex-shrink-0 transition-transform duration-500 ${
                    index === currentIndex ? "block" : "hidden"
                    }`}
                >
                    <Image src={b.imagem} alt={`Slide ${index}`} width={800} height={400} />
                    <div className='absolute bottom-0 p-4'>
                        {b.text}
                    </div>
                </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 pl-3"
            >
                <Image src={NextL} alt='next-left-button' width={40}/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 pr-3"
            >
                <Image src={NextR} alt='next-left-button' width={40}/>
            </button>
        </div>
    );
};