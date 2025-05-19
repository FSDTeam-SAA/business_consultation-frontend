import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import type { Post } from "@/lib/types";
import DOMPurify from "dompurify";

interface BlogCardProps {
  post: Post;
}

// ✅ Helper to sanitize and truncate HTML description to N words
function truncateHtmlText(html: string, wordLimit: number): string {
  const clean = DOMPurify.sanitize(html);
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = clean;
  const textContent = tempDiv.textContent || tempDiv.innerText || "";
  const words = textContent.split(" ");
  const truncatedText =
    words.slice(0, wordLimit).join(" ") +
    (words.length > wordLimit ? "..." : "");
  return `<p>${truncatedText}</p>`;
}

export default function BlogCard({ post }: BlogCardProps) {
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

            {/* ✅ Updated: Truncated + safe HTML rendering */}
            <p
              className="hover:text-green-500"
              dangerouslySetInnerHTML={{
                __html: truncateHtmlText(post.description, 30),
              }}
            />
          </Link>

          <p className="mb-4 line-clamp-3 text-gray-700">{post.excerpt}</p>

          <div className="mt-6 flex h-[45px] w-[151px] items-center justify-center rounded-[8px]">
            <Link href={`/blog/${post.slug}`}>
              <div className="group relative overflow-hidden rounded-lg border border-[#09B850] px-5 py-3 font-medium text-[#09B850] shadow-inner">
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#09B850] transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#09B850] transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute left-0 top-0 h-0 w-full bg-[#09B850] transition-all delay-200 duration-300 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 left-0 h-0 w-full bg-[#09B850] transition-all delay-200 duration-300 group-hover:h-full"></span>
                <span className="absolute inset-0 h-full w-full bg-[#09B850] opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
                <span className="ease relative transition-colors delay-300 duration-300 group-hover:text-white">
                  Read More
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
