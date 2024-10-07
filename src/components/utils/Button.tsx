export default function Button({ children }: any) {
  return (
    <button className="transition w-fit text-slate-100 font-bold rounded-full py-3 sm:py-4 px-4 sm:px-7 bg-[#1e90ff] hover:bg-[#1e65ff] items-center">
      {children}
    </button>
  );
}
