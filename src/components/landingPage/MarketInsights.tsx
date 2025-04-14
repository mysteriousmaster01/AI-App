"use client";

import React from "react";
import InsightCard from "./InsightCard";

interface Insight {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

interface MarketingInsightsProps {
  insights?: Insight[];
}

const defaultInsights: Insight[] = [
  {
    id: "1",
    imageUrl: "https://rb.gy/hp7vsh",
    title: "2023 Real Estate Market Trends",
    description:
      "Discover the latest trends shaping the real estate market in 2023 and how they might affect your investment decisions.",
    date: "June 15, 2023",
  },
  {
    id: "2",
    imageUrl: "https://rb.gy/t2jw2v",
    title: "Home Staging Tips That Sell",
    description:
      "Learn professional home staging techniques that can help sell your property faster and at a better price.",
    date: "May 22, 2023",
  },
  {
    id: "3",
    imageUrl: "https://tinyurl.com/imagetest532",
    title: "Investment Properties: What to Look For",
    description:
      "Key factors to consider when evaluating potential investment properties to maximize your returns.",
    date: "April 10, 2023",
  },
  {
    id: "4",
    imageUrl: "https://tinyurl.com/faster2123",
    title: "Navigating the Mortgage Process",
    description:
      "A step-by-step guide to understanding and successfully navigating the mortgage application process.",
    date: "March 5, 2023",
  },
];

const MarketingInsights: React.FC<MarketingInsightsProps> = ({
  insights = defaultInsights,
}) => {
  const handleReadMore = (insightId: string) => {
    console.log(`Read more about insight ${insightId}`);
    // Implementation for reading more about the insight
  };

  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="px-2 sm:px-4 md:px-10">
        <h2 className="text-3xl text-center text-zinc-900 mb-3">
          Marketing Insights
        </h2>
        <p className="text-center text-zinc-600 mb-6 max-w-2xl mx-auto text-base">
          Stay informed with our latest real estate market insights, tips, and
          guides to help you make better property decisions.
        </p>

        {/* Container that's vertical on mobile, horizontal on desktop */}
        <div className="w-full max-w-[95%] mx-auto">
          {/* Grid layout: 1 column on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {insights.map((insight) => (
              <div key={insight.id} className="w-full">
                <InsightCard
                  imageUrl={insight.imageUrl}
                  title={insight.title}
                  description={insight.description}
                  date={insight.date}
                  onReadMore={() => handleReadMore(insight.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingInsights;
