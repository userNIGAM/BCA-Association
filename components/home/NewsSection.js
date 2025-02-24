"use client";
import React, { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import News from "../News";
import AOS from "aos";
import "aos/dist/aos.css";
import { MockData } from "@/app/news/MockData";
import Link from "next/link";

const NewsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  // Display only the latest 6 news items
  const latestNews = MockData.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <SectionHeader title="Upcomming events" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {latestNews.map((newsItem, index) => (
          <div key={index} className="px-2 m-5" data-aos="fade-up">
            <News
              id={index}
              title={newsItem.title}
              description={newsItem.description}
              date={newsItem.date}
              image={newsItem.image}
            />
          </div>
        ))}
      </div>
      {/* View More Button */}
      <div className="text-center mt-8">
        <Link
          href="/news"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
