function PostLoader() {
  return (
    <>
    <div
      className="mx-auto bg-white rounded-xl dark:bg-gray-800
                 shadow-sm border border-gray-200 dark:border-gray-700
                 overflow-hidden animate-pulse"
    >
      {/* Image skeleton */}
      <div className="h-80 rounded-xl w-full bg-gray-300/70 dark:bg-gray-700/70" />

      {/* Text skeleton */}
      <div className="p-4 space-y-2">
        <div className="h-8 w-3/4 rounded bg-gray-300/70 dark:bg-gray-700/70" />
        <div className="h-4 w-3/4 rounded bg-gray-300/70 dark:bg-gray-700/70" />
        <div className="h-4 w-3/4 rounded bg-gray-300/70 dark:bg-gray-700/70" />
        <div className="h-4 w-3/4 rounded bg-gray-300/70 dark:bg-gray-700/70" />
      </div>
    </div>
    </>
  );
}


export default PostLoader;