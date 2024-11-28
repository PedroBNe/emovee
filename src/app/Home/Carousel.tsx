import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '@/components/utils/Button';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface slide {
  text: string;
}

interface CarouselProps {
  slides: slide[];
}

interface CompanyInfo {
  logoUrl: string; // Adicionamos o logoUrl
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  async function streamToString(stream: any): Promise<string> {
    const chunks: any[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  const loadCompanyInfo = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/informacoes.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const info = JSON.parse(bodyContents);
        setCompanyInfo(info);
      } else {
        console.error("Erro: Dados de 'informacoes.json' não encontrados no S3.");
      }
    } catch (error) {
      console.error("Erro ao carregar 'informacoes.json' do S3:", error);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId: number = window.setInterval(nextSlide, 8000);
    loadCompanyInfo();

    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative w-full min-h-[100vh] flex justify-center items-center">
      <div className="w-full min-h-[800px] flex justify-center overflow-hidden items-center">
        {slides.map((b, index) => (
          <div
            key={index}
            className={`relative flex justify-center w-full h-full items-center flex-shrink-0 transition-transform duration-500 ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <div className="flex flex-col gap-40 justify-center items-center">
              <Image
                src={companyInfo?.logoUrl || '/default-logo.png'}
                alt="company-logo"
                quality={100}
                width={300}
                height={300}
              />
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
