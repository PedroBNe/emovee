import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/utils/Button';
import 'aos/dist/aos.css';
import Header from '@/components/utils/Header';

type Props = {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  imagem: any;
};

const service = [
  {
    id: 0,
    title: 'Cartazeamento',
    subtitle:
      'Em poucos cliques, crie e imprima cartazes promocionais atrativos, que despertem desejo nos consumidores.',
    link: '/cartazeamento',
    imagem: 'nada',
  },
  {
    id: 1,
    title: 'Gestão de ofertas',
    subtitle: 'De maneira ágil e simplificada, gerencie e organize seu calendário promocional.',
    link: '/gestao-ofertas',
    imagem: 'nada',
  },
  {
    id: 2,
    title: 'Tablóides',
    subtitle: 'Texto.',
    link: '/tabloides',
    imagem: 'nada',
  },
];

const ServicesCard = ({ service }: { service: Props }) => {
  return (
    <div className="w-full sm:w-[90%] h-full flex items-center justify-center" data-aos="fade-right">
      <motion.div
        className="w-[100%] h-auto rounded-lg bg-white flex flex-col lg:flex-row gap-4 items-center justify-around shadow-2xl p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <div className="lg:w-[50%] h-full flex justify-center items-center">
          <div className="w-[300px] md:w-[600px] lg:w-full h-[23vh] md:h-[38vh] border-2 border-black rounded-lg flex justify-center items-center">
            Foto
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-full p-5 flex flex-col justify-between items-center">
          <p className="font-bold text-2xl">{service.title}</p>
          <p className="text-start text-xl m-5">{service.subtitle}</p>
          <Link href={`${service.link}`}>
            <Button>Saiba mais</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <div className="w-full flex flex-col bg-blue-600 shadow-2xl rounded-[70px] my-8">
      <Header>Serviços</Header>
      <div className="w-full h-auto flex flex-col gap-10 items-center justify-center px-10 py-16">
        {service.map((ser) => (
          <ServicesCard key={ser.id} service={ser} />
        ))}
      </div>
    </div>
  );
}
