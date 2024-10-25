import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Emails() {
  return(
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Lista de E-mails</h2>
      <div className="w-full h-auto flex flex-col pb-10 items-center bg-white">
        <form className="w-full border-b p-4 flex justify-between items-center">
          <div className="w-[70%] text-center items-center flex gap-5">
            <p className="w-[10vw]">Filtrar de</p>
            <Input type="date" />
            <p className="w-[5vw]">até</p>
            <Input type="date" />
          </div>
          <div>
            <Button variant={"blue"}>Aplicar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
