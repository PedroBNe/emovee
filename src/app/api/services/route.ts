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

    // Verifica se o data.Body existe e é do tipo correto
    if (data.Body) {
      const bodyContents = await streamToString(data.Body);
      return NextResponse.json(JSON.parse(bodyContents));
    } else {
      throw new Error('O conteúdo do body não foi retornado do S3.');
    }
  } catch (error) {
    console.error('Erro ao carregar serviços do S3:', error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
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
async function streamToString(stream: any): Promise<string> {
  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks).toString('utf-8');
}
