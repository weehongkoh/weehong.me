import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DownloadResume from "@/components/Intro/DownloadResume";
import { ResumeProp } from "@/types";

export default function LeftPanel({ data }: { data: ResumeProp }) {
  return (
    <header className="pt-8 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-y-3">
        <h1>{data.name}</h1>
        <h2>{data.role}</h2>
        <p className="max-w-sm text-slate-400">{data.summary}</p>
        <div>
          <DownloadResume data={data} />
        </div>
      </div>
      <div className="mt-5 flex gap-x-5">
        {data.social_media.map((social) => (
          <a key={social.field} href={social.url} target="_blank">
            <FontAwesomeIcon
              className="h-6 w-6"
              icon={social.field === "github" ? faGithub : faYoutube}
            />
          </a>
        ))}
      </div>
    </header>
  );
}
