'use client'

import Link from "next/link";
import SlideIn from "./SlideInPage";
import { motion } from "framer-motion";

export default function Exemple() {
    const text = "Seu texto aqui";
    const title = "Titulo";
    const video =  
    <Link href='https://youtu.be/zf96hDbXW_Q?si=FceH9DNKlNsPPGo8' target="_blank" className="shadow-2xl">
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/zf96hDbXW_Q?si=FceH9DNKlNsPPGo8" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        ></iframe>
    </Link>;
    const buttonEmovee =
    <button className="transition w-fit text-slate-100 font-bold rounded-full p-4 px-5 text-xl bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
        Sobre a E-movee
    </button>
    const button =
    <button className="transition w-fit text-slate-100 font-bold rounded-full p-4 px-5 text-xl bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
        Saiba mais
    </button>

    return (
        <div className="w-full min-h-[120em] flex flex-col">
            <SlideIn Content={
                <div className="w-full h-[50em] flex flex-row">
                <div className="w-[50%] flex justify-center items-center">
                    <SlideIn Content={video} />
                </div>               
                <div className="w-[50%] flex justify-center items-center font-bold">
                    <div className="w-[75%] h-[50%] flex flex-col gap-5 justify-center items-center">
                            <div className="text-4xl">
                                <SlideIn Content={title} />
                            </div>
                            <div>
                                <SlideIn Content={text} />
                            </div>
                            <SlideIn Content={buttonEmovee} />
                        </div>
                    </div>
                </div>
            } />
            <SlideIn Content={
                <div className="w-full h-[35em] flex flex-row gap-16 justify-center">
                    <div className="w-[20%] flex items-center justify-center">
                        <motion.div
                            className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <p className="font-bold text-xl">
                                CARTAZEAMENTO
                            </p>
                            <p>
                                texto
                            </p>
                            <p>
                                {button}
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-[20%] flex items-center justify-center">
                        <motion.div
                            className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <p className="font-bold text-xl">
                                GESTÃO DE OFERTAS
                            </p>
                            <p>
                                Frase
                            </p>
                            <p>
                                {button}
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-[20%] flex items-center justify-center">
                        <motion.div
                            className="w-[100%] h-[100%] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <p className="font-bold text-xl">
                                TABLOIDE
                            </p>
                            <p>
                                Frase
                            </p>
                            <p>
                                {button}
                            </p>
                        </motion.div>
                    </div>
                </div>            
            } />
        </div>
    );
}
