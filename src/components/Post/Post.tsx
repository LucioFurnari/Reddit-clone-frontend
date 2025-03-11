import { PostInterface } from "@/interfaces"

export default function Post({post}: { post: PostInterface}) {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-2xl text-left font-semibold text-white">{post.title}</h2>
      <p className="text-slate-300">{post.content}</p>
    </div>
  )
}