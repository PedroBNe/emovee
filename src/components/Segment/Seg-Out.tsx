import { motion } from "framer-motion";

export default function SegOut() {
    return(
        <div className="w-full h-[30em] flex flex-row">
            <div className="w-[50%] flex justify-center items-center">
                <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <h2 className="font-semibold text-xl">Outros segmentos</h2>
                        <p>
                            Nossa plataforma, completa e versátil, atende diversos segmentos, oferecendo uma ampla gama de soluções para empresas que buscam praticidade e padronização na comunicação. Com uma interface intuitiva e funcionalidades avançadas, a E-movee é a escolha ideal para organizações que desejam otimizar seus processos de comunicação interna e externa. 
                        </p>
                        <p>
                            Se sua empresa busca uma solução completa para melhorar a comunicação e aumentar a eficiência operacional, temos a plataforma ideal. Descubra como nossas soluções podem transformar a maneira como você comunica e engaja seu público, proporcionando resultados excepcionais. 
                        </p>
                    </motion.div>
                </div>
            </div>    
            <div className="w-[50%] flex justify-around items-center">
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
        </div>
    )
}