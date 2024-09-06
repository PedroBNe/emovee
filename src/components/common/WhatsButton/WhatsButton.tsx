import Image from "next/image";
import WhatsApp from '@/assets/whats-button.png'
import Link from "next/link";

export default function WhatsButton() {
    return(
        <div className="fixed block bottom-[20px] right-[20px] rounded-full p-2 shadow-2xl bg-white hover:opacity-80 cursor-pointer transition">
            <Link href=""><Image src={WhatsApp} alt='button-contact' width={50} height={50} /></Link>
        </div>
    )
}