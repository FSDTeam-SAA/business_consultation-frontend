export interface Post {
  _id: string | number;
  title: string;
  excerpt: string;
  content?: string;
  slug?: string;
  createdAt: string;
  authorName: string;
  tags?: string[];
  image: string;
  description: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  name?:string
  content: string;
  date: string;
}
