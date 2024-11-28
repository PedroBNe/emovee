import { NextRequest, NextResponse } from 'next/server';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

// Função para converter o ReadableStream para Buffer
async function streamToBuffer(stream: ReadableStream<Uint8Array> | null): Promise<Buffer | null> {
  if (!stream) {
    // Retorne null ou lance um erro se o stream for nulo
    return null;
  }

  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();
  let done, value;
  while (({ done, value } = await reader.read())) {
    if (done) break;

    // Verifique se value não é undefined antes de usar
    if (value !== undefined) {
      chunks.push(value);
    } else {
      console.error('Valor de "value" é undefined, ignorando...');
    }
  }
  return Buffer.concat(chunks);
}

export async function GET(request: NextRequest) {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
  const key = 'data/colors.json';

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

async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export async function PUT(request: NextRequest) {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
  const key = 'data/colors.json';

  try {
    const body = await request.json();
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(body),
      ContentType: 'application/json', // Defina o contentType conforme necessário
    });
    await s3.send(command);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar serviços no S3:', error);
    return NextResponse.error();
  }
}
