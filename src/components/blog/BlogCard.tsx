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
    <div className="relative overflow-hidden rounded-md bg-white">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={400}
          className="h-[200px] w-full object-cover"
        />
      </Link>
      <div className="absolute w-[50px] h-[50px] bg-[#09B850] top-[12px] right-[16px] rounded-[2px]">
          <p className="text-lg text-white text-center leading-5 mt-1">{post.date}</p>
      </div>
      <div className="py-6">
        <p className="text-[#595959] my-2">By <span>{post.author}</span></p>
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

        <div className="w-[151px] h-[45px] rounded-[8px] border border-[#09B850] mt-4 flex justify-center items-center">
          <button className="text-[#09B850] mb-1">Read More</button>
        </div>
      </div>
    </div>
  );
}
