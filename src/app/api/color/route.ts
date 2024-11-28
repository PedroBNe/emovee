import { NextResponse } from 'next/server';
import { S3 } from 'aws-sdk'; // Importa o SDK do S3
import { promises as fs } from 'fs';

// Configuração do S3
const s3 = new S3();
const bucketName = 'your-s3-bucket-name';  // Substitua pelo nome do seu bucket
const fileKey = 'colors.json';  // O nome do arquivo no S3

// Interface para os dados das cores
interface Color {
  id: number;
  name: string;
  default: string;
  text?: string;
}

// Função para obter as cores do S3
async function getColors(): Promise<Color[]> {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileKey,
    };
    const data = await s3.getObject(params).promise(); // Obtém o arquivo JSON do S3
    const jsonData = data.Body ? data.Body.toString('utf-8') : '[]'; // Garantir que temos um JSON válido
    return JSON.parse(jsonData);
  } catch (error) {
    throw new Error('Erro ao buscar as cores do S3: ' + error);
  }
}

// Função para atualizar as cores no S3
async function updateColors(colors: Color[]): Promise<void> {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileKey,
      Body: JSON.stringify(colors, null, 2), // Corpo da requisição com os dados atualizados
      ContentType: 'application/json',
    };
    await s3.putObject(params).promise();  // Envia os dados para o S3
  } catch (error) {
    throw new Error('Erro ao atualizar as cores no S3: ' + error);
  }
}

// API Route (GET e PUT)
export async function GET() {
  try {
    const colors = await getColors();
    return NextResponse.json(colors);
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar as cores.', error: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    const updatedColors: Color[] = await req.json(); // Pega os dados do corpo da requisição
    await updateColors(updatedColors);
    return NextResponse.json({ message: 'Cores atualizadas com sucesso!' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao atualizar as cores.', error: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 },
    );
  }
}
