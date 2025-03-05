import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-screen ">
      <Navbar />
      <h1 className="text-4xl">Welcome to Reddit Clone</h1>
      <p className="text-lg">This is a Reddit clone built with Next.js and Tailwind CSS.</p>
    </main>
  );
}
