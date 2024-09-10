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
        <footer className="w-full bg-slate-800 min-h-40 flex flex-col gap-6 justify-between text-slate-300">
            <div className="flex flex-col lg:flex-row gap-8 justify-around items-start sm:items-start m-4 py-4 px-5">
                <div className='hover:opacity-60'>
                    <Link href='/inicio'>
                        <Image src={Logo} alt='logo-emove' width={200} height={200} />
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
                            <Link href='/segmentos'>
                                Servicos
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href='/fale-especialista'>
                                Suporte
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href='/politicas-privacidade'>
                                Politicas de Privacidade
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href='/cookies'>
                                Aviso de Cookies
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href='/solicitacao-de-privacidade'>
                                Solicitação de Privacidade
                            </Link>
                        </li>
                        <li className='hover:opacity-60'>
                            <Link href='/termos-de-uso'>
                                Termos de Uso
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
            <div className="text-center text-sm sm:text-md">
                <p>&copy; 2024 E-movee todos os direitos reservados</p>
            </div>
        </footer>
    );
};
