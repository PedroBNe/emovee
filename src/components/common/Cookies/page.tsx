'use client'

import React, { useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from "next/link";
import Cookie from "./Cookie";

export default function CookiePage() {
    const name = 'asdasf'
    const value = 'asdasdasdasda'

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    });
    
    const [ cookie, setCookie ] = React.useState(true);

    return(
        <span className="w-full fixed bottom-0 z-20 lg:z-0" data-aos="fade-up">
            {cookie && (
                <div className="w-full h-[15em] lg:h-[5em] bg-white flex justify-center items-center">
                    <div className="w-full lg:w-[80%] h-full flex flex-col lg:flex-row justify-center items-center gap-4">
                        <div className="w-[95%] lg:w-[50%] h-full flex flex-col justify-center items-center gap-2">
                            <h2 className="text-xl font-semibold">Aviso de cookies</h2>
                            <p className="text-sm lg:text-md text-center">
                                Este site utiliza cookies para personalizar sua Experiência de Usuário.
                            </p>
                        </div>
                        <div className="w-full lg:w-[50%] h-full flex flex-col lg:flex-row justify-center items-center gap-4 mb-4 lg:mb-0 font-bold"
                        >
                            <button 
                            onClick={() => { setCookie(false), Cookie({ name, value })  }}
                            className="w-[33vh] border-2 py-2 rounded-lg border-[#1e90ff] hover:bg-[#1e90ff] hover:text-white text-sm lg:text-md transition ease-in-out delay-100"
                            >
                                Aceitar
                            </button>
                            <button
                            className="w-[33vh] border-2 py-2 rounded-lg border-[#1e90ff] hover:bg-[#1e90ff] hover:text-white text-sm lg:text-md transition ease-in-out delay-100"
                            >
                                <Link href="/cookies">Definição de Cookie</Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </span>
    )
    
}