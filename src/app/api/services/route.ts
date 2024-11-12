import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'services.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const services = await request.json();
  const filePath = path.join(process.cwd(), 'src', 'data', 'services.json');

  fs.writeFileSync(filePath, JSON.stringify(services, null, 2));
  return NextResponse.json({ success: true });
}
