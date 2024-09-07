import { motion } from "framer-motion";

export default function SegHome() {
    return(
        <div className="w-full h-[30em] flex flex-col justify-center items-center lg:flex-row gap-4" data-aos="fade-right" id="out">
            <div className="w-full md:w-[60%] h-full flex justify-center items-center">
                <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <h2 className="font-semibold text-md md:text-xl">Home Centers</h2>
                        <p className="text-sm xl:text-lg">
                            Dispondo de uma infinidade de produtos e marcas, no caso dos home centers, possuir uma comunicação assertiva e estratégica é extremamente essencial. Nosso software facilita a criação, gestão e atualização de cartazes promocionais, garantindo que as informações sobre ofertas e descontos sejam sempre precisas e visualmente impactantes.
                        </p>
                    </motion.div>
                </div>
            </div>    
            <div className="w-full md:w-[60%] h-full flex justify-around items-center">
                <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center">
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
        </div>
    )
}