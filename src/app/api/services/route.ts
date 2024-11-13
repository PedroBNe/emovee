import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export async function GET() {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
  const key = 'data/services.json';

  try {
    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const data = await s3.send(command);
    const body = await streamToString(data.Body);
    return NextResponse.json(JSON.parse(body));
  } catch (error) {
    console.error('Erro ao carregar serviços do S3:', error);
    return NextResponse.error();
  }
}

export async function POST(request) {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
  const key = 'data/services.json';
  const services = await request.json();

  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(services),
      ContentType: 'application/json',
    });
    await s3.send(command);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar serviços no S3:', error);
    return NextResponse.error();
  }
}

// Função auxiliar para converter o stream para string
const streamToString = (stream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    stream.on('error', reject);
  });
};
