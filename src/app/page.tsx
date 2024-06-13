import {DarkModeToggle} from "@/components/ui/darkmode-toggle"


export default function Home() {
  return (
   <main className="p-10">
    <div className="flex justify-between">
    <h1 className="font-black text-3xl">Andrue Desmarais</h1>
    <DarkModeToggle />
    </div>
    <div>
    <h2 className="font-black text-2xl">A Full Stack Developer</h2>
    </div>
   </main>
  );
}
