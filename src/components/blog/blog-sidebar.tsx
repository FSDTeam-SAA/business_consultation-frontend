/* eslint-disable @typescript-eslint/no-explicit-any */
// import SearchBar from "./search-bar";
import RecentPosts from "./recent-posts";
// import PopularTags from "./popular-tags";
import SocialLinks from "./social-links";
// import ContactCard from "./contact-card";
import { Suspense } from "react";
// import { Post } from "@/lib/types";




export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* <div className="rounded-md bg-gray-100 p-6 w-[300px]">
        <SearchBar />
      </div> */}
      <RecentPosts/>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <PopularTags /> */}
      </Suspense>
      <SocialLinks />
      {/* <ContactCard /> */}
    </div>
  );
}
