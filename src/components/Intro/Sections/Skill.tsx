import { SkillProp } from "@/types";

export default function Skill({ skills }: { skills: SkillProp[] }) {
  return (
    <section id="skills" className="flex flex-col gap-y-4 text-slate-400">
      <h2 className="text-white">Skills</h2>
      <div className="grid grid-cols-1 gap-y-4">
        {skills.map((skill: SkillProp) => (
          <div
            key={skill.name}
            className="grid grid-cols-1 gap-2 md:grid-cols-[minmax(150px,150px)_1fr]"
          >
            <div>
              <h3 className="font-medium text-white">{skill.name}</h3>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              {skill.skill.map((s, i) => (
                <div
                  key={i}
                  className="h-fit rounded-full bg-yellow-500/10 px-2 py-1 text-xs text-yellow-400"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
