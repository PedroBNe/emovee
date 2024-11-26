import Atac from '@/assets/homecent';
import { motion } from 'framer-motion';

export default function SegAta() {
  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center lg:flex-row gap-8"
      id="ata"
      data-aos="fade-right"
    >
      <div className="w-full md:w-[60%] h-full flex justify-center items-center">
        <div
          className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center"
          data-aos="fade-right"
        >
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
            <Atac width={50} height={50} />
            <h2 className="font-semibold text-xl md:text-2xl">Atacarejos</h2>
            <p className="text-md xl:text-lg">
              Nossas ferramentas também são voltadas para os atacarejos, que crescem cada vez mais no Brasil. Por meio
              de uma plataforma intuitiva, permitimos uma gestão completa das ofertas, desde a criação até o
              acompanhamento, garantindo que as promoções sejam sempre precisas, atraentes e alinhadas com as
              estratégias de estoque e marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
