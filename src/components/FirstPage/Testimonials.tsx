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
        <div className="w-full min-h-[35em] flex flex-col lg:flex-row gap-14 items-center justify-center px-10">
            <div className="w-[90%] xl:w-[20%] h-full flex items-center justify-center" data-aos="fade-right">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet at laborum maiores autem non magni excepturi, architecto, dignissimos beatae natus qui aut temporibus eos, ratione assumenda nobis porro.
                    </p>
                </motion.div>
            </div>
            <div className="w-[90%] xl:w-[20%] h-full flex items-center justify-center" data-aos="fade-up">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus fugit, beatae consequatur, autem ipsa cum, commodi enim maxime ad molestiae deleniti temporibus voluptatum culpa error et veritatis officiis facere? Ipsum.
                    </p>
                </motion.div>
            </div>
            <div className="w-[90%] xl:w-[20%] h-full flex items-center justify-center" data-aos="fade-left">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus fugit, beatae consequatur, autem ipsa cum, commodi enim maxime ad molestiae deleniti temporibus voluptatum culpa error et veritatis officiis facere? Ipsum.
                    </p>
                </motion.div>
            </div>
        </div>   
    )
}