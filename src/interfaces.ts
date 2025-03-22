
export interface PostInterface {
  id: string,
  title: string,
  content?: string,
  createdAt: string,
  authorId: string,
  subredditId: string,
  karma: number,
  author: {
    username: string,
    id: string
  },
  subreddit: {
    name: string,
    id: string,
    iconUrl?: string
  },
  _count?: {
    comments: number
  }
};