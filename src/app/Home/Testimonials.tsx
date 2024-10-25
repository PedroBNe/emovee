import Image from 'next/image';
import Quotam from '@/assets/quotation-marks.png';
import 'aos/dist/aos.css';
import Header from '@/components/utils/Header';
import { Carousel2, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel-2';
import Button from '@/components/utils/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Props = {
  id: number;
  title: string;
  subtitle: string;
};

const testimonials: Props[] = [
  {
    id: 0,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
  {
    id: 1,
    title: 'Comentario',
    subtitle:
      'non magni excepturi, architecto, dignissimos beatae natus qui aut temporibus eos, ratione assumenda nobis',
  },
  {
    id: 2,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
  {
    id: 3,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
  {
    id: 4,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
  {
    id: 5,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
  {
    id: 6,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
];

const CardTestimonials = ({ post }: any) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-[400px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3">
        <div className="flex gap-2">
          <Image src={Quotam} alt="quotation-mark-icon" width={28} />
          <h1 className="font-bold text-xl">{post.title}</h1>
        </div>
        <p className="text-center m-5">{post.subtitle}</p>
      </div>
    </div>
  );
};

const gradientVariants = {
  gradient1: { background: 'linear-gradient(to right, #800000, #800080)' },
  gradient2: { background: 'linear-gradient(to right, #800080, #000080)' },
  gradient3: { background: 'linear-gradient(to right, #000080, #800000)' },
};

export default function Testimonials() {
  const [currentGradient, setCurrentGradient] = useState('gradient1');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => {
        const gradientKeys = Object.keys(gradientVariants);
        const currentIndex = gradientKeys.indexOf(prev);
        return gradientKeys[(currentIndex + 1) % gradientKeys.length];
      });
    }, 2000); // Altere o gradiente a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <motion.div
      className="w-full h-[50em] lg:h-[40em] flex shadow-2xl rounded-[70px] my-8"
      variants={gradientVariants}
      animate={currentGradient}
      transition={{ duration: 2 }}
    >
      <div className="w-full h-full flex items-center justify-center p-10 mx-4">
        <div className="w-full h-full flex flex-col justify-between lg:flex-row relative">
          <div className="lg:w-[40%] h-full flex flex-col gap-12 items-center justify-center">
            <h2 className="lg:w-[70%] text-center text-4xl text-white">
              Venha descobrir o que estao falando sobre a gente!!!
            </h2>
            <Link href={``}>
              <Button>Saiba mais</Button>
            </Link>
          </div>
          <div className="lg:w-fit h-full flex justify-center items-center">
            <Carousel2 className="lg:w-fit md:absolute lg:right-8">
              <CarouselContent className="w-[300px] md:w-[400px] lg:w-[600px] xl:w-[750px]">
                {testimonials.map((post, index) => (
                  <CarouselItem key={index} className="basis-1/1 lg:basis-1/2">
                    <div className="w-[60vw] sm:w-[35vw] lg:w-[23vw] xl:w-[18vw] h-fit p-1">
                      <CardTestimonials key={post.id} post={post} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
