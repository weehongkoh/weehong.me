import type { PostProp } from "@/types/Post";

import Image from "next/image";
import Link from "next/link";
import readingDuration from "reading-duration";

export default function ArticleCard({ post }: Readonly<{ post: PostProp }>) {
  const readingTime =
    post &&
    readingDuration(post.content, {
      wordsPerMinute: 100,
      emoji: false,
    });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="shadow rounded-md overflow-hidden"
    >
      <article
        key={post.slug}
        className="flex flex-col items-start justify-between"
      >
        <div className="relative w-full">
          <Image
            src={post.metadata.image || "/images/logo.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt={post.metadata.title}
            className="aspect-[16/9] w-full bg-gradient-article object-contain sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl flex flex-col gap-y-4 p-4">
          <div className="flex items-center gap-x-4 text-xs">
            <span className="relative z-10 rounded-full bg-clover-300 px-3 py-1.5 font-medium text-black">
              {post.metadata.category}
            </span>
          </div>
          <div className="font-jetbrains flex justify-between items-center gap-x-4 text-mondo-500 text-sm">
            <time dateTime={post.metadata.publishedAt}>
              {post.metadata.publishedAt}
            </time>
            <span>{readingTime}</span>
          </div>
          <div className="relative flex flex-col gap-y-4">
            <h3 className="line-clamp-3 text-2xl text-clover-600 font-playfair font-bold leading-normal">
              {post.metadata.title}
            </h3>
            <p className="line-clamp-3 text-justify leading-6 text-black">
              {post.metadata.summary}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
