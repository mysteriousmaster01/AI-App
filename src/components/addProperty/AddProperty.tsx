import React from "react";

const AddProperty = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Add Property</h2>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 font-medium">Property Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter property name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter price"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
