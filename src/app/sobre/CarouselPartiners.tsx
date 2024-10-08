import * as React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image, { StaticImageData } from 'next/image';

interface slide {
  imagem: StaticImageData;
}

interface CarouselProps {
  slides: slide[];
}

export function CarouselPartiners({ slides }: CarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-[90%]"
    >
      <CarouselContent>
        {Array.from(slides).map((p, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">
                  <Image src={p.imagem} alt={`imagem ${index}`} width={40} height={40} />
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
