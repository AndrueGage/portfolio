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
      <Card className="lg:max-w-md">
        <CardHeader>
          <CardTitle className="text-xl lg:text-4xl font-extrabold">Skills</CardTitle>
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
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
  );
}

