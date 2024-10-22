import Elec from '@/assets/elec';
import { motion } from 'framer-motion';

export default function SegElec() {
  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center lg:flex-row gap-8"
      data-aos="fade-right"
      id="elec"
    >
      <div className="w-full md:w-[60%] h-full flex justify-center items-center">
        <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center">
          <div className="w-[100%] h-[100%] rounded-lg flex flex-col gap-5 items-center justify-center text-start p-6">
            <Elec />
            <h2 className="font-semibold text-xl md:text-2xl">Eletromóveis</h2>
            <p className="text-md lg:text-xl">
              Produtos de alto valor agregado requerem uma abordagem estratégica e cuidadosa para convencer o consumidor
              e acelerar o processo de tomada de decisão. É essencial destacar não apenas os benefícios tangíveis, mas
              também os intangíveis que esses produtos proporcionam. Uma comunicação eficaz deve evidenciar a qualidade,
              a inovação e o valor único que diferenciam esses produtos no mercado.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[60%] h-full flex justify-around items-center">
        <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col justify-center items-center">
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
