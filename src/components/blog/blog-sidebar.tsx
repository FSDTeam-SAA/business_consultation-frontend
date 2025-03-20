import SearchBar from "./search-bar";
import RecentPosts from "./recent-posts";
import PopularTags from "./popular-tags";
import SocialLinks from "./social-links";
import ContactCard from "./contact-card";

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-md bg-gray-100 p-6">
        <SearchBar />
      </div>
      <RecentPosts />
      <PopularTags />
      <SocialLinks />
      <ContactCard />
    </div>
  );
}
