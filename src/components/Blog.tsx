"use client";

import type { DirectusPostProp } from "@/types/Post";

import useSWR from "swr";

import Loading from "@/app/loading";
import Post from "@/components/Post";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

const EmptyData = () => {
  return (
    <div className="my-24 text-3xl text-center font-bold">
      No Content Publish
    </div>
  );
};

export default function Blog() {
  const { data: { data: post } = {}, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/posts`,
    fetcher
  );

  console.log("Post: ", post);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !post && !Array.isArray(post)) {
    return <EmptyData />;
  }

  return (
    <div className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 md:max-w-full md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {post &&
        post.length > 0 &&
        post
          .filter((d: DirectusPostProp) => !d.is_series)
          .sort(
            (a: DirectusPostProp, b: DirectusPostProp) =>
              new Date(b.date_created).getTime() -
              new Date(a.date_created).getTime()
          )
          .map((d: DirectusPostProp) => (
            <Post
              key={d.id}
              hyperlink={`/blog/${d.id}`}
              post={post.find((p: DirectusPostProp) => p.id === d.id)}
            />
          ))}
    </div>
  );
}
