import React from "react";

const ViewProperties = () => {
  const mockData = [
    { id: 1, name: "Green Villa", location: "Ahmedabad", price: "45L" },
    { id: 2, name: "Sky Residency", location: "Vadodara", price: "60L" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">View Properties</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockData.map((property) => (
          <div
            key={property.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-medium">{property.name}</h3>
            <p className="text-gray-600">Location: {property.location}</p>
            <p className="text-gray-600">Price: {property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProperties;
