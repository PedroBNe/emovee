import { motion } from "framer-motion";
import Image from "next/image";
import Quotam from '@/assets/quotation-marks.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Testimonials() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return(                    
        <div className="w-full min-h-[35em] flex flex-row gap-16 justify-center">
            <div className="w-[20%] flex items-center justify-center" data-aos="fade-right">
                <motion.div
                    className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex gap-2">
                        <Image src={Quotam} alt="quotation-mark-icon" width={28} />
                        <h1 className="font-bold text-xl">
                            Comentario
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        texto
                    </p>
                </motion.div>
            </div>
            <div className="w-[20%] flex items-center justify-center" data-aos="fade-up">
                <motion.div
                    className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex gap-2">
                        <Image src={Quotam} alt="quotation-mark-icon" width={28} />
                        <h1 className="font-bold text-xl">
                            Comentario
                        </h1>
                    </div>
                    <p className="text-center m-5">
                        texto
                    </p>
                </motion.div>
            </div>
            <div className="w-[20%] flex items-center justify-center" data-aos="fade-left">
                <motion.div
                    className="w-[100%] h-[50%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="flex gap-2">
                        <Image src={Quotam} alt="quotation-mark-icon" width={28} />
                        <h1 className="font-bold text-xl">
                            Comentario
                        </h1>
                    </div> 
                    <p className="text-center m-5">
                        Texto
                    </p>
                </motion.div>
            </div>
        </div>   
    )
}