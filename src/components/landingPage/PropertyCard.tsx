"use client";

import React from "react";

interface PropertyCardProps {
  imageUrl: string;
  title: string;
  details: string;
  price: string;
  onViewDetails?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  title,
  details,
  price,
  onViewDetails,
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
        {/* Title with different font sizes for mobile vs desktop */}
        <div className="text-3xl md:text-base font-bold leading-tight md:leading-loose text-zinc-900 mb-3 md:mb-2">
          {title}
        </div>
        {/* Details with different font sizes for mobile vs desktop */}
        <div className="mt-2 text-2xl md:text-sm leading-relaxed md:leading-loose">
          {details}
        </div>
        {/* Price with different font sizes for mobile vs desktop */}
        <div className="mt-3 md:mt-2 text-3xl md:text-sm font-semibold">
          {price}
        </div>
        {/* Button with different sizes for mobile vs desktop */}
        <button
          onClick={onViewDetails}
          className="w-full text-center py-5 md:py-2 mt-5 md:mt-2 text-2xl md:text-sm text-indigo-500 bg-white rounded-md border-2 md:border border-indigo-500 border-solid hover:bg-indigo-50 transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
