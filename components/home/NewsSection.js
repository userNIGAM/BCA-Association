"use client";
import { useEffect } from "react";
import Slider from "react-slick";
import News from "../News";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { MockData } from "@/app/news/MockData";

export default function NewsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds (3000 ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // Initialize AOS
  }, []);

  return (
    <div
      className="py-8 px-4 rounded-lg max-w-6xl mx-auto text-center"
      data-aos="fade-up"
    >
      <SectionHeader title="News & Notices" />
      <Slider {...settings}>
        {MockData.map((newsItem, index) => (
          <div key={index} className="px-2 m-5" data-aos="zoom-in">
            <News
              title={newsItem.title}
              description={newsItem.description}
              date={newsItem.date}
              image={newsItem.image}
              id={index}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
