import { MessageCircle } from "lucide-react";

interface PostCommentsCountProps {
  commentsCount: number,
}

export default function PostCommentsCount({ commentsCount }: PostCommentsCountProps) {
  return (
    <div className="inline-block bg-gray-800 rounded-3xl">
      <div className="flex items-center px-4  py-1">
        <MessageCircle className="inline-block" strokeWidth={1.8} size={20}/>
        <span className="text-sm pl-1 inline-block px-1">{ commentsCount }</span>
      </div>
    </div>
  )
}