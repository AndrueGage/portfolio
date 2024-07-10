import Image from "next/image"
import Angular from "../../../public/Angular.svg" 
import JavaScript from "../../../public/JavaScript.svg"
import MongoDB from "../../../public/MongoDB.svg"
import MySql from "../../../public/MySQL.svg"
import NextJS from "../../../public/NextJS.svg"
import ReactIcon from "../../../public/React.svg"
import TailwindCss from "../../../public/TailwindCSS.svg"
import Typescript from "../../../public/Typescript.svg"
import { any } from "prop-types"

export default function Skills() {
    return (
        <section id="skills">
            <h1 className="text-4xl lg:text-6xl mb-4 font-extrabold">Skills</h1>
            <div>
            <Image
      priority
      src={JavaScript}
      alt="JavaScript Icon"
      width={100}
            />
            <Image
      priority
      src={NextJS}
      alt="Nextjs Icon"
      width={100}
            />
            </div>
        </section>
    )
}