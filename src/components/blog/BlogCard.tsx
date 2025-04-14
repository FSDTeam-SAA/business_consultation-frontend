import Link from "next/link";
import Image from "next/image";
// import { Calendar, MessageSquare } from "lucide-react";
import type { Post } from "@/lib/types";

interface BlogCardProps {
  post: Post;
  // slug: string;
  // tags: string;
  // comments: string;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-md">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={600}
            height={400}
            className="h-[200px] w-full object-cover duration-300 hover:scale-105"
          />
        </Link>
        <div className="absolute right-[16px] top-[12px] min-h-[50px] min-w-[50px] rounded-[2px] bg-[#09B850]">
          <p className="mt-1 p-2 text-center text-lg leading-5 text-white">
            {post.date.split(",")[0]}
            {<br />} {post.date.split(",")[1]}
          </p>
        </div>
        <div className="py-6">
          <p className="my-2 text-[#595959]">
            By <span>{post.author}</span>
          </p>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="mb-2 text-2xl font-bold transition-colors hover:text-green-500">
              {post.title}
            </h2>
          </Link>
          <p className="mb-4 line-clamp-3 text-gray-700">{post.excerpt}</p>
          {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-green-500">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{post.date}</span>
          </div>
          <Link
            href={`/blog/${post.slug}#comments`}
            className="flex items-center gap-1 text-gray-500 transition-colors hover:text-green-500"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{post?.comments?.length} Comments</span>
          </Link>
        </div> */}

          <div className="mt-4 flex h-[45px] w-[151px] items-center justify-center rounded-[8px] border border-[#09B850]">
            <Link href={`/blog/${post.slug}`}>
              <button className="mb-1 text-[#09B850]">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
