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
    JavaScript: { src: JavaScript, alt: "JavaScript Icon", text: "JavaScript"},
    ReactIcon: { src: ReactIcon, alt: "React Icon", text: "React" },
    NextJS: { src: NextJS, alt: "NextJS Icon", text: "NextJS" },
    TailwindCss: { src: TailwindCss, alt: "TailwindCSS Icon", text: "TailwindCSS" },
    MySql: { src: MySql, alt: "MySQL Icon", text: "MySQL" },
    MongoDB: { src: MongoDB, alt: "MongoDB Icon", text: "MongoDB"},
    Typescript: { src: Typescript, alt: "Typescript Icon", text: "TypeScript" },
    Angular: { src: Angular, alt: "Angular Icon", text: "Angular" },
  };

  export default function Skills() {
    return (
      <section id="skills" className="p-4">
        <h1 className="text-4xl lg:text-6xl mb-8 font-extrabold text-center">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([key, { src, alt, text }]) => (
            <div key={key} className="bg-gradient p-6 rounded-lg shadow-md flex items-center justify-center h-32 object-contain">
             <div className=" h-16 w-16 relative">
              <Image priority src={src} alt={alt} layout="fill" objectFit="contain" />
            </div>
              <p className="ml-4 text-lg font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  