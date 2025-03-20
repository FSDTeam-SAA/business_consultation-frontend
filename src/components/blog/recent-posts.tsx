import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { recentPosts } from "@/lib/data";

export default function RecentPosts() {
  return (
    <div className="rounded-md bg-gray-100 p-6">
      <h3 className="mb-4 text-xl font-bold">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="group flex items-center gap-3"
          >
            <div className="h-20 w-20 flex-shrink-0">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={80}
                height={80}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center gap-1 text-sm text-green-500">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <h4 className="font-medium transition-colors group-hover:text-green-500">
                {post.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
