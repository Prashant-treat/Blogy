import React from "react";

function PostCardSkeleton() {
  return (
    <div
      className="rounded-xl bg-white dark:bg-gray-800
                 shadow-sm border border-gray-200 dark:border-gray-700
                 overflow-hidden animate-pulse"
    >
      {/* Image skeleton */}
      <div className="h-40 w-full bg-gray-300/70 dark:bg-gray-700/70" />

      {/* Text skeleton */}
      <div className="p-4 space-y-2">
        <div className="h-4 w-3/4 rounded bg-gray-300/70 dark:bg-gray-700/70" />
        <div className="h-3 w-1/2 rounded bg-gray-300/70 dark:bg-gray-700/70" />
      </div>
    </div>
  );
}



function Loader() {
  return (
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Responsive grid */}
      <div
        className="grid gap-6
                   grid-cols-1
                   sm:grid-cols-2
                   md:grid-cols-3
                   lg:grid-cols-4"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}



export default Loader;

