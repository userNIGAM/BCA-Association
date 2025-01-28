"use client";
import React, { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import News from "../News";
import AOS from "aos";
import "aos/dist/aos.css";
import { MockData } from "@/app/news/MockData";

const NewsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <SectionHeader title="News & Notices" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {MockData.map((newsItem, index) => (
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
    </div>
  );
};

export default NewsSection;
