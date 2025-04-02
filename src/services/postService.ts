import { PostInterface } from "@/interfaces";

interface PostsListInterface {
  posts: PostInterface[] | []
}

export async function fetchGeneralPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      cache: "no-store",
    });
  
    const data: PostsListInterface = await res.json();
  
    return { posts: data.posts, error: null };
  } catch (error) {
    return { posts: [], error: error};
  }
};

export async function fetchSubscribedPosts(token: string) {

  try {
    const postsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/subscribed`, {
      headers: { Cookie: `token=${token}` },
      cache: "no-store",
      credentials: "include"
    });
    const data = await postsRes.json();

    return { posts: data.posts, error: null };
  } catch (error) {
    return { posts: [], error: error };
  }
}