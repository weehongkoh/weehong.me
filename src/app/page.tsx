import type { PostProp } from "@/types/Post";

import Blog from "@/components/Blog";
import { getPosts } from "@/utils/post";
import Divider from "@/components/Divider";

export default function Home() {
  const posts: PostProp[] | null =
    getPosts()?.sort((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
      );
    }) || null;

  return (
    <main>
      <section id="about" className="px-4 py-8 mx-auto lg:container">
        <div className="flex flex-col justify-center items-center gap-y-8 md:min-h-[20rem]">
          <h1 className="font-pangaia font-bold text-4xl text-center md:text-6xl">
            Vernon Wee Hong KOH
          </h1>
          <p className="text-xl text-center max-w-[50rem] md:text-2xl">
            As a frontend and backend software engineer, I excel in hands-on
            learning and skill refinement through practical application.
          </p>
          <p className="text-xl text-center max-w-[50rem] md:text-2xl">
            I develop user-centric solutions and share my expertise through
            engaging articles, contributing to the tech community and staying
            informed about industry trends.
          </p>
          <p className="text-xl text-center max-w-[50rem] md:text-2xl">
            My goal is to deliver innovative software solutions and foster a
            collaborative, knowledge-sharing environment.
          </p>
        </div>
      </section>
      {posts && (
        <section id="blog" className="px-4 py-8 mx-auto lg:container">
          <Divider>
            <h2 className="font-pangaia font-semibold text-3xl text-center text-mondo-600 md:text-5xl">
              Blog
            </h2>
          </Divider>
          <Blog posts={posts.slice(0, 3)} />
        </section>
      )}
    </main>
  );
}
