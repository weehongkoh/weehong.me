"use client";

import { Suspense } from "react";
import Image from "next/image";

import rehypeToc from "@jsdevtools/rehype-toc";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import useSWR from "swr";

import Alert from "@/components/Alert";
import Blockquote from "@/components/Blockquote";
import Code from "@/components/Code";
import ImageSlider from "@/components/ImageSlider";
import Loader from "@/components/Loader";
import ReadingProgressIndicator from "@/components/ReadingProgressIndicator";
import Loading from "@/app/loading";

const fetchPost = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export default function Markdown({ slug }: Readonly<{ slug?: string }>) {
  const { data: { data: post } = {}, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/posts/${slug}`,
    fetchPost
  );

  const components = {
    code: Code,
    Image,
    blockquote: Blockquote,
    alert: Alert,
    imageslider: ImageSlider,
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loader message="Populating content ..." />}>
      {post && (
        <article className="max-w-full flex flex-col gap-y-4 prose prose-lg md:prose-base">
          <div className="flex justify-between">
            <div className="flex items-center font-jetbrains">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-4 h-4 w-4" />
              <time dateTime={post.date_created}>{post.date_created}</time>
            </div>
            {/**
            {Array.isArray(data) && (
              <div className="flex items-center font-jetbrains">
                <FontAwesomeIcon icon={faEye} className="mr-4 h-4 w-4" />
                {data[0].pageviews || 0}
              </div>
            )}
             */}
          </div>
          {post.category && (
            <div className="block">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-clover-300 px-3 py-1.5 font-medium text-black">
                  {post.category}
                </span>
              </div>
            </div>
          )}
          <div id="article-summary" className="flex flex-col gap-y-4">
            <h1>{post.title}</h1>
            <h2>{post.summary}</h2>
          </div>
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeToc]}
          >
            {post.content}
          </ReactMarkdown>
          <ReadingProgressIndicator />
        </article>
      )}
    </Suspense>
  );
}
