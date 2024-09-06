import { motion } from "framer-motion";

export default function SegAta() {
    return(
        <div className="w-full h-[30em] flex flex-row" data-aos="fade-right" id="ata">
            <div className="w-[50%] flex justify-center items-center">
                <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl p-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <h2 className="font-semibold text-xl">Atacarejos</h2>
                        <p>
                            Nossas ferramentas também são voltadas para os atacarejos, que crescem cada vez mais no Brasil. Por meio de uma plataforma intuitiva, permitimos uma gestão completa das ofertas, desde a criação até o acompanhamento, garantindo que as promoções sejam sempre precisas, atraentes e alinhadas com as estratégias de estoque e marketing. 
                        </p>
                    </motion.div>
                </div>
            </div>    
            <div className="w-[50%] flex justify-center items-center">
                <div className="w-[75%] h-[70%] flex flex-col gap-5 justify-center items-center">
                    <motion.div
                        className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <p>
                            video
                        </p>
                    </motion.div>
                </div>
            </div>    
        </div>
    )
}