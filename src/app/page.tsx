// import Picture from "@/components/custom/Image"
// move layout to page.tsx (this will be a server component that has client components in it api call fed as prop to chart component)

import About from "@/components/custom/About"
import CommitCard from "@/components/custom/CommitCard"
import Projects from "@/components/custom/Projects"
import Skills from "@/components/custom/Skills"
import { Contact } from "lucide-react"

export const description = "A collection of health charts."

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/commits/', { cache: 'no-cache' });
  const chartData = await response.json();
  return (

    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap sm:items-start sm:justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-2 sm:grid-cols-2 lg:w-full lg:grid-cols-3 xl:max-w-[100%] flex-col">
        
        <About />

        <Projects />

        <Skills />

        <div>
          <CommitCard data={chartData} />
        </div>
        {/* <Contact /> */}
      </div>
    </div>
  )
}

