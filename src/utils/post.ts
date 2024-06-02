import fs from "fs";
import yaml from "js-yaml";
import path from "path";

import { Metadata } from "@/types/Metadata";
import { trimString } from "@/utils/remove-space";

const parseMDXContent = (fileContent: string) => {
  const regex = /---\s*([\s\S]*?)\s*---/;
  const metadata: Partial<Metadata> = {};

  const match = fileContent.match(regex);
  const content = fileContent.replace(regex, "").trim();

  const frontMatter = match ? match[1] : "";

  frontMatter
    .trim()
    .split("\n")
    .forEach((pair) => {
      const [key, ...arr] = pair.split(":");
      if (key === "series") {
        const series = yaml.load(frontMatter) as Metadata;
        metadata["series"] = series["series"];
      } else if (key === "category") {
        metadata["category"] = arr[0].trim();
      } else if (key === "tags") {
        metadata["tags"] = arr
          .join(": ")
          .split(",")
          .map((t) => trimString(t));
      } else {
        const value = arr
          .join(": ")
          .trim()
          .replace(/^['"](.*)['"]$/, "$1");
        metadata[
          key.trim() as keyof Omit<Metadata, "series" | "category" | "tags">
        ] = value;
      }
    });

  return {
    metadata: metadata as Metadata,
    content,
  };
};

const getAllMDXFiles = (dir: string) => {
  return fs
    .readdirSync(dir, "utf-8")
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
      const { metadata, content } = parseMDXContent(rawContent);
      const slug = path.basename(file, path.extname(file));
      return {
        slug,
        metadata,
        content,
      };
    });
};

export const getPosts = (filter?: string | null, limit?: number) => {
  let posts = getAllMDXFiles(path.join(process.cwd(), "src/data"));

  if (limit === -1) {
    return null;
  }

  if (limit && limit > 0) {
    posts = posts.slice(0, limit);
  }

  if (filter) {
    posts = posts.filter((post) => post.slug === filter);
  }

  return posts;
};
