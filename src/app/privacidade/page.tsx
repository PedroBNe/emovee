'use client';

import Banner from '../../components/utils/BannerTop';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { useState, useEffect } from 'react';

// Configuração do S3 Client
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export default function Privacy() {
  const [privacyPolicy, setPrivacyPolicy] = useState<string | null>(null);

  useEffect(() => {
    loadPrivacyPolicy();
  }, []);

  const loadPrivacyPolicy = async () => {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
    const key = 'data/informacoes.json';

    try {
      const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(command);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const jsonData = JSON.parse(bodyContents);
        setPrivacyPolicy(jsonData.politicasPrivacidade);
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

  if (!privacyPolicy) return <div>Carregando...</div>;

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Banner>Políticas de Privacidade</Banner>
      <div className="w-[95%] lg:w-[70%] h-auto flex flex-col items-center gap-12 pb-12">
        <div className="flex flex-col gap-8 text-sm lg:text-xl">
          <p>{privacyPolicy}</p>
        </div>
      </div>
    </div>
  );
}
