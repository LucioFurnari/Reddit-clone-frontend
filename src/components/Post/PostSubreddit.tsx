import Image from "next/image"

interface PostSubredditProps {
  name: string,
  iconUrl?: string
}

export default function PostSubreddit({...props}: PostSubredditProps) {
  return (
    <div className="mb-2 inline-block">
      {
        props.iconUrl ?
        <Image src={props.iconUrl} width={10} height={10} alt={`r/${props.name}`}  /> :
        <span>{props.name[0]}</span>
      }
      <span className="ml-2 text-sm">r/{props.name}</span>
    </div> 
  )
}