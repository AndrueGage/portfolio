import Image from "next/image"
import Angular from "/public/Angular.svg"
import JavaScript from "/public/JavaScript.svg"
import MongoDB from "/public/MongoDB.svg"
import MySql from "/public/MySQL.svg"
import NextJS from "/public/NextJS.svg"
import ReactIcon from "/public/ReactIcon.svg"
import TailwindCss from "/public/TailwindCSS.svg"
import Typescript from "/public/Typescript.svg"
import CSS from "/public/CSS.svg"
import GraphQL from "/public/GraphQL.svg"
import HTML from "/public/HTML.svg"
import NodeJS from "/public/NodeJS.svg"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"

const skills = {
  JavaScript: { src: JavaScript, alt: "JavaScript Icon" },
  ReactIcon: { src: ReactIcon, alt: "React Icon" },
  NextJS: { src: NextJS, alt: "NextJS Icon" },
  TailwindCss: { src: TailwindCss, alt: "TailwindCSS Icon" },
  MySql: { src: MySql, alt: "MySQL Icon" },
  MongoDB: { src: MongoDB, alt: "MongoDB Icon" },
  Typescript: { src: Typescript, alt: "Typescript Icon" },
  Angular: { src: Angular, alt: "Angular Icon" },
  CSS: { src: CSS, alt: "CSS Icon", text: "CSS" },
  GraphQL: { src: GraphQL, alt: "GraphQL Icon" },
  HTML: { src: HTML, alt: "HTML Icon" },
  NodeJS: { src: NodeJS, alt: "NodeJS Icon" },
};

export default function Skills() {
  return (
    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl lg:text-4xl mb-8 font-extrabold">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(skills).map(([key, { src, alt }]) => (
              <div key={key} className="relative h-16 w-16"> 
                <Image
                  priority
                  src={src}
                  alt={alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}



{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([key, { src, alt }]) => (
          <div key={key} className="bg-gradient p-6 rounded-lg shadow-md flex items-center justify-center h-32 object-contain">
            <div className=" h-16 w-16 relative">
              <Image priority src={src} alt={alt} layout="fill" objectFit="contain" />
            </div>
          </div>
        ))}
      </div> */}
