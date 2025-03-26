import { PostInterface } from "@/interfaces";
import { fetchGeneralPosts } from "@/services/postService";
import Post from "../Post/Post";
import { cookies } from "next/headers";

export default async function PostList() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value; 

    const data = await fetchGeneralPosts();

    if(!token) {
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

    if (token) {
      // 2️⃣ Fetch user data using the token
      // const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
      //   headers: { Cookie: `token=${token}` },
      //   cache: "no-store",
      //   credentials: "include"
      // });


        // 3️⃣ Fetch posts from user's subscribed subreddits
        const postsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/subscribed`, {
          headers: { Cookie: `token=${token}` },
          cache: "no-store",
          credentials: "include"
        });

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
    };

    // const data: PostsListInterface = await res.json()
  } catch {
    return <p>Failed to load posts. Please try again later.</p>
  }
};