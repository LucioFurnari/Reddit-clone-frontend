import { PostInterface } from "@/interfaces";

import Post from "../Post/Post";
import { cookies } from "next/headers";

interface PostsListInterface {
  posts: PostInterface[] | []
}

export default async function PostList() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value; 

    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/subscribed`, {
    //   cache: "no-store",
    // });
    if (!token) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        cache: "no-store",
      });
      const data: PostsListInterface = await res.json();
      return (
        <section>
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
    };

    if (token) {
      // 2️⃣ Fetch user data using the token
      const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        headers: { Cookie: `token=${token}` },
        cache: "no-store",
        credentials: "include"
      });
      console.log(userRes.status)
      if (userRes.ok) {
        // 3️⃣ Fetch posts from user's subscribed subreddits
        const postsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/subscribed`, {
          cache: "no-store",
          credentials: "include"
        });
        console.log(postsRes.status)
        if (!postsRes.ok) throw new Error("Failed to fetch posts");

        if (postsRes.ok) {
          const data = await postsRes.json();
          return (
            <section>
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
        }
      } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        cache: "no-store",
      });
      const data: PostsListInterface = await res.json();
      return (
        <section>
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
      };
    };

    // const data: PostsListInterface = await res.json()
  } catch {
    return <p>Failed to load posts. Please try again later.</p>
  }
};