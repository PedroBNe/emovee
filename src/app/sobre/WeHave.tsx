'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

// Configuração do S3 Client para buscar os dados
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface CardSection {
  id: number;
  icon: string;
  title: string;
  text: string;
  imageUrl: string; // URL da imagem do ícone, caso esteja armazenada
}

export default function WeHave() {
  const [cardSections, setCardSections] = useState<CardSection[]>([]);

  useEffect(() => {
    loadCardSections();
  }, []);

  const loadCardSections = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/about.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const aboutData = JSON.parse(bodyContents);
        setCardSections(aboutData.cardSections);
      } else {
        console.error("Erro: Dados de 'cardSections' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar 'cardSections' do S3:", error);
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
    <div className="w-full min-h-[35em] flex flex-col lg:flex-row gap-14 items-center justify-center px-10">
      {cardSections.map((card) => (
        <div key={card.id} className="w-[95%] xl:w-[20%] h-full flex items-center justify-center" data-aos="fade-up">
          <motion.div
            className="w-[100%] sm:w-[50%] lg:w-full h-[320px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-col gap-2 justify-center items-center m-2">
              {/* <Image src={card.imageUrl || '/default-icon.png'} alt={`${card.title}-icon`} width={40} height={40} /> */}
              <div className="text-[60px]">{card.icon}</div>
              <h1 className="font-bold text-lg xl:text-xl">{card.title}</h1>
            </div>
            <p className="text-center m-5">{card.text}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
