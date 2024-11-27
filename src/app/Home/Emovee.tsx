'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/utils/Button';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

// Configuração do S3 Client para o AWS SDK
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface EmpresaInfo {
  nomeSite: string;
}

interface About {
  videoUrl: string;
  title: string;
  description: string;
}

export default function Emovee() {
  const [content, setContent] = useState<About | null>(null);
  const [info, setInfo] = useState<EmpresaInfo | null>(null);

  useEffect(() => {
    loadEmpresaInfo();
    loadAboutContent();
  }, []);

  const loadEmpresaInfo = async () => {
    try {
      const empresaInfo = await fetch('https://imagensladingpage.s3.sa-east-1.amazonaws.com/data/informacoes.json').then((res) => res.json());
      const aboutInfo = await fetch('https://imagensladingpage.s3.sa-east-1.amazonaws.com/data/about.json').then((res) => res.json());

      setContent(aboutInfo.content);
      setInfo(empresaInfo);
    } catch (error) {
      console.error("Erro ao carregar 'informacoes.json' do S3:", error);
    }
  };

  const loadAboutContent = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/about.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const aboutData = JSON.parse(bodyContents);
        setContent({
          videoUrl: aboutData.content.videoUrl,
          title: aboutData.content.title,
          description: aboutData.content.description,
        });
      } else {
        console.error("Erro: Dados de 'sobre' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdo 'Sobre' do S3:", error);
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
    <div className="w-full min-h-[35em] flex flex-col lg:flex-row gap-14 items-center justify-center">
      {/* Video Section */}
      <div className="w-full xl:w-[50%] h-full flex justify-center items-center">
        <div
          className="w-[85%] xl:w-[75%] lg:w-[85%] h-[400px] flex flex-col gap-5 justify-center items-center"
          data-aos="fade-right"
        >
          <motion.div
            className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <iframe
              width="100%"
              height="100%"
              src={content?.videoUrl}
              title="Vídeo de apresentação Gondify"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full xl:w-[50%] h-full flex justify-center items-center">
        <div
          className="w-[85%] xl:w-[75%] lg:w-[85%] h-[450px] sm:h-[400px] flex flex-col gap-5 justify-center items-center"
          data-aos="fade-left"
        >
          <motion.div
            className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <h1 className="font-bold text-xl">{content?.title}</h1>
            <p className="text-center m-5">{content?.description}</p>
            <Link href="/sobre">
              <Button>Sobre a {info?.nomeSite}</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
