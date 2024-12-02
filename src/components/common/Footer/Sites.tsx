import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface SitesProps {
  image: StaticImageData;
  alt: string;
  color: iconsColors[];
}

interface iconsColors {
  name: string;
  default: string;
  text?: string;
}

export const Sites = ({ image, alt, color }: SitesProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const borderColor = color?.[0]?.text || '#000000'; // Fallback to black
  const backgroundColor = isHovered ? color?.[0]?.text || '#000000' : color?.[0]?.default || '#000000';

  return (
    <div
      className="w-fit p-[6px] border-2 border-solid rounded-full transition"
      style={{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt={alt} width={19} height={19} />
    </div>
  );
};
