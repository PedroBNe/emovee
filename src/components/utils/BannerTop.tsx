import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Banner({ children }: any) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return(
        <div className="w-full h-[10em] lg:h-[20em] bg-[#1e65ff] text-white flex flex-col justify-center pl-6 shadow-xl mb-12">
            <h1 className="text-xl lg:text-5xl font-bold" data-aos="fade-right">{ children }</h1>
        </div>
    )
}