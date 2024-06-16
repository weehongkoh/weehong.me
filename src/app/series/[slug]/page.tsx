import type { Metadata } from "next/types";
import type { DirectusPostProp } from "@/types/Post";

import Divider from "@/components/Divider";
import Post from "@/components/Post";

const fetchSeries = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/series/${slug}?fields=title,summary,posts.*`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    }
  );

  return await res.json();
};

export async function generateMetadata({
  params,
}: Readonly<{ params: { slug: string } }>): Promise<Metadata | undefined> {
  const { data } = await fetchSeries(params.slug);

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

export default async function SeriesPost({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const { data } = await fetchSeries(params.slug);

  return (
    <main>
      <section id="about" className="px-4 py-8 mx-auto lg:max-w-[1366px]">
        <div className="flex flex-col justify-center items-center gap-y-8 md:min-h-[20rem]">
          <h1 className="font-bold text-4xl text-center md:text-6xl">
            {data.title}
          </h1>
          <p className="text-xl text-center max-w-[50rem] md:text-2xl">
            {data.summary}
          </p>
        </div>
      </section>
      <Divider>
        <h4 className="font-pangaia font-semibold text-3xl text-center text-mondo-600 md:text-3xl">
          Collections
        </h4>
      </Divider>
      <section id="series" className="px-4 py-8 mx-auto lg:max-w-[1366px]">
        <div>
          {data.posts.map((p: DirectusPostProp) => (
            <div
              key={p.id}
              className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 md:max-w-full md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <Post key={p.id} hyperlink={`/blog/${p.id}`} post={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
