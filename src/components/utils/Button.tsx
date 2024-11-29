export default function Button({ children }: any) {
  return (
    <button className="transition w-fit text-botoes-text font-bold rounded-full py-3 sm:py-4 px-4 sm:px-7 botoes hover:opacity-80 items-center">
      {children}
    </button>
  );
}
