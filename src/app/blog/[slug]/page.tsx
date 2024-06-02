import type { Metadata } from "next";

import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rehypeToc from "@jsdevtools/rehype-toc";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import Loader from "@/components/Loader";
import Code from "@/components/Code";
import ReadingProgressIndicator from "@/components/ReadingProgressIndicator";
import Series from "@/components/Series";
import { getPosts } from "@/utils/post";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import Blockquote from "@/components/Blockquote";
import rehypeRaw from "rehype-raw";
import Alert from "@/components/Alert";

const getPageView = async (slug: string) => {
  const property = [
    {
      property: "pathname",
      operator: "is",
      value: `/blog/${slug}`,
    },
  ];

  const res = await fetch(
    `https://api.usefathom.com/v1/aggregations?entity=pageview&entity_id=CSXXLBJF&aggregates=pageviews&filters=${JSON.stringify(
      property
    )}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${process.env.FATHOM_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    }
  );

  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = await getPosts(params.slug)?.[0];

  if (!post) {
    return;
  }

  const { title, summary: description, tags: keywords } = post.metadata;

  return {
    title,
    description,
    keywords,
    authors: {
      url: process.env.NEXT_PUBLIC_URL,
      name: "Vernon Wee Hong KOH",
    },
    robots: "index, follow",
    metadataBase: new URL("https://weehong.me"),
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.metadata.publishedAt,
      url: `https://weehong.me/blog/${post.slug}`,
      images: [
        {
          url: post.metadata.coverImage!,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.metadata.coverImage!],
    },
  };
}

export default async function Post({
  params,
}: Readonly<{ params: { slug: string } }>) {
  // const data = await getPageView(params.slug);
  const post = getPosts(params.slug)?.[0];

  if (!post) {
    notFound();
  }

  const components = {
    code: Code,
    Image,
    blockquote: Blockquote,
    alert: Alert,
  };

  return (
    <Suspense fallback={<Loader message="Populating content ..." />}>
      <div className="px-4 py-8 mx-auto relative lg:container">
        <article className="max-w-full flex flex-col gap-y-4 prose prose-lg md:prose-base">
          <div className="flex justify-between">
            <div className="flex items-center font-jetbrains">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-4 h-4 w-4" />
              <time dateTime={post.metadata.publishedAt}>
                {post.metadata.publishedAt}
              </time>
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
          {post.metadata.category && (
            <div className="block">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-clover-300 px-3 py-1.5 font-medium text-black">
                  {post.metadata.category}
                </span>
              </div>
            </div>
          )}
          <div id="article-summary" className="flex flex-col gap-y-4">
            <h1>{post.metadata.title}</h1>
            <h2>{post.metadata.summary}</h2>
          </div>
          {post.metadata.series && <Series posts={post.metadata.series} />}
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeToc]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
      <ReadingProgressIndicator />
    </Suspense>
  );
}
