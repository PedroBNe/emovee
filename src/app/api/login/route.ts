import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

interface LoginRequestBody {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const body: LoginRequestBody = await req.json();
  const { username, password } = body;

  if (username === 'admin' && password === '123456') {
    const token = jwt.sign({ username }, 'mysecret', {
      expiresIn: '1h',
    });

    const response = NextResponse.json({ message: 'Login bem-sucedido' });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hora
      path: '/',
    });

    return response;
  }

  return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 });
}
