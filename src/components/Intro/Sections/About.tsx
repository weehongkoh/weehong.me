import { splitNewLine, stripHtmlTags } from "@/utils";

export default function About({ about }: { about: string }) {
  return (
    <section id="about" className="flex flex-col gap-y-4 text-slate-400">
      <h2 className="text-white">About</h2>
      {splitNewLine(stripHtmlTags(about)).map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </section>
  );
}
