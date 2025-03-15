import { ArrowBigDown, ArrowBigUp } from "lucide-react";

interface PostKarmaProps {
  karma: number,
}

export default function PostKarma({ karma }: PostKarmaProps) {
  return (
    <div className="inline-block mr-2">
      <div className="flex items-center bg-slate-400/50 py-1 rounded-3xl">
        <button className="px-1">
          <ArrowBigUp strokeWidth={1.5} size={20} />
        </button>
        <span>{karma}</span>
        <button className="px-1">
          <ArrowBigDown strokeWidth={1.5} size={20}/>
        </button>
      </div>
    </div>
  )
}