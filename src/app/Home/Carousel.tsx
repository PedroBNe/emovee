import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '@/components/utils/Button';

interface slide {
  imagem: StaticImageData;
  text: string;
}

interface CarouselProps {
  slides: slide[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId: number = window.setInterval(nextSlide, 8000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative w-full min-h-[100vh] flex justify-center items-center">
      <div className="w-full min-h[800px] flex justify-center overflow-hidden items-center">
        {slides.map((b, index) => (
          <div
            key={index}
            className={`relative flex justify-center w-full h-full items-center flex-shrink-0 transition-transform duration-500 ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <div className="flex flex-col gap-40 justify-center items-center">
              <Image src={b.imagem} alt={`Slide ${index}`} width={200} height={200} />
              <div className="flex flex-col justify-center items-center gap-16 text-xl">
                <div className="w-full flex flex-row">
                  <div className="w-full inline-block overflow-hidden whitespace-nowrap animate-typewriter text-sm md:text-3xl justify-center items-center">
                    {b.text}
                  </div>
                  <div className="animate-blinkTextCursor border-l-2"></div>
                </div>
                <Link href="/sobre">
                  <Button>Saiba mais</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
