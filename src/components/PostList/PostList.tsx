import { PostInterface } from "@/interfaces";
import { fetchGeneralPosts, fetchSubscribedPosts } from "@/services/postService";
import Post from "../Post/Post";
import { cookies } from "next/headers";

export default async function PostList() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value; 

    if(!token) {
      const data = await fetchGeneralPosts();
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
      const data = await fetchSubscribedPosts(token);

      if (data.error) {
        throw new Error("Failed to fetch posts");
      }

      if (data.posts.length > 0) {
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