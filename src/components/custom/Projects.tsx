import Image from "next/image"
import DB_easy from "/public/DB_easy.png"
import employee_manager from "/public/employee_manager.png"
import zestyClip from "/public/zestyClip.png"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"


const projects = {
    DB_easy: { src: DB_easy, alt: "A screenshot of the project homescreen,", url: "projects/DB-Easy", name: "Dog Boarding Easy" },
    employee_manager: { src: employee_manager, alt: "a screenshot from my employee manager project", url: "projects/employee-tracker", name: "Employee Tracker" },
    zestyClip: { src: zestyClip, alt: "a screenshot of the zestybytes homescreen", url: "projects/Zesty-Bytes", name: "Zesty Bytes" }
};



export default function Projects() {
    return (
        <>
            <Card className="lg:max-w-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-xl tracking-[0.025rem] lg:text-4xl font-bold">Projects</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 rounded-lg">
                        {Object.entries(projects).map(([key, { src, alt, url, name }]) => (
                            <div key={key} className="relative">
                                <div className="relative bg-gradient hover:border-neutral-400 duration-[0.3] transition-all border rounded overflow-hidden">
                                    <Link href={url} target="_blank">
                                        <Image src={src}
                                            alt={alt}
                                            className="lg:w-full lg:h-[200px]"
                                        />
                                        <span className="text-md flex justify-center">{name}</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}