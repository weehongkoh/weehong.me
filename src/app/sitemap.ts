import { MetadataRoute } from "next";

import { getPosts } from "@/utils/post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = process.env.NEXT_PUBLIC_URL;
  const allPosts = await getPosts();

  const home = {
    url: `${domain}/`,
    lastModified: new Date().toString(),
  };

  const routes = ["", "blog"].map((route) => ({
    url: `${domain}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  if (!allPosts || allPosts.length === 0) return [home];

  const posts = allPosts.map((post) => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt.toString(),
  }));

  return [...routes, ...posts];
}
