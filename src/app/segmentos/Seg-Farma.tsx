import Pharma from '@/assets/pharma';
import { motion } from 'framer-motion';

export default function SegFarma() {
  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center lg:flex-row gap-4"
      data-aos="fade-left"
      id="farma"
    >
      <div className="w-full md:w-[60%] h-full flex justify-center items-center">
        <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center">
          <motion.div
            className="w-[90%] h-[40vh] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Imagem
          </motion.div>
        </div>
      </div>
      <div className="w-full md:w-[60%] h-full flex justify-around items-center">
        <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center">
          <div className="w-[100%] h-[100%] rounded-lg flex flex-col gap-5 items-center justify-center text-start p-6">
            <Pharma width={50} height={50} />
            <h2 className="font-semibold text-xl md:text-2xl">Farmácia</h2>
            <p className="text-md lg:text-xl">
              Na indústria farmacêutica, maximizar a eficiência das operações é essencial para proporcionar um serviço
              rápido e excelente aos clientes. Reconhecendo a importância de manter a autonomia dos funcionários e
              reduzir o tempo dedicado à gestão do ponto de venda (PDV), apresentamos soluções integradas e abrangentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
