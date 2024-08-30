export default function Header({ children }: any) {
    return(
        <div className="w-full flex justify-center items-center gap-2">
            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
                <h2 className="font-bold text-2xl">
                    { children }
                </h2>
            <hr className="w-[30%] border-2 border-[#1E293B] rounded-full"/>
        </div>
    )
}