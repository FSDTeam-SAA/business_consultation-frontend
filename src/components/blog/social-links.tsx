import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="rounded-md bg-gray-100 p-6">
      <h3 className="mb-4 text-xl font-bold">Follow us on</h3>
      <div className="flex gap-4">
        <Link
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <Facebook className="h-4 w-4" />
        </Link>
        <Link
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <Twitter className="h-4 w-4" />
        </Link>
        <Link
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <Linkedin className="h-4 w-4" />
        </Link>
        <Link
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <Instagram className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
