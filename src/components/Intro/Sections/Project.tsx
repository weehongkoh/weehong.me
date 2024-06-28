import { ProjectProp } from "@/types";
import { splitNewLine, stripHtmlTags } from "@/utils";

export default function Project({ projects }: { projects: ProjectProp[] }) {
  return (
    <section id="project" className="flex flex-col gap-y-4 text-slate-400">
      <h2 className="text-white">Projects</h2>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-y-2">
            <h3 className="font-medium text-white">{project.name}</h3>
            {splitNewLine(stripHtmlTags(project.description)).map(
              (p, index) => (
                <p key={index} className="text-sm">
                  {p}
                </p>
              ),
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <div
                  key={i}
                  className="flex rounded-full bg-yellow-500/10 px-2 py-1 text-xs text-yellow-400"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
