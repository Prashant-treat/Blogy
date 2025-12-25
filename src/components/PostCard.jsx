import React from "react";
import appwriteService from "../service/config";
import { Link } from "react-router-dom";
import log from "../assets/logo.png";

function PostCard({ $id, title, featuredImage }) {
  const isFallback = !featuredImage ;

  const imageUrl = isFallback
    ? log
    : appwriteService.getFilePreview(featuredImage);

  return (
    <Link to={`/post/${$id}`} className="group block">
      <div
        className="
          h-full
          bg-white dark:bg-gray-950
          border border-gray-200 dark:border-gray-800
          rounded-2xl
          p-4
          transition
          hover:shadow-lg dark:hover:shadow-gray-800
          hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-xl mb-4
                        bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            onError={(e) => (e.currentTarget.src = log)}
            className={`
              absolute inset-0 w-full h-full
              transition-transform duration-300
              ${isFallback 
                ? "object-contain p-6  opacity-50 dark:opacity-20" 
                : "object-cover group-hover:scale-105  " }
            `}
          />
        </div>

        {/* Title */}
        <h2
          className="
            text-lg sm:text-xl
            font-semibold
            text-gray-800 dark:text-gray-100
            line-clamp-2
          "
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

