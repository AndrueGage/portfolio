import Picture from "@/components/custom/Image"


export default function Home() {
  return (
    <section className="flex items-center">
    <div className="flex-auto">
      <div className="flex justify-between">
        <h1 className="text-8xl mb-4 font-extrabold">Andrue Desmarais</h1>
      </div>
      <div>
        <h2 className="font-black text-4xl">A Full Stack Developer</h2>
      </div>
    </div>
    <div className="flex-auto">
      <Picture />
    </div>
  </section>
);
}
