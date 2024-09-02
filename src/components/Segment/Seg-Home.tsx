import { motion } from "framer-motion";

export default function SegHome() {
    return(
        <div className="w-full h-[30em] flex flex-row">
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
            <div className="w-[50%] flex justify-center items-center">
                <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <h2 className="font-semibold text-xl">Home Centers</h2>
                        <p>
                            Dispondo de uma infinidade de produtos e marcas, no caso dos home centers, possuir uma comunicação assertiva e estratégica é extremamente essencial. Nosso software facilita a criação, gestão e atualização de cartazes promocionais, garantindo que as informações sobre ofertas e descontos sejam sempre precisas e visualmente impactantes.
                        </p>
                    </motion.div>
                </div>
            </div>    
        </div>
    )
}