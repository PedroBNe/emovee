import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';
import LogoutButton from '@/components/LogoutButton';
import { redirect } from 'next/navigation';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

async function loadSiteInfo() {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
  const key = 'data/informacoes.json';

  try {
    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const data = await s3.send(command);

    if (data.Body) {
      const chunks: Uint8Array[] = [];
      for await (const chunk of data.Body as any) {
        chunks.push(chunk);
      }
      const bodyContents = Buffer.concat(chunks).toString('utf-8');
      const siteInfo = JSON.parse(bodyContents);
      return siteInfo.nomeSite || 'Dashboard';
    }
  } catch (error) {
    console.error("Erro ao carregar 'informacoes.json' do S3:", error);
    return 'Dashboard'; // Fallback para o valor padrão
  }
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);

    const nomeSite = await loadSiteInfo();

    return (
      <div className="w-full bg-slate-100 min-h-screen min-h-screen top-0 z-50">
        <nav className="w-full h-[8vh] flex justify-between items-center p-8 bg-white">
          <div className="w-fit flex justify-center items-center text-3xl font-bold">{nomeSite}</div>
          <Link href="/" className="flex gap-8">
            <Button>Home</Button>
            <LogoutButton />
          </Link>
        </nav>
        <div className="w-full min-h-screen flex text-black">
          <nav className="w-[350px] flex justify-center bg-gray-900 text-white">
            <div className="w-full flex flex-col items-center text-start font-bold">
              <Link href={'/dashboard/servicos'} className="w-full h-fit p-3 hover:bg-slate-600 transition">
                Serviços
              </Link>
              <Link href={'/dashboard/sobre'} className="w-full h-fit p-3 hover:bg-slate-600 transition">
                Sobre
              </Link>
              <Link href={'/dashboard/comentarios'} className="w-full h-fit p-3 hover:bg-slate-600 transition">
                Comentários
              </Link>
              <Link href={'/dashboard/informacoes'} className="w-full h-fit p-3 hover:bg-slate-600 transition">
                Informações
              </Link>
              <Link href={'/dashboard/contatos'} className="w-full h-fit p-3 hover:bg-slate-600 transition">
                Contatos
              </Link>
            </div>
          </nav>
          <main className="w-full p-6">{children}</main>
        </div>
      </div>
    );
  } catch (err) {
    return <p>Você não está autenticado. Faça login.</p>;
  }
}
