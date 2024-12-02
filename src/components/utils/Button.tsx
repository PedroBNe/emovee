'use client';
import React, { useEffect, useState } from 'react';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface Color {
  name: string;
  default: string;
  text?: string;
}

export default function Button({ children }: any) {
  const [colors, setColors] = useState<Color[]>([]);

  const fetchColors = async () => {
    try {
      const response = await fetch('/api/color');
      if (response.ok) {
        const data = await response.json();
        setColors(data);
      } else {
        console.error('Erro ao buscar as cores');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <button
      className="transition w-fit font-bold rounded-full py-3 sm:py-4 px-4 sm:px-7 hover:opacity-80 items-center cursor-pointer"
      style={{ backgroundColor: colors?.[1]?.default, color: colors?.[1]?.text }}
    >
      {children}
    </button>
  );
}
