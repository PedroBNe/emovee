import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../utils/Button";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Emovee() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);
    
    return(
        <div className="w-full min-h-[35em] flex flex-col lg:flex-row gap-14 items-center justify-center">
            <div className="w-full xl:w-[50%] h-full flex justify-center items-center">
                <div className="w-[85%] xl:w-[75%] lg:w-[85%] h-[400px] flex flex-col gap-5 justify-center items-center" data-aos="fade-right">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        video
                    </motion.div>
                </div>
            </div>           
            <div className="w-full xl:w-[50%] h-full flex justify-center items-center">
                <div className="w-[85%] xl:w-[75%] lg:w-[85%] h-[450px] sm:h-[400px] flex flex-col gap-5 justify-center items-center" data-aos="fade-left">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <h1 className="font-bold text-xl">
                            Conheça a E-moviee
                        </h1>
                        <p className="text-center m-5">
                            Fruto da busca pela otimização e eficiência, a E-moviee se insere no mercado com uma plataforma intuitiva capaz de simplificar processos e aumentar a produtividade e reduzir custos operacionais. Em um ambiente de negócios cada vez mais competitivo e dinâmico, a necessidade de ferramentas que proporcionem rapidez e precisão nas operações é imprescindível.
                        </p>
                        <Link href="/sobre">
                            <Button>
                                Sobre a E-movee
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}