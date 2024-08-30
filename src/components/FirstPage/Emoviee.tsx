import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../utils/Button";

export default function Emoviee() {
    return(
        <div className="w-full h-[35em] flex flex-row gap-16 justify-center">
            <div className="w-[50%] flex justify-center items-center">
                <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <p>
                            Video
                        </p>
                    </motion.div>
                </div>
            </div>               
            <div className="w-[50%] flex justify-center items-center font-bold">
                <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
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