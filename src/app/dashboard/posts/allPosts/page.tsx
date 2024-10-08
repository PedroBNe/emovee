import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    title: 'Primeiro Post',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 1,
    title: 'Primeiro Post',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 1,
    title: 'Primeiro Post',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 1,
    title: 'Primeiro Post',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 1,
    title: 'Primeiro Post',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
  {
    id: 1,
    title: 'Primeiro Post',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Segundo Post',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Terceiro Post',
    date: '2023-06-01',
  },
];

export default function PostsList() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link href="/dashboard/posts/create">
          <Button>Criar Novo Post</Button>
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <Card key={post.id} className="w-[350px] h-[300px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Publicado em: {post.date}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="destructive" size="sm">
                  Excluir
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
