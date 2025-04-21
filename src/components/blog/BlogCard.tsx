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
      <div className="relative h-[610px] w-full overflow-hidden rounded-md p-4 shadow-[0px_0px_6px_0px_#00000040]">
        <Link href={`/blog/${post?.slug}`}>
          <Image
            src={post.image || ""}
            alt={post.title}
            width={600}
            height={400}
            className="h-[300px] w-full rounded-lg object-cover"
          />
        </Link>
        {/* <div className="absolute right-4 top-3 flex min-h-[50px] min-w-[50px] items-center justify-center rounded bg-[#09B850] px-2 py-1">
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
        </div> */}
        <div className="py-6">
          <div className="flex justify-between">
            <p className="my-2 text-[#595959]">
              By <span>{post.authorName}</span>
            </p>
            <div className="flex items-center gap-2">
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
              {post.title.split(" ").slice(0, 5).join(" ")}
              {post.title.split(" ").length > 5 && "..."}
            </h2>
            <p className="hover:text-green-500">
              {post.description.split(" ").slice(0, 30).join(" ")}
              {post.description.split(" ").length > 30 && "..."}
            </p>
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
