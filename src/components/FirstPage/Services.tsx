import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../utils/Button";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Services() {
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
                    <p className="font-bold text-lg">
                        Cartazeamento
                    </p>
                    <p className="text-center m-5">
                        Em poucos cliques, crie e imprima cartazes promocionais atrativos, que despertem desejo nos consumidores. 
                    </p>
                    <Link href="/cartazeamento">
                        <Button>
                            Saiba mais
                        </Button>    
                    </Link>                          
                </motion.div>
            </div>                  
            <div className="w-[90%] xl:w-[20%] h-full flex items-center justify-center" data-aos="fade-up">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <p className="font-bold text-lg">
                        Gestão de ofertas
                    </p>
                    <p className="text-center m-5">
                        De maneira ágil e simplificada, gerencie e organize seu calendário promocional.
                    </p>
                    <Link href="/gestao-ofertas">
                        <Button>
                            Saiba mais
                        </Button>    
                    </Link>                          
                </motion.div>
            </div>                  
            <div className="w-[90%] xl:w-[20%] h-full flex items-center justify-center" data-aos="fade-left">
                <motion.div
                    className="w-[100%] sm:w-[50%] lg:w-full h-[290px] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <p className="font-bold text-lg">
                        Tablóides
                    </p>
                    <p className="text-center m-5">
                        texto
                    </p>
                    <Link href="/tabloides">
                        <Button>
                            Saiba mais
                        </Button>    
                    </Link>                          
                </motion.div>
            </div>                  
        </div>     
    )
}