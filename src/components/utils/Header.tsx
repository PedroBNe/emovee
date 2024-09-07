export default function Header({ children }: any) {
    return(
        <div className="w-full flex justify-center items-center gap-2 my-12">
            <hr className="w-[20%] border-2 border-[#1E293B] rounded-full"/>
                <h2 className="font-bold text-md lg:text-2xl">
                    { children }
                </h2>
            <hr className="w-[20%] border-2 border-[#1E293B] rounded-full"/>
        </div>
    )
}