import Image, { StaticImageData } from 'next/image';

interface SitesProps {
  image: StaticImageData;
  alt: string;
}

export const Sites = ({ image, alt }: SitesProps) => {
  return (
    <div className="w-fit p-[6px] border-2 border-solid border-blue-600 rounded-full hover:bg-blue-100 transition ">
      <Image src={image} alt={alt} width={19} height={19} />
    </div>
  );
};
