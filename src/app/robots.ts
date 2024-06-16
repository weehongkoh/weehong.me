import type { MetadataRoute } from "next";

export default function robots(): Readonly<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.weehong.me/sitemap.xml",
  };
}
