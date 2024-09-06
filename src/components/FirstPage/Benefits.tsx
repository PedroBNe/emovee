import { motion } from "framer-motion";
import Image from "next/image";
import Verify from '@/assets/verify-icon.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Benefits() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return(                    
        <div className="w-full min-h-[35em] flex flex-col lg:flex-row gap-14 items-center justify-center px-10">
            <div className="w-[90%] xl:w-[20%] flex items-center justify-center" data-aos="fade-right">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl pt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={Verify} alt="verify-icon" width={28} height={28} />
                        <h1 className="font-bold text-lg">
                            Agilidade e padronização
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        Uma solução que, além de automatizar o processo e aumentar e eficiência, garante que a comunicação seja igual em todas as unidades do seu negócio. 
                    </p>
                </motion.div>
            </div>
            <div className="w-[90%] xl:w-[20%] flex items-center justify-center" data-aos="fade-up">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl pt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={Verify} alt="verify-icon" width={28} height={28} />
                        <h1 className="font-bold text-lg">
                            Experiência do cliente
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        Uma decisão rápida do cliente é crucial. Acelere o processo de tomada de decisão do seu cliente, melhorando sua experiência e aumentando a satisfação com seu serviço.
                    </p>
                </motion.div>
            </div>
            <div className="w-[90%] xl:w-[20%] flex items-center justify-center" data-aos="fade-left">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl pt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={Verify} alt="verify-icon" width={28} height={28} />
                        <h1 className="font-bold text-lg">
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