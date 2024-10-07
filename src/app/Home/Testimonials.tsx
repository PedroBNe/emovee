import { motion } from 'framer-motion';
import Image from 'next/image';
import Quotam from '@/assets/quotation-marks.png';
import 'aos/dist/aos.css';
import Header from '@/components/utils/Header';

type Props = {
  id: number;
  title: string;
  subtitle: string;
};

const testimonials: Props[] = [
  {
    id: 0,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
  {
    id: 1,
    title: 'Comentario',
    subtitle:
      'non magni excepturi, architecto, dignissimos beatae natus qui aut temporibus eos, ratione assumenda nobis',
  },
  {
    id: 2,
    title: 'Comentario',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem',
  },
];

const CardTestimonials = ({ post }: any) => {
  return (
    <div className="w-[90%] xl:w-[20%] h-full flex items-center justify-center">
      <motion.div
        className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <div className="flex gap-2">
          <Image src={Quotam} alt="quotation-mark-icon" width={28} />
          <h1 className="font-bold text-xl">{post.title}</h1>
        </div>
        <p className="text-center m-5">{post.subtitle}</p>
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="w-full flex flex-col bg-gray-400 shadow-2xl rounded-[70px] my-8">
      <Header>Depoimentos</Header>
      <div className="w-full min-h-[40em] flex flex-col lg:flex-row gap-14 items-center justify-center px-10">
        {testimonials.map((post) => (
          <CardTestimonials key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
