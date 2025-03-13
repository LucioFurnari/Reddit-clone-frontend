import { PostInterface } from "@/interfaces"
import PostSubreddit from "./PostSubreddit"

export default function Post({post}: { post: PostInterface}) {
  const { title, content } = post;
  const { name, iconUrl } = post.subreddit;

  return (
    <div className="flex flex-col w-full px-4 py-2 border-t-[1px] border-gray-400/30">
      <PostSubreddit name={name} iconUrl={iconUrl} />
      <h2 className="text-2xl text-left font-semibold text-white">{title}</h2>
      <p className="text-slate-300">{content}</p>
    </div>
  )
}