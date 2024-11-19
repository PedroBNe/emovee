'use client';

import Image from 'next/image';
import WhatsApp from '@/assets/whats-button.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function WhatsButton() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(!pathname.startsWith('/dashboard'));
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed block bottom-[20px] right-[20px] rounded-full p-2 shadow-2xl bg-white hover:opacity-80 cursor-pointer transition">
      <Link href="">
        <Image src={WhatsApp} alt="button-contact" width={50} height={50} />
      </Link>
    </div>
  );
}
