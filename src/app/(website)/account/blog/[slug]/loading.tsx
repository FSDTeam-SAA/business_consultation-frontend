import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-500 border-t-transparent mb-4" />
      <p className="text-lg font-medium text-gray-600">Loading blog post...</p>
    </div>
  );
};

export default Loading;
