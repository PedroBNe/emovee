import { motion } from "framer-motion";
import Button from "../utils/Button";
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function CardLink() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return(
        <div className="w-full min-h-[35em] flex flex-row gap-16 justify-center">
            <div className="w-[70%] flex justify-center items-center font-bold">
                <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center" data-aos="fade-up">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <p className="text-center m-5">
                            texto
                        </p>
                        <Link href="/fale-especialista">
                            <Button>
                                Fale com um Especialista
                            </Button>   
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div> 
    )
}