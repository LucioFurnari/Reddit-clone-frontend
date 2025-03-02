import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <h1 className="text-4xl">Welcome to Reddit Clone</h1>
      <p className="text-lg">This is a Reddit clone built with Next.js and Tailwind CSS.</p>
    </main>
  );
}
