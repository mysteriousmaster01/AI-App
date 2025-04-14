import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full text-white bg-neutral-800" id="HeroSection">
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[640px]">
        <img
          src="https://tinyurl.com/wagner1223"
          alt="Luxury home exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900 bg-opacity-50">
          <div className="flex flex-col h-full justify-end px-5 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
            <div className="max-w-full w-full md:w-[600px] lg:w-[685px] text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Dream Home
              </h2>
              <p className="mt-3 sm:mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-100">
                Discover stunning properties tailored to your lifestyle
              </p>
              <button className="mt-4 sm:mt-5 md:mt-6 px-4 sm:px-5 py-2 sm:py-3 text-base sm:text-lg bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600 transition-colors duration-200">
                Explore Listings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
