import Image from "next/image"
import Link from "next/link"


export interface BlogPost {
    id: number
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    image: string
  }
  
interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white max-w-[370px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
      <div className="relative h-48 w-full">
  <Image
    src={post.image || "/placeholder.svg"}
    alt={post.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
    priority={false}
  />
</div>
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded text-center">
          <div>{post.date.split(" ")[0]}</div>
          <div>{post.date.split(" ")[1]}</div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-600 mb-2">
          By {post.author} | {post.category}
        </div>

        <h3 className="text-lg font-semibold mb-2">
          <Link href="#" className="hover:text-green-500 transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>

        <Link
          href="#"
          className="inline-block text-green-500 border border-green-500 px-4 py-2 rounded-md text-sm hover:bg-green-500 hover:text-white transition-colors"
        >
          Read More
        </Link>
      </div>
    </article>
  )
}

