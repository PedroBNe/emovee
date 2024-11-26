'use client';

import Image from 'next/image';
import Quotam from '@/assets/quotation-marks.png';
import 'aos/dist/aos.css';
import Header from '@/components/utils/Header';
import { Carousel2, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel-2';
import Button from '@/components/utils/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

interface Testimonial {
  id: number;
  nome: string;
  cargo: string;
  comentario: string;
  imagemUrl: string;
}

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

const CardTestimonials = ({ post }: { post: Testimonial }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-full h-[400px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3">
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-20 h-20 rounded-full">
          <Image src={post.imagemUrl} alt="quotation-mark-icon" fill className="rounded-full" />
        </div>
        <h1 className="font-bold text-xl">{post.nome}</h1>
        <p>{post.cargo}</p>
      </div>
      <p className="text-center m-5">{post.comentario}</p>
    </div>
  </div>
);

const gradientVariants = {
  gradient1: { background: 'linear-gradient(to right, #800000, #800080)' },
  gradient2: { background: 'linear-gradient(to right, #800080, #000080)' },
  gradient3: { background: 'linear-gradient(to right, #000080, #800000)' },
};

export default function Testimonials() {
  const [currentGradient, setCurrentGradient] = useState('gradient1');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => {
        const gradientKeys = Object.keys(gradientVariants);
        const currentIndex = gradientKeys.indexOf(prev);
        return gradientKeys[(currentIndex + 1) % gradientKeys.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/comentarios.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const loadedTestimonials = JSON.parse(bodyContents);
        setTestimonials(loadedTestimonials);
      } else {
        console.error("Erro: Dados de 'comentarios' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar 'comentarios' do S3:", error);
    }
  };

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

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
              Venha descobrir o que estão falando sobre a gente!!!
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
