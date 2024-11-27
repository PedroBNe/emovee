import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

// Caminho do arquivo JSON
const filePath = path.join(process.cwd(), 'src', 'data', 'colors.json');

// Interface para os dados das cores
interface Color {
  name: string;
  default: string;
  text?: string;
}

// Função para obter as cores do arquivo JSON
async function getColors(): Promise<Color[]> {
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

// Função para atualizar as cores no arquivo JSON
async function updateColors(colors: Color[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(colors, null, 2), 'utf-8');
}

// API Route (GET e PUT)
export async function GET() {
  try {
    const colors = await getColors();
    return NextResponse.json(colors);
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao buscar as cores.', error: error instanceof Error ? error.message : 'Erro desconhecido' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const updatedColors: Color[] = await req.json();  // Pega os dados do corpo da requisição
    await updateColors(updatedColors);
    return NextResponse.json({ message: 'Cores atualizadas com sucesso!' });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao atualizar as cores.', error: error instanceof Error ? error.message : 'Erro desconhecido' }, { status: 500 });
  }
}
