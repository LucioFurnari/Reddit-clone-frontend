import { PostInterface } from "@/interfaces"
import { formatDistanceToNow } from "date-fns";
import PostSubreddit from "./PostSubreddit"
import PostKarma from "./PostKarma";
import PostCommentsCount from "./PostCommentsCount";

export default function Post({post}: { post: PostInterface}) {
  const { title, content, karma, createdAt } = post;
  const { comments } = post._count;
  const { name, iconUrl } = post.subreddit;

  return (
    <div className="w-full px-4 py-2 border-t-[1px] border-gray-400/30">
      <PostSubreddit name={name} iconUrl={iconUrl} />
      <span>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</span>
      <h2 className="text-2xl mb-2 text-left font-semibold text-white">{title}</h2>
      <p className="text-slate-300 mb-2">{content}</p>
      <PostKarma karma={karma} />
      <PostCommentsCount commentsCount={comments}  />
    </div>
  )
}