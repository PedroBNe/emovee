export default function Button({ children }: any) {
  return (
    <button className="transition w-fit text-slate-100 font-bold rounded-full py-3 sm:py-4 px-4 sm:px-7 bg-button hover:bg-opacity-80 items-center">
      {children}
    </button>
  );
}
