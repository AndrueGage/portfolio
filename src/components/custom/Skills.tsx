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
  JavaScript: { src: JavaScript, alt: "JavaScript Icon", name: "JavaScript" },
  ReactIcon: { src: ReactIcon, alt: "React Icon", name: "React" },
  NextJS: { src: NextJS, alt: "NextJS Icon", name: "Next.js" },
  TailwindCss: { src: TailwindCss, alt: "TailwindCSS Icon", name: "Tailwind" },
  MySql: { src: MySql, alt: "MySQL Icon", name: "MySQL" },
  MongoDB: { src: MongoDB, alt: "MongoDB Icon", name: "MongoDB" },
  Typescript: { src: Typescript, alt: "Typescript Icon", name: "TypeScript" },
  Angular: { src: Angular, alt: "Angular Icon", name: "Angular" },
  CSS: { src: CSS, alt: "CSS Icon", name: "CSS" },
  GraphQL: { src: GraphQL, alt: "GraphQL Icon", name: "GraphQL" },
  HTML: { src: HTML, alt: "HTML Icon", name: "HTML" },
  NodeJS: { src: NodeJS, alt: "NodeJS Icon", name: "Node.js" },
};

export default function Skills() {
  return (
    <Card className="lg:max-w-md rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl lg:text-4xl font-bold tracking-[0.025rem]">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {Object.entries(skills).map(([key, { src, alt, name }]) => (
            <div key={key} className="flex flex-col items-center">
              <div className="relative h-14 w-16 border bg-gradient rounded overflow-hidden mb-2">
                <Image
                  priority
                  src={src}
                  alt={alt}
                  layout="fill"
                  className="p-2"
                />
              </div>
              <span className="text-xs text-center">{name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
