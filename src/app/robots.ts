import type { MetadataRoute } from "next";

export default function robots(): Readonly<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/medium.weehong.me/", "/blog.weehong.me/"],
      allow: "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
