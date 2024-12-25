import Image from "next/image";
import bg from "/public/background/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Projects() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-48 flex flex-col items-center justify-center">
          <div className="absolute w-full h-fit flex flex-col gap-6 items-center text-center left-1/2 -translate-x-1/2">
            <h1 className="font-bold text-6xl text-accent whitespace-nowrap">Projects</h1>
            <p className="font-light text-foreground text-ls">All the projects I have built in chronological order. Some are incomplete, some are just practice exercises, and I&#039;m proud of all of them!</p>
          </div>
        </div>

        <ProjectList projects={projectsData} />
      </div>

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-24 h-screen -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
