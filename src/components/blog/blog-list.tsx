import Image from "next/image"
import type { Comment } from "@/lib/types"

interface CommentListProps {
  comments: Comment[]
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <div className="mt-8">No comments yet. Be the first to comment!</div>
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6">{comments.length} Comments</h3>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt={comment.id}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">{comment.name}</h4>
                <p className="mt-2 text-gray-700">{comment.content}</p>
                <button className="mt-2 px-4 py-1 bg-gray-200 text-green-500 rounded-md hover:bg-gray-300 transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

