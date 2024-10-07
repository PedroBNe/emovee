import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const gradientVariants = {
  gradient1: { background: 'linear-gradient(to right, #00A000, #BE0000)' },
  gradient2: { background: 'linear-gradient(to right, #BE0000, #969673)' },
  gradient3: { background: 'linear-gradient(to right, #969673, #808000)' },
  gradient4: { background: 'linear-gradient(to right, #808000, #800080)' },
  gradient5: { background: 'linear-gradient(to right, #800080, #008080)' },
  gradient6: { background: 'linear-gradient(to right, #008080, #000080)' },
};

export default function Banner({ children }: any) {
  const [currentGradient, setCurrentGradient] = useState('gradient1');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentGradient((prev) => {
        const gradientKeys = Object.keys(gradientVariants);
        const currentIndex = gradientKeys.indexOf(prev);
        return gradientKeys[(currentIndex + 1) % gradientKeys.length];
      });
    }, 2000); // Altere o gradiente a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <motion.div
        className="w-full h-[13em] lg:h-[25em] text-white flex flex-col justify-center pl-[30px] lg:pl-[65px] shadow-2xl mb-12 rounded-b-[50px]"
        variants={gradientVariants}
        animate={currentGradient}
        transition={{ duration: 2 }}
      >
        <h1 className="text-2xl lg:text-5xl font-bold" data-aos="fade-right">
          {children}
        </h1>
      </motion.div>
    </div>
  );
}
