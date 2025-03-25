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
  
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error}
  }
}