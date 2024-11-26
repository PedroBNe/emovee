import Market from '@/assets/market';
import { motion } from 'framer-motion';

export default function SegSup() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center lg:flex-row gap-8" data-aos="fade-right">
      <div className="w-full md:w-[60%] h-full flex justify-center items-center">
        <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center">
          <div className="w-[100%] h-[100%] rounded-lg flex flex-col gap-5 items-center justify-center text-start p-6">
            <Market width={50} height={50} />
            <h2 className="font-semibold text-xl md:text-2xl">Supermercados</h2>
            <p className="text-md lg:text-xl">
              Com inúmeros produtos disponíveis nas enormes e extensas prateleiras, os supermercados têm um papel
              essencial no ramo varejista. Fornecendo uma ampla gama de produtos para atender às necessidades cotidianas
              dos consumidores, esses estabelecimentos proporcionam comodidade e variedade.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[60%] h-full flex justify-around items-center">
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
    </div>
  );
}
