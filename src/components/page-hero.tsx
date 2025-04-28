import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import pageHeroImg from "@/../public/asset/ourService.png";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  currentRoute: string;
}

export default function PageHero({
  title,
  breadcrumb,
  currentRoute,
}: PageHeroProps) {
  return (
    <section className="relative h-[300px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pageHeroImg}
          alt="Business meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <div className="inline-flex items-center rounded-full border border-[#09B850]/30 bg-black/20 px-4 py-2">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-[#09B850]"></span>
              <Link
                href="/"
                className="text-white transition-colors hover:text-[#09B850]"
              >
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/50"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span
                className={cn(
                  "transition-colors",
                  currentRoute === breadcrumb.toLowerCase()
                    ? "text-[#09B850]"
                    : "text-white",
                )}
              >
                {breadcrumb}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
