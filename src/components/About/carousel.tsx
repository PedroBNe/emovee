import Image from "next/image"
import Link from "next/link"

interface CarouselPageProps {
  title: string
}

export const CarouselPage = ({ title }: CarouselPageProps) => {
  return (
    <div className="mt-2">
      <div>
        <h2 className="ml-2 text-xl font-black">{title}</h2>
      </div>
      <div>
        <ul className="flex px-[10px] w-full py-2 overflow-x-scroll whitespace-nowrap list-none scroll-p-12 scrollbar-none">
          <li className="relative inline-block w-[calc((100vw_-_216px)_/_7.25)] h-[calc(((((100vw_-_216px)_/_7.25)_-_4px)_*_0.5617977528089888)_+_4px)] flex-shrink-0">
            <Link href="/" className="flex rounded-[10px] border-2 border-solid border-transparent transition relative w-full h-full mr-1">
              <Image src="" width={230} height={150} alt="1" className="absolute w-full h-full transition rounded-lg" />
            </Link>
          </li>
        </ul>
      </div>
    </div >
  )
}

