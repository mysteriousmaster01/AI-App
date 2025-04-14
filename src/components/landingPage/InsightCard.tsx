"use client";

import React from "react";

interface InsightCardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  onReadMore?: () => void;
}

const InsightCard: React.FC<InsightCardProps> = ({
  imageUrl,
  title,
  description,
  date,
  onReadMore,
}) => {
  return (
    <div className="flex flex-col w-full overflow-hidden rounded-xl bg-white text-zinc-400 shadow-md">
      {/* Image container with different heights for mobile vs desktop */}
      <div className="w-full overflow-hidden max-h-[150px] md:max-h-none">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-auto aspect-[3] md:aspect-[1.53]" // Mobile: reduced height, Desktop: original aspect ratio
        />
      </div>
      <div className="p-4 w-full">
        {/* Date with different font sizes for mobile vs desktop */}
        <div className="text-xl md:text-sm text-zinc-500 mb-1">{date}</div>
        {/* Title with different font sizes for mobile vs desktop */}
        <div className="text-3xl md:text-base font-bold leading-tight md:leading-loose text-zinc-900 mb-3 md:mb-2">
          {title}
        </div>
        {/* Description with different font sizes for mobile vs desktop */}
        <div className="mt-2 text-2xl md:text-sm leading-relaxed md:leading-loose">
          {description}
        </div>
        {/* Button with different sizes for mobile vs desktop */}
        <button
          onClick={onReadMore}
          className="w-full text-center py-5 md:py-2 mt-5 md:mt-2 text-2xl md:text-sm text-indigo-500 bg-white rounded-md border-2 md:border border-indigo-500 border-solid hover:bg-indigo-50 transition-colors duration-200"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default InsightCard;
