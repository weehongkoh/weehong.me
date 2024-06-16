"use client";

import type { DirectusPostProp } from "@/types/Post";

import Link from "next/link";
import Image from "next/image";

import useSWR from "swr";

import Loading from "@/app/loading";

const fetchSeries = async (url: string) => {
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

export default function Series() {
  const { data: { data: series } = {}, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/series`,
    fetchSeries
  );

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !series && !Array.isArray(series)) {
    return <EmptyData />;
  }

  console.log("Series: ", series);

  return (
    <div className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 md:max-w-full md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {series &&
        series.length > 0 &&
        series
          .sort(
            (a: DirectusPostProp, b: DirectusPostProp) =>
              new Date(b.date_created).getTime() -
              new Date(a.date_created).getTime()
          )
          .map((s: DirectusPostProp) => (
            <Link
              key={s.id}
              href={`/series/${s.id}`}
              className="shadow rounded-md overflow-hidden"
            >
              <article
                key={s.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    src={s.post_image || "/images/logo.png"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={s.title}
                    className="aspect-[16/9] w-full bg-gradient-article object-contain sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col gap-y-4 p-4">
                  <div className="relative flex flex-col gap-y-4">
                    <h3 className="line-clamp-3 text-2xl text-clover-600 font-playfair font-bold leading-normal">
                      {s.title}
                    </h3>
                    <p className="line-clamp-3 text-justify leading-6 text-black">
                      {s.summary}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
    </div>
  );
}
