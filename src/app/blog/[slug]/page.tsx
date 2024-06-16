import type { Metadata } from "next";

import Markdown from "@/components/Markdown";
import { DirectusPostProp } from "@/types/Post";

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
}: Readonly<{ params: { slug: string } }>): Promise<Metadata | undefined> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/posts/${params.slug}`
  );
  const { data }: { data: DirectusPostProp } = await res.json();

  if (!data) {
    return;
  }

  const {
    id,
    title,
    summary: description,
    tags: keywords,
    date_created,
    cover_image,
  } = data;

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
      publishedTime: date_created,
      url: `https://weehong.me/blog/${id}`,
      images: [
        {
          url: `${cover_image}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${cover_image}`],
    },
  };
}

export default async function Post({
  params,
}: Readonly<{ params: { slug: string } }>) {
  // const data = await getPageView(params.slug);

  return (
    <div className="px-4 py-8 mx-auto relative lg:max-w-[768px]">
      <Markdown slug={params.slug} />
    </div>
  );
}
