import Link from "next/link";
import Image from "next/image";
// import { Calendar, MessageSquare } from "lucide-react";
import type { Post } from "@/lib/types";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  console.log(post);
  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-md">
        <Link href={`/blog/${post?.slug}`}>
          <Image
            src={post.image || ""}
            alt={post.title}
            width={600}
            height={400}
            className="h-[200px] w-full object-cover duration-300 hover:scale-105"
          />
        </Link>
        <div className="absolute right-4 top-3 flex min-h-[50px] min-w-[50px] items-center justify-center rounded bg-[#09B850] px-2 py-1">
          <p className="text-center text-sm leading-tight text-white">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
            })}
            <br />
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
            })}
          </p>
        </div>
        <div className="py-6">
          <div className="flex justify-between">
            <p className="my-2 text-[#595959]">
              By <span>{post.authorName}</span>
            </p>
            <div className="flex gap-2 items-center">
              <Calendar />
              <p>
                {post?.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Unknown Date"}
              </p>
            </div>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="mb-2 text-2xl font-bold transition-colors hover:text-green-500">
              {post.title}
            </h2>
          </Link>
          <p className="mb-4 line-clamp-3 text-gray-700">{post.excerpt}</p>
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
