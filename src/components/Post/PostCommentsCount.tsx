
interface PostCommentsCountProps {
  commentsCount: number,
}

export default function PostCommentsCount({ commentsCount }: PostCommentsCountProps) {
  return (
    <div>
      { commentsCount }
    </div>
  )
}