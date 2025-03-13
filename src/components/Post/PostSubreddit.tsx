import Image from "next/image"

interface PostSubredditProps {
  name: string,
  iconUrl?: string
}

export default function PostSubreddit({...props}: PostSubredditProps) {
  return (
    <div>
      {
        props.iconUrl ?
        <Image src={props.iconUrl} alt={`r/${props.name}`}  /> :
        <span>{props.name[0]}</span>
      }
      <span className="ml-2">{props.name}</span>
    </div> 
  )
}