import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="rounded-md bg-gray-100 p-6">
      <h3 className="mb-4 text-xl font-bold">Follow us on</h3>
      <div className="flex gap-4">
        <a
        target="_blank"
          href="https://x.com/going2zeroltd"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
        target="_blank"
          href="https://www.linkedin.com/company/going-2-zero-ltd"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
        target="_blank"
          href="https://www.instagram.com/going2zeroltd/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-green-500 hover:text-white"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
