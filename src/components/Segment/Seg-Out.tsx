import { motion } from "framer-motion";

export default function SegOut() {
    return(
        <div className="w-full h-[30em] flex flex-col justify-center items-center lg:flex-row gap-4" data-aos="fade-left" id="out">
            <div className="w-full md:w-[60%] h-full flex justify-center items-center">
                <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[90%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        video
                    </motion.div>
                </div>
            </div>    
            <div className="w-full md:w-[60%] h-full flex justify-around items-center">
                <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[90%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6 gap-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <h2 className="font-semibold text-md md:text-xl">Outros segmentos</h2>
                        <p className="text-sm xl:text-lg">
                            Nossa plataforma, completa e versátil, atende diversos segmentos, oferecendo uma ampla gama de soluções para empresas que buscam praticidade e padronização na comunicação. Com uma interface intuitiva e funcionalidades avançadas, a E-movee é a escolha ideal para organizações que desejam otimizar seus processos de comunicação interna e externa. 
                        </p>
                        <p className="text-sm xl:text-lg">
                            Se sua empresa busca uma solução completa para melhorar a comunicação e aumentar a eficiência operacional, temos a plataforma ideal. Descubra como nossas soluções podem transformar a maneira como você comunica e engaja seu público, proporcionando resultados excepcionais.
                        </p>
                    </motion.div>
                </div>
            </div>    
        </div>    )
}