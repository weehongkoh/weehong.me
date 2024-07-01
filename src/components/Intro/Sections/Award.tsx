import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AwardProp } from "@/types";

export default function Award({ awards }: { awards: AwardProp[] }) {
  return (
    <section id="award" className="flex flex-col gap-y-4 text-slate-400">
      <h2 className="text-white">Awards</h2>
      <div className="grid grid-cols-1 gap-y-4">
        {awards.map((award) => (
          <div key={award.name} className="flex gap-x-2">
            <div className="flex flex-col gap-x-3">
              <span className="text-sm">
                {new Date(award.at).getFullYear()}
              </span>
              <a href={award.url} target="_blank" className="flex items-center">
                <h3 className="text-sm text-white">
                  {award.name}
                  <FontAwesomeIcon className="ml-3 h-3 w-3" icon={faLink} />
                </h3>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
