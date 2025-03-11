import Post from "../Post/Post";

interface PostInterface {
  id: string,
  title: string,
  content?: string,
  createdAt: string,
  authorId: string,
  subredditId: string,
  karma: number,
}

interface PostsListInterface {
  posts: PostInterface[] | []
}

export default async function PostsContainer() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch posts");

    const data: PostsListInterface = await res.json();

    return (
      <section>
        {
          data.posts.length > 0 ?
          (
            data.posts.map((post: PostInterface) => <Post key={post.id} title={post.title} />)
          ) : (
            <p>There are no posts at the moment</p>
          )
        }
      </section>
    )
  } catch (error) {
    return <p>Failed to load posts. Please try again later.</p>
  }
};