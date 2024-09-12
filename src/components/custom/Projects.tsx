import Image from "next/image"
import DB_easy from "../../../public/DB_easy.png"
import employee_manager from "../../../public/employee_manager.png"
import zestyClip from "../../../public/zestyClip.png"
import Link from "next/link"


const projects = {
    DB_easy: { src: DB_easy, alt: "A screenshot of the project homescreen,", url:"projects/DB-Easy" },
    employee_manager: { src: employee_manager, alt: "a screenshot from my employee manager project", url:"projects/employee-tracker" },
    zestyClip: { src: zestyClip, alt: "a screenshot of the zestybytes homescreen", url: "projects/Zesty-Bytes" }
};


export default function Projects() {
    return (
        <section id="projects" className="mt-4">
            <h1 className="text-4xl lg:text-6xl mb-4 mt-8 font-extrabold">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(projects).map(([key, { src, alt, url }]) => (
                    <div key={key} className="relative w-full h-60 rounded-lg shadow-md">
                        <Link href={url} target="_blank">
                        <Image priority src={src} alt={alt} layout="fill" objectFit="fill" className="rounded-lg" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}