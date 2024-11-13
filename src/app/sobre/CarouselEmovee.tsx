import * as React from 'react';

import { Carousel2, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel-2';
import Image, { StaticImageData } from 'next/image';

interface slide {
  imagem: StaticImageData;
}

interface CarouselProps {
  slides: slide[];
}

export function CarouselEmovee({ slides }: CarouselProps) {
  return (
    <Carousel2
      opts={{
        align: 'start',
      }}
      className="w-[70%] my-10 flex justify-center items-center"
    >
      <CarouselContent>
        {Array.from(slides).map((p, index) => (
          <CarouselItem key={index} className="md:basis-1/1">
            <div className="w-full h-full p-1">
              <div className="w-full rounded-md flex items-center justify-center bg-black rounded-xl">
                <span>
                  <Image src={p.imagem} alt={`imagem ${index}`} width={1000} height={1000} className='rounded-lg' />
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel2>
  );
}
