import { ArrowBigDown, ArrowBigUp } from "lucide-react";

interface PostKarmaProps {
  karma: number,
}

export default function PostKarma({ karma }: PostKarmaProps) {
  return (
    <div className="inline-block">
      <button>
        <ArrowBigUp strokeWidth={1.5} />
      </button>
      <span>{karma}</span>
      <button>
        <ArrowBigDown strokeWidth={1.5} />
      </button>
    </div>
  )
}