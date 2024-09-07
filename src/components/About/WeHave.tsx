import { motion } from "framer-motion";
import Image from "next/image";
import Vision from '@/assets/vision.png';
import Values from '@/assets/values.png';
import Mission from '@/assets/mission.png';

export default function WeHave() {
    return(
        <div className="w-full min-h-[35em] flex flex-col lg:flex-row gap-14 items-center justify-center px-10">
            <div className="w-[90%] xl:w-[20%] h-full flex items-center justify-center" data-aos="fade-right">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[320px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex flex-col gap-2 justify-center items-center m-2">
                        <Image src={Mission} alt="mission-icon" width={40} height={40} />
                        <h1 className="font-bold text-lg xl:text-xl">
                            Missão
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        Utilizar o avanço tecnológico para simplificar processos, aumentar a produtividade e reduzir custos operacionais, impulsionando o crescimento e a expansão dos nossos clientes.
                    </p>
                </motion.div>
            </div>
            <div className="w-[90%] xl:w-[20%] flex items-center justify-center" data-aos="fade-up">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[320px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >                     
                    <div className="flex flex-col gap-2 justify-center items-center m-2">
                        <Image src={Vision} alt="vision-icon" width={40} height={40} /> 
                        <h1 className="font-bold text-lg xl:text-xl">
                            Visão
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        Ser reconhecidos como líderes no mercado de soluções digitais, oferecendo uma interface intuitiva e funcionalidades avançadas que promovem agilidade e precisão na gestão de operações.
                    </p>
                </motion.div>
            </div>
            <div className="w-[90%] xl:w-[20%] flex items-center justify-center" data-aos="fade-left">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[320px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >                           
                    <div className="flex flex-col gap-2 justify-center items-center m-2">
                        <Image src={Values} alt="value-icon" width={40} height={40} />
                        <h1 className="font-bold text-lg xl:text-xl">
                            Valores
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        Temos o compromisso de entregar soluções de alta qualidade, enquanto buscamos continuamente a inovação e desempenhamos o papel de parceiro estratégico dos nossos clientes.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}