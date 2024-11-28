'use client';

import formatDate from '@/components/utils/Data';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/components/utils/BannerTop';
import { Input } from '@nextui-org/input';
import { Pagination } from '@nextui-org/react';
import useWindowSize from '@/components/utils/Window';

// Componente para um único post
const PostCardBlog = ({ post }: { post: Blog }) => {
  const [isHovered, setIsHovered] = useState(false);
  const window = useWindowSize();
  const category = [
    {
      id: 1,
      name: 'Tecnologia',
    },
  ];

  if (window.width > 435) {
    return (
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="flex justify-between absolute bottom-0 left-0 right-0 p-6 text-black bg-white">
          <div className="w-[70%]">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-primary rounded-full text-white">
              {/* {post.category} */}
              {category[0].name}
            </span>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-2 opacity-90">{post.subtitle}</p>
            <p className="text-xs opacity-75">{formatDate(post.date)}</p>
          </div>
          <div className="w-[30%] flex items-center justify-center">
            <Link href={'/blog/teste'}>
              <button className="border-2 border-black text-primary font-semibold py-4 px-8 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                Ler mais
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  if (window.width <= 425) {
    return (
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsHovered(!isHovered)}
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-primary rounded-full">
            {/* {post.category} */}
            {category[0].name}
          </span>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-sm mb-2 opacity-90">{post.subtitle}</p>
          <p className="text-xs opacity-75">{formatDate(post.date)}</p>
        </div>
        <motion.div
          className={`${isHovered ? 'flex' : 'hidden'} absolute inset-0 bg-primary/20 backdrop-blur-sm items-center justify-center opacity-0`}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={'/blog/teste'}>
            <button className="bg-white text-primary font-semibold py-2 px-4 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
              Ler mais
            </button>
          </Link>
        </motion.div>
      </motion.div>
    );
  }
};

type Blog = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
  imageUrl: string;
};

type empresaInfo = {
  nomeSite: string;
};

export default function Blog() {
  const [postPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [info, setInfo] = useState<empresaInfo>();

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog', {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error(`Erro: ${res.status}`);
      }

      const data = await res.json();

      setBlogs(data);
    } catch (error) {
      console.error('Falha ao buscar os posts:', error);
    }
  };

  const fetchEmpresa = async () => {
    try {
      const data = await fetch('https://imagensladingpage.s3.sa-east-1.amazonaws.com/data/informacoes.json').then(
        (res) => res.json(),
      );

      setInfo(data);
    } catch (error) {
      console.error('Falha ao buscar os posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchEmpresa();
  }, []);

  const totalPages = Math.ceil(blogs.length / postPerPage); // Número total de páginas
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost); // Posts atuais

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full min-h-[100vh] items-center flex flex-col gap-3 bg-slate-300">
      <Banner>Blog {info?.nomeSite}</Banner>
      <Input variant="faded" type="search" label="Search" color="primary" className="w-[22em]" />
      <div className="w-full min-h-[55em] mt-4 flex flex-col lg:flex-row justify-between">
        <div className="w-[15%] h-full flex justify-center items-center">{/* cookies */}</div>
        <div className="w-full h-full relative">
          <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-2 mx-2">
            {currentPosts.map((post) => (
              <PostCardBlog key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="w-[15%] flex justify-center items-center">{/* cookies */}</div>
      </div>
      <div className="w-full mb-3 py-2 flex justify-center">
        <Pagination
          isCompact
          showControls
          total={totalPages} // Total de páginas
          page={currentPage} // Página atual
          onChange={handlePageChange} // Função para alterar a página
        />
      </div>
    </div>
  );
}
