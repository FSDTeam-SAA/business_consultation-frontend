import Link from "next/link";
import Image from "next/image";
import { Calendar, MessageSquare } from "lucide-react";
import type { Post } from "@/lib/types";

interface BlogCardProps {
  post: Post;
  // slug: string;
  // tags: string;
  // comments: string;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={400}
          className="h-[200px] w-full object-cover"
        />
      </Link>
      <div className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="mb-2 text-2xl font-bold transition-colors hover:text-green-500">
            {post.title}
          </h2>
        </Link>
        <p className="mb-4 line-clamp-3 text-gray-700">{post.excerpt}</p>
        <div className="flex items-center justify-between">
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
        </div>
      </div>
    </div>
  );
}
