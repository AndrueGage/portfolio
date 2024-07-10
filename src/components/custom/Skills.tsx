import Image from "next/image"
import Angular from "../../../public/Angular.svg" 
import JavaScript from "../../../public/JavaScript.svg"
import MongoDB from "../../../public/MongoDB.svg"
import MySql from "../../../public/MySQL.svg"
import NextJS from "../../../public/NextJS.svg"
import ReactIcon from "../../../public/ReactIcon.svg"
import TailwindCss from "../../../public/TailwindCSS.svg"
import Typescript from "../../../public/Typescript.svg"

const skills = {
    JavaScript: { src: JavaScript, alt: "JavaScript Icon" },
    ReactIcon: { src: ReactIcon, alt: "React Icon" },
    NextJS: { src: NextJS, alt: "NextJS Icon" },
    TailwindCss: { src: TailwindCss, alt: "TailwindCSS Icon" },
    MySql: { src: MySql, alt: "MySQL Icon" },
    MongoDB: { src: MongoDB, alt: "MongoDB Icon" },
    Typescript: { src: Typescript, alt: "Typescript Icon" },
    Angular: { src: Angular, alt: "Angular Icon" },
  };

export default function Skills() {
    return (
        <section id="skills">
            <h1 className="text-4xl lg:text-6xl mb-4 font-extrabold">Skills</h1>
            <div className="flex justify-center">
        {Object.entries(skills).map(([key, { src, alt }]) => (
          <Image key={key} priority src={src} alt={alt} width={100} />
        ))}
      </div>
        </section>
    )
}