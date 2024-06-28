import { ExperienceProp } from "@/types";

export default function Experience({
  experiences,
}: {
  experiences: ExperienceProp[];
}) {
  return (
    <section id="experience" className="flex flex-col gap-y-4 text-slate-400">
      <h2 className="text-white">Experiences</h2>
      <div className="flex flex-col gap-10">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="grid gap-2 md:grid-cols-[minmax(150px,150px)_1fr] md:gap-4"
          >
            <div>
              <p className="text-sm">
                {new Date(experience.from).getFullYear()} &#8212;{" "}
                {experience.to
                  ? new Date(experience.to).getFullYear()
                  : "CURRENT"}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-medium text-white">
                {experience.role}
                <span className="px-2">&#8226;</span>
                {experience.company}
              </h3>
              <div>
                {experience.descriptions.blocks.map((block, j) => (
                  <p key={j} className="text-sm">
                    {block.data.text}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="inline-block rounded-full bg-yellow-500/10 px-2 py-1 text-xs text-yellow-400"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
