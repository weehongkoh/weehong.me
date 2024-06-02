import type { SeriesProp } from "@/types/Metadata";

import Link from "next/link";

const Part = (posts: Readonly<SeriesProp>) => {
  const components = [];

  for (const value of Object.values(posts)) {
    console.log("Value: ", posts);
    for (const [k, v] of Object.entries(value)) {
      components.push(
        <li key={v as string} className="my-0">
          <Link href={v} className="text-white">
            {k}
          </Link>
        </li>
      );
    }
  }

  return components;
};

export default function Series({ posts }: { posts: SeriesProp }) {
  return (
    <div className="p-4 rounded-t-md">
      <h3 className="list-series-title text-white mt-0">Series</h3>
      <ul className="list-series">
        <Part {...posts} />
      </ul>
    </div>
  );
}
