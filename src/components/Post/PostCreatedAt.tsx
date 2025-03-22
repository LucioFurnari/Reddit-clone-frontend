import { formatDistanceToNow } from "date-fns";

interface CreatedAtProps {
  createdAt: string,
}

export default function PostCreatedAt({ createdAt }: CreatedAtProps) {
  return (
    <span className="inline-block text-gray-500 text-sm">
      <span className="mx-1">•</span>
      {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
    </span>
  )
}