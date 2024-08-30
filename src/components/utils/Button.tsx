export default function Button({ children }: any) {
    return(
        <button className="transition w-fit text-slate-100 font-bold rounded-full p-3 px-6 bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
            { children }
        </button>
    )
}