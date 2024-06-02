import type { PostProp } from "@/types/Post";

import Post from "@/components/Post";

export default function Blog({ posts }: Readonly<{ posts: PostProp[] }>) {
  return (
    <div className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 md:max-w-full md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post: PostProp) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  );
}
