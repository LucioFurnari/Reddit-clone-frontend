import { PostInterface } from "@/interfaces";

import Post from "../Post/Post";

interface PostsListInterface {
  posts: PostInterface[] | []
}

export default async function PostList() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch posts");

    const data: PostsListInterface = await res.json();

    return (
      <section className="lg:mx-16">
        {
          data.posts.length > 0 ?
          (
            data.posts.map((post: PostInterface) => <Post key={post.id} post={post} />)
          ) : (
            <p>There are no posts at the moment</p>
          )
        }
      </section>
    )
  } catch {
    return <p>Failed to load posts. Please try again later.</p>
  }
};