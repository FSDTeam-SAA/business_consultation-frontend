// "use client";

// import type React from "react";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";
// // import { Search } from "lucide-react";

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const router = useRouter();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (query.trim()) {
//       router.push(`/blog?search=${encodeURIComponent(query)}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSearch} className="flex">
//       <div className="mx-auto flex h-[156px] w-[948px] items-center justify-center rounded-md border-[1px] border-black bg-[#FFFFFF] shadow-[0px_0px_6px_0px_#00000040]">
//         <div>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="mx-auto w-[710px] rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />

//           <div className="mt-[24px] flex h-[51px] w-full items-center justify-center rounded-md bg-[#09B850]">
//             <button className="flex items-center justify-center gap-3 text-xl text-white">
//               {" "}
//               <Search /> <span>Search</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-white h-[156px] p-6 rounded-md shadow-md w-[948px] mx-auto absolute left-[25%] top-[9%] z-50">
      <div className="mb-2">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
          placeholder="Enter company name or id"
        />
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;