import Image from "next/image";
import WhatsApp from '@/assets/whats-button.png'
import Link from "next/link";

export default function WhatsButton() {
    return(
        <div className="fixed right-0 mr-10 p-[10px] rounded-full bg-white w-fit hover:opacity-70 cursor-pointer">
            <Link href=""><Image src={WhatsApp} alt='button-contact' width={60} /></Link>
        </div>
    )
}