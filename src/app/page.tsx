import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="p-10">
      <Navbar />
      <section>
        <div className="flex justify-between">
          <h1 className="text-4xl lg:text-6xl mb-4 font-extrabold">Andrue Desmarais</h1>
        </div>
        <div>
          <h2 className="font-black text-2xl">A Full Stack Developer</h2>
        </div>
      </section>
    </main>
  );
}
