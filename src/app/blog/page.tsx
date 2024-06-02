import type { Metadata } from "next/types";
import type { PostProp } from "@/types/Post";

import { getPosts } from "@/utils/post";
import Blog from "@/components/Blog";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Blog | Vernon Wee Hong KOH",
  description:
    "Vernon Wee Hong KOH is a software engineer. This is the space where he shares his thoughts, insights, and experiences in the form of articles.",
  keywords: [
    "software",
    "software engineer",
    "developer",
    "engineer",
    "article",
    "blog",
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
    title: "Post | Vernon Wee Hong KOH",
    description:
      "Vernon Wee Hong KOH is a software engineer. This is the space where he shares his thoughts, insights, and experiences in the form of articles.",
    url: `https://weehong.me/blog`,
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post | Vernon Wee Hong KOH",
    description:
      "Vernon Wee Hong KOH is a software engineer. This is the space where he shares his thoughts, insights, and experiences in the form of articles.",
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
};

export default function Post() {
  const posts: PostProp[] | null =
    getPosts()?.sort((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
      );
    }) || null;
  return (
    <main>
      <section id="about" className="px-4 py-8 mx-auto lg:container">
        <div className="flex flex-col justify-center items-center gap-y-8 md:min-h-[20rem]">
          <h1 className="font-bold text-4xl text-center md:text-6xl">Blog</h1>
          <p className="text-xl text-center max-w-[50rem] md:text-2xl">
            This is the space where I share my thoughts, insights, and
            experiences in the form of articles.
          </p>
        </div>
      </section>
      {posts && (
        <section id="blog" className="px-4 py-8 mx-auto lg:container">
          <Divider>
            <h2 className="font-pangaia font-semibold text-3xl text-center text-mondo-600 md:text-5xl">
              Write Up
            </h2>
          </Divider>
          <Blog posts={posts} />
        </section>
      )}
    </main>
  );
}
