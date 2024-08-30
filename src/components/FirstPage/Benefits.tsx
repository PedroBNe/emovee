import { motion } from "framer-motion";
import Image from "next/image";
import Verify from '@/assets/verify-icon.png';

export default function Benefits() {
    return(                    
        <div className="w-full min-h-[35em] flex flex-row gap-16 justify-center">
            <div className="w-[20%] flex items-center justify-center">
                <motion.div
                    className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex gap-2 ">
                        <Image src={Verify} alt="verify-icon" width={28} />
                        <h1 className="font-bold text-xl">
                            Agilidade e padronização
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        Uma solução que, além de automatizar o processo e aumentar e eficiência, garante que a comunicação seja igual em todas as unidades do seu negócio. 
                    </p>
                </motion.div>
            </div>
            <div className="w-[20%] flex items-center justify-center">
                <motion.div
                    className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex gap-2">
                        <Image src={Verify} alt="verify-icon" width={28} />
                        <h1 className="font-bold text-xl">
                            Experiência do cliente
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        Uma decisão rápida do cliente é crucial. Acelere o processo de tomada de decisão do seu cliente, melhorando sua experiência e aumentando a satisfação com seu serviço.
                    </p>
                </motion.div>
            </div>
            <div className="w-[20%] flex items-center justify-center">
                <motion.div
                    className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex gap-2">
                        <Image src={Verify} alt="verify-icon" width={28} />
                        <h1 className="font-bold text-xl">
                            Ofertas estratégias
                        </h1>
                    </div> 
                    <p className="text-center m-5">
                        Simplifique a programação das promoções e torne suas ofertas mais atraentes. Comunique suas ofertas de maneira eficaz e impactante, capturando a atenção do cliente de maneira eficiente.
                    </p>
                </motion.div>
            </div>
        </div>  
    )
}