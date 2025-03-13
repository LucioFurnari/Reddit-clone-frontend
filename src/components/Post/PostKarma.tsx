
interface PostKarmaProps {
  karma: number,
}

export default function PostKarma({ karma }: PostKarmaProps) {
  return (
    <div>
      <button>-</button>
      <span>{karma}</span>
      <button>+</button>
    </div>
  )
}