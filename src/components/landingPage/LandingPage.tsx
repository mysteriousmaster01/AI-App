"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeaturedProperties from "./FeaturedProperties";
import MarketInsights from "./MarketInsights";
import Footer from "./Footer";

function LandingPage() {
  return (
    <main className="overflow-hidden bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)]">
      <HeroSection />
      <FeaturedProperties />
      <MarketInsights />
      <Footer />
    </main>
  );
}

export default LandingPage;
