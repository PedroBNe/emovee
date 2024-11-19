'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Banner from '../../components/utils/BannerTop';
import FormInterface from '../../components/utils/Form';
import WhatsApp from '@/assets/whats-button.png';
import Email from '@/assets/email-media.png';
import Insta from '@/assets/insta-media.png';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export default function Specialist() {
  const [contactInfo, setContactInfo] = useState({
    whatsapp: '',
    email: '',
    instagram: '',
    endereco: '',
  });

  useEffect(() => {
    loadContactInfo();
  }, []);

  const loadContactInfo = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/informacoes.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const info = JSON.parse(bodyContents);
        setContactInfo({
          whatsapp: info.celular || 'Não disponível',
          email: info.email || 'Não disponível',
          instagram: info.instagram || 'Não disponível',
          endereco: info.endereco || 'Não disponível',
        });
      } else {
        console.error("Erro: Dados de 'informacoes.json' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar 'informacoes.json' do S3:", error);
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
    <div className="xl:relative w-full h-[110em] md:h-[118em] xl:h-[75em] flex flex-col gap-12 pb-8">
      <Banner>Entre em Contato!</Banner>
      <div className="w-full xl:w-[60%] min-h-[20em] flex flex-col justify-center items-center" data-aos="fade-right">
        <h2 className="text-xl font-bold mb-3">Nossa equipe sempre a postos!</h2>
        <div className="flex flex-col justify-center items-start gap-3">
          <div className="flex gap-2">
            <Image src={WhatsApp} alt="whats-icon" width={20} />
            <span>{contactInfo.whatsapp}</span>
          </div>
          <div className="flex gap-2">
            <Image src={Email} alt="email-icon" width={20} />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex gap-2">
            <Image src={Insta} alt="insta-icon" width={20} />
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {contactInfo.instagram}
            </a>
          </div>
          <div>
            <p className="font-semibold">Endereço:</p>
            <p>{contactInfo.endereco}</p>
          </div>
          <div className="w-[40vh] md:w-[55vh] lg:w-[80vh] xl:w-[70vh] h-[30vh] md:h-[50vh] lg:h-[60vh] xl:h-[45vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5946.610424963373!2d-48.55423345806331!3d-27.597382620183385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739822cdb22b3%3A0xec7a45661537149d!2sTerminal%20rodovi%C3%A1rio%20de%20Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1725289110847!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center xl:w-[50%] xl:absolute xl:right-0 xl:top-40 my-12">
        <FormInterface />
      </div>
    </div>
  );
}
