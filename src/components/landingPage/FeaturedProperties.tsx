"use client";

import React from "react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  imageUrl: string;
  title: string;
  details: string;
  price: string;
}

interface FeaturedPropertiesProps {
  properties?: Property[];
}

const defaultProperties: Property[] = [
  {
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/14ae73b73f1ef7fe047134c2d765706f7af9d320?placeholderIfAbsent=true&apiKey=6bc27b9e3f79437799c1e595bae0d18e",
    title: "Luxury Villa",
    details: "4 beds, 3 baths, LA",
    price: "$2.5M",
  },
  {
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cfde9dabc76f38928f92c182fa8d31f904d61e20?placeholderIfAbsent=true&apiKey=6bc27b9e3f79437799c1e595bae0d18e",
    title: "Skyline Apartment",
    details: "2 beds, 2 baths, NYC",
    price: "$1.8M",
  },
  {
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d29149a06c2ef715201e7fedd9b9ce63788d77b4?placeholderIfAbsent=true&apiKey=6bc27b9e3f79437799c1e595bae0d18e",
    title: "Beach Cottage",
    details: "3 beds, 2 baths, Miami",
    price: "$1.2M",
  },
  {
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/24c2957a1c7f7ddcb53f67e5a5d996c1d68e3748?placeholderIfAbsent=true&apiKey=6bc27b9e3f79437799c1e595bae0d18e",
    title: "Farmhouse Retreat",
    details: "5 beds, 4 baths, Austin",
    price: "$1.6M",
  },
];

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties = defaultProperties,
}) => {
  const handleViewDetails = (propertyId: string) => {
    console.log(`View details for property ${propertyId}`);
    // Implementation for viewing property details
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center text-zinc-900 mb-8 md:mb-10">
          Featured properties
        </h2>

        {/* Responsive container - vertical on mobile, horizontal on desktop */}
        <div className="w-full">
          {/* Mobile view: vertical stacking */}
          <div className="md:hidden space-y-8 max-w-md mx-auto">
            {properties.map((property) => (
              <div key={property.id} className="w-full">
                <PropertyCard
                  imageUrl={property.imageUrl}
                  title={property.title}
                  details={property.details}
                  price={property.price}
                  onViewDetails={() => handleViewDetails(property.id)}
                />
              </div>
            ))}
          </div>

          {/* Desktop view: horizontal layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {properties.map((property) => (
              <div key={property.id} className="w-full">
                <PropertyCard
                  imageUrl={property.imageUrl}
                  title={property.title}
                  details={property.details}
                  price={property.price}
                  onViewDetails={() => handleViewDetails(property.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
