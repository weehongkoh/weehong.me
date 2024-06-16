import type { MetadataRoute } from "next";
import type { DirectusPostProp } from "@/types/Post";

const fetchPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/post?fields=id,date_created`,
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

const fetchSeries = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/series?fields=id,date_created`,
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

export default async function sitemap(): Promise<
  Readonly<MetadataRoute.Sitemap>
> {
  const domain = process.env.NEXT_PUBLIC_URL;
  const { data: allPosts } = await fetchPosts();
  const { data: allSeries } = await fetchSeries();

  const home = {
    url: `${domain}/`,
    lastModified: new Date().toString(),
  };

  const routes = ["", "blog", "series"].map((route) => ({
    url: `${domain}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  if (!allPosts || allPosts.length === 0) return [home];

  const posts = allPosts.map(
    (post: Pick<DirectusPostProp, "id" | "date_created">) => ({
      url: `${domain}/blog/${post.id}`,
      lastModified: post.date_created.split("T")[0],
    })
  );

  if (!allSeries || allSeries.length === 0) return [home];

  const series = allSeries.map((series: DirectusPostProp) => ({
    url: `${domain}/series/${series.id}`,
    lastModified: series.date_created.split("T")[0],
  }));

  return [...routes, ...posts, ...series];
}
