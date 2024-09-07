import { motion } from "framer-motion";

export default function SegAta() {
    return(
        <div className="w-full h-[30em] flex flex-col justify-center items-center lg:flex-row gap-4" data-aos="fade-left" id="out">
            <div className="w-full md:w-[60%] h-full flex justify-center items-center">
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
            <div className="w-full md:w-[60%] h-full flex justify-around items-center">
                <div className="w-[95%] xl:w-[85%] h-[95%] lg:h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <h2 className="font-semibold text-md md:text-xl">Atacarejos</h2>
                        <p className="text-sm xl:text-lg">
                            Nossas ferramentas também são voltadas para os atacarejos, que crescem cada vez mais no Brasil. Por meio de uma plataforma intuitiva, permitimos uma gestão completa das ofertas, desde a criação até o acompanhamento, garantindo que as promoções sejam sempre precisas, atraentes e alinhadas com as estratégias de estoque e marketing. 
                        </p>
                    </motion.div>
                </div>
            </div>    
        </div>
    )
}