import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PortfolioItemProps {
  id: number;
  image: string;
  category: string;
  title: string;
  href?: string;
}

export function PortfolioItem({
  image,
  category,
  title,
  href = "#",
}: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <Link href={href} className="absolute inset-0">
        <span className="sr-only">View {title}</span>
      </Link>
      <div className="absolute bottom-4 left-4 rounded-md bg-white p-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-xs font-medium text-emerald-500">{category}</div>
        <div className="flex items-center font-medium text-gray-900">
          {title}
          <div className="ml-2 flex h-6 w-6 items-center justify-center rounded bg-emerald-500">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
