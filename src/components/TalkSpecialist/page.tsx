'use client'

import Image from "next/image";
import Banner from "../utils/BannerTop";
import FormInterface from "../utils/Form";
import WhatsApp from '@/assets/whats-button.png'
import Email from '@/assets/email-media.png'
import Insta from '@/assets/insta-media.png'
// import Link from "next/link";

export default function Specialist() {
    return(
        <div className="relative w-full min-h-[115vh]">
            <Banner>Entre em Contato!</Banner>
            <div className="w-[40%] absolute right-0 top-40">
                <FormInterface />
            </div>
            <div className="w-[60%] min-h-[50vh] flex flex-col gap-3 items-center mt-10" data-aos="fade-right">
                <h2 className="text-xl font-bold">Nossa equipe sempre a postos!</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Image src={WhatsApp} alt='whats-icon' width={20} />WhatsApp
                    </div>
                    <div className="flex gap-2">
                        <Image src={Email} alt='whats-icon' width={20} />Email
                    </div>
                    <div className="flex gap-2">
                        <Image src={Insta} alt='whats-icon' width={20} />Instagram
                    </div>
                    <div>
                        <p className="font-semibold">Nossos horarios de funcionamento:</p>
                        <p>Horarios</p>
                    </div>
                    <div>
                        <p className="font-semibold">Endereco:</p>
                        <p>endereco</p>
                    </div>
                    <div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5946.610424963373!2d-48.55423345806331!3d-27.597382620183385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739822cdb22b3%3A0xec7a45661537149d!2sTerminal%20rodovi%C3%A1rio%20de%20Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1725289110847!5m2!1spt-BR!2sbr" 
                            width="600" 
                            height="450" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}