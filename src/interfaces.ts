
export interface PostInterface {
  id: string,
  title: string,
  content?: string,
  createdAt: string,
  authorId: string,
  subredditId: string,
  karma: number,
  author: string,
  subreddit: string
};