import type { Metadata } from "next/types";

import Series from "@/components/Series";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Series | Vernon Wee Hong KOH",
  description:
    "A series is a collection of posts divided into different parts to make reading easier.",
  keywords: [
    "software",
    "software engineer",
    "developer",
    "engineer",
    "article",
    "series",
    "post",
    "weehong",
    "wee hong",
    "wee hong koh",
    "vernon",
    "vernon koh",
    "vernon wee hong koh",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://weehong.me"),
  openGraph: {
    title: "Series | Vernon Wee Hong KOH",
    description:
      "A series is a collection of posts divided into different parts to make reading easier.",
    url: `https://weehong.me/series`,
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Series | Vernon Wee Hong KOH",
    description:
      "A series is a collection of posts divided into different parts to make reading easier.",
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
};

export default async function SeriesPost() {
  return (
    <main>
      <section id="about" className="px-4 py-8 mx-auto lg:max-w-[1366px]">
        <div className="flex flex-col justify-center items-center gap-y-8 md:min-h-[20rem]">
          <h1 className="font-bold text-4xl text-center md:text-6xl">Series</h1>
          <p className="text-xl text-center max-w-[50rem] md:text-2xl">
            A series is a collection of posts divided into different parts to
            make reading easier
          </p>
        </div>
      </section>
      <section id="series" className="px-4 py-8 mx-auto lg:max-w-[1366px]">
        <Divider>
          <h2 className="font-pangaia font-semibold text-3xl text-center text-mondo-600 md:text-5xl">
            Tutorial
          </h2>
        </Divider>
        <Series />
      </section>
    </main>
  );
}
