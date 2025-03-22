import PostList from "@/components/PostList/PostList";

export default function Home() {

  return (
    <main className="h-screen grid grid-cols-3 ">
      <h1 className="text-4xl">Welcome to Reddit Clone</h1>
      <p className="text-lg">This is a Reddit clone built with Next.js and Tailwind CSS.</p>
      <div className="col-start-2 col-end-3">
        <PostList />
      </div>
    </main>
  );
}
