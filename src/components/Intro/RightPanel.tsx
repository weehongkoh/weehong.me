import About from "@/components/Intro/Sections/About";
import Award from "@/components/Intro/Sections/Award";
import Experience from "@/components/Intro/Sections/Experience";
import Project from "@/components/Intro/Sections/Project";
import Reference from "@/components/Intro/Sections/Reference";
import Skill from "@/components/Intro/Sections/Skill";
import { ResumeProp } from "@/types";

export default function RightPanel({
  data,
}: {
  data: Pick<
    ResumeProp,
    "about" | "experiences" | "projects" | "awards" | "skills"
  >;
}) {
  return (
    <main className="flex flex-col gap-y-36 pt-36 lg:py-24">
      <About about={data.about} />
      <Experience experiences={data.experiences} />
      <Project projects={data.projects} />
      <Award awards={data.awards} />
      <Skill skills={data.skills} />
      <Reference />
    </main>
  );
}
