import Image from "next/image"
import DB_easy from "../../../public/DB_easy.png"
import employee_manager from "../../../public/employee_manager.png"
import zestyClip from "../../../public/zestyClip.png"

const projects = {
    DB_easy: { src: DB_easy, alt: "A screenshot of the project homescreen," },
    employee_manager: { src: employee_manager, alt: "a screenshot from my employee manager project" },
    zestyClip: { src: zestyClip, alt: "a screenshot of the zestybytes homescreen" }
};


export default function Projects() {
    return (
        <section id="projects" className="mt-4">
            <h1 className="text-4xl lg:text-6xl mb-4 font-extrabold">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(projects).map(([key, { src, alt }]) => (
                    <div key={key} className="relative w-full h-60 rounded-lg shadow-md">
                        <Image priority src={src} alt={alt} layout="fill" objectFit="fill" className="rounded-lg" />
                    </div>
                ))}
            </div>
        </section>
    )
}