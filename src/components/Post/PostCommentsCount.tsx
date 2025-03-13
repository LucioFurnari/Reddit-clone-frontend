import { MessageCircle } from "lucide-react";

interface PostCommentsCountProps {
  commentsCount: number,
}

export default function PostCommentsCount({ commentsCount }: PostCommentsCountProps) {
  return (
    <div className="inline-block bg-slate-400/50 py-1 px-4 rounded-3xl">
      <div className="flex items-center">
        <MessageCircle className="inline-block" strokeWidth={1.5} size={20}/>
        <span className="pl-1 inline-block">{ commentsCount }</span>
      </div>
    </div>
  )
}