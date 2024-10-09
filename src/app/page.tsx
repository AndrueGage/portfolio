import { getCommitHistory } from "@/fetchers"
import About from "@/components/custom/About"
import CommitCard from "@/components/custom/CommitCard"
import Projects from "@/components/custom/Projects"
import Skills from "@/components/custom/Skills"

export default async function Page() {
  const response = await getCommitHistory();
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap sm:items-start sm:justify-center gap-4 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-full">
        <div className="sm:col-span-2 lg:col-span-2 flex flex-col">
          <About />
          <div className="flex flex-col lg:flex-row gap-4 motion-preset-slide-up motion-duration-1000 motion-ease-spring-bouncier">
            <CommitCard data={response} className="flex-1" />
            <div className="motion-preset-slide-up motion-duration-2000 motion-ease-spring-bouncier">
              <Skills />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col motion-preset-slide-left motion-duration-1500  motion-ease-spring-bouncier">
          <Projects />
        </div>
      </div>
    </div>
  );
}
