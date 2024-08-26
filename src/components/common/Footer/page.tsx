import Link from 'next/link';
import { Sites } from './Sites';
import Instagram from '@/assets/social-insta.png'
import Linkedin from '@/assets/social-linkedin.png'
import WhatsApp from '@/assets/social-whatsapp.png'
import Email from '@/assets/social-email.png'
import Location from '@/assets/location.png'
import Logo from '@/assets/logo-white.png'
import { Images } from './Images';
import { Information } from './Information';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-800 min-h-40 flex flex-col justify-between text-slate-300">
            <div className="flex flex-row gap-1 justify-around py-4 px-5">
                <div className='hover:opacity-60'>
                    <Link href='/inicio'>
                        <Image src={Logo} alt='logo-emove' />
                    </Link>
                </div>
                <div>
                    <ul className='flex flex-col gap-3'>
                        <li className='hover:opacity-60'>
                            <Link href="/inicio">
                                Inicio
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href='/sobre'>
                                Sobre
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href=''>
                                Servicos
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href=''>
                                Suporte
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col pb-1'>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <Images image={WhatsApp} alt='whatsapp' text="Telefone:" />
                            <Link href=""><Information text="numero"/></Link>
                        </div>
                        <div>
                            <Images image={Email} alt='email' text="E-mail:" />
                            <Link href=""><Information text="emails"/></Link>
                        </div>
                        <div>
                            <Images image={Location} alt='location' text="Localizacao" />
                            <Link href=""><Information text="rua tal"/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='pb-1'>
                        Nossas Redes:
                    </p>
                    <div className='flex flex-row justify-around'>
                        <Link href=""><Sites image={Instagram} alt='instagram' /></Link>
                        <Link href=""><Sites image={Linkedin} alt='linkedin' /></Link>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p>&copy; 2024 E-movee todos os direitos reservados</p>
            </div>
        </footer>
    );
};
