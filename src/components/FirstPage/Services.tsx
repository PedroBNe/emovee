import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../utils/Button";

export default function Services() {
    return(                    <div className="w-full min-h-[35em] flex flex-row gap-16 justify-center">
        <div className="w-[20%] flex items-center justify-">
            <motion.div
                className="w-[100%] h-[60%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <h1 className="font-bold text-xl">
                    Cartazeamento
                </h1>
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
        <div className="w-[20%] flex items-center justify-center">
            <motion.div
                className="w-[100%] h-[60%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <p className="font-bold text-xl">
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
        <div className="w-[20%] flex items-center justify-center">
            <motion.div
                className="w-[100%] h-[60%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <p className="font-bold text-xl">
                    Tablóides
                </p>
                <p className="text-center m-5">
                    Frase
                </p>
                <Link href="/tabloides">
                    <Button>
                        Saiba mais
                    </Button>    
                </Link>                          
            </motion.div>
        </div>                  
    </div>     )
}