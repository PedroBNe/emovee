import Image, { StaticImageData } from 'next/image';

interface SitesProps {
  image: StaticImageData;
  alt: string;
}

export const Sites = ({ image, alt }: SitesProps) => {
  return (
    <div className="w-fit p-[6px] border-2 border-solid botoes-background bg-black rounded-full transition">
      <Image src={image} alt={alt} width={19} height={19} />
    </div>
  );
};
