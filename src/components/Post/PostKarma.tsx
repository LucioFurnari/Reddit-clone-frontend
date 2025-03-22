import { ArrowBigDown, ArrowBigUp } from "lucide-react";

interface PostKarmaProps {
  karma: number,
}

export default function PostKarma({ karma }: PostKarmaProps) {
  return (
    <div className="inline-block mr-4">
      <div className="flex items-center bg-gray-800 rounded-3xl">
        <button className="px-1 py-1 hover:bg-slate-400/30 hover:text-orange-600 rounded-3xl">
          <ArrowBigUp strokeWidth={1.8} size={20} />
        </button>
        <span className="text-sm">{karma}</span>
        <button className="px-1 py-1 hover:bg-slate-400/30 hover:text-blue-500 rounded-3xl">
          <ArrowBigDown strokeWidth={1.8} size={20}/>
        </button>
      </div>
    </div>
  )
}