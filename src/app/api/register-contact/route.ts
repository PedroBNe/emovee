import { NextRequest, NextResponse } from 'next/server';
import { S3Client, GetObjectCommand, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

interface Contact {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  documento: string;
  tipoDocumento: string;
  empresa: string;
  segmento: string;
}

interface ContatosData {
  contatos: Contact[];
}

export async function GET() {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!;
  const key = 'data/contatos.json';

  try {
    // Verifica se o arquivo existe no bucket
    try {
      const headCommand = new HeadObjectCommand({ Bucket: bucketName, Key: key });
      await s3.send(headCommand);

      // Obtem os dados do arquivo no S3
      const getCommand = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(getCommand);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        const contatosData = JSON.parse(bodyContents);
        return NextResponse.json({ contatos: contatosData.contatos || [] });
      }
    } catch (err: any) {
      if (err.name === 'NotFound') {
        return NextResponse.json({ contatos: [] });
      }
      console.error('Erro ao verificar a existência do arquivo:', err);
      throw err;
    }
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
    return NextResponse.json({ error: 'Erro ao buscar contatos' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!;
  const key = 'data/contatos.json';

  try {
    const newContact: Omit<Contact, 'id'> = await req.json();
    let contatosData: ContatosData = { contatos: [] };

    // Verifica se o arquivo existe no bucket
    try {
      const headCommand = new HeadObjectCommand({ Bucket: bucketName, Key: key });
      await s3.send(headCommand);

      // Obtém os contatos existentes no S3
      const getCommand = new GetObjectCommand({ Bucket: bucketName, Key: key });
      const data = await s3.send(getCommand);

      if (data.Body) {
        const bodyContents = await streamToString(data.Body);
        contatosData = JSON.parse(bodyContents) as ContatosData;
      }
    } catch (err: any) {
      if (err.name !== 'NotFound') {
        console.error('Erro ao verificar a existência do arquivo:', err);
        throw err;
      }
      console.log('Arquivo não encontrado. Será criado um novo.');
    }

    // Adiciona apenas o novo contato
    const novoContatoCompleto: Contact = { id: Date.now(), ...newContact };
    contatosData.contatos.push(novoContatoCompleto);

    // Atualiza ou cria o arquivo no S3
    const putCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(contatosData),
      ContentType: 'application/json',
    });
    await s3.send(putCommand);

    return NextResponse.json({ message: 'Contato registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar contato:', error);
    return NextResponse.json({ error: 'Erro ao registrar contato' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!;
  const key = 'data/contatos.json';

  try {
    const { id } = await req.json();

    // Obter os contatos existentes
    const headCommand = new HeadObjectCommand({ Bucket: bucketName, Key: key });
    await s3.send(headCommand);
    const getCommand = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const data = await s3.send(getCommand);

    if (!data.Body) {
      return NextResponse.json({ error: 'Nenhum dado encontrado para deletar.' }, { status: 404 });
    }

    const bodyContents = await streamToString(data.Body);
    const contatos = JSON.parse(bodyContents).contatos;

    // Filtrar para excluir o contato com o ID especificado
    const updatedContatos = contatos.filter((contato: any) => contato.id !== id);

    // Atualizar o arquivo no S3
    const putCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify({ contatos: updatedContatos }),
      ContentType: 'application/json',
    });
    await s3.send(putCommand);

    return NextResponse.json({ message: 'Contato removido com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar contato:', error);
    return NextResponse.json({ error: 'Erro ao deletar contato.' }, { status: 500 });
  }
}

async function streamToString(stream: any): Promise<string> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}
