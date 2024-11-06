"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import React from "react";
import { useEffect, useState } from "react";
import { MockData } from "@/app/news/MockData";

const NewsMain = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const newsItem = MockData.find((item) => item.id === id);
    setLoading(false);
    setNews(newsItem);
  }, [id]);

  if (!loading && !news) {
    throw new Error("Failed to Fetch News.");
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">{news?.title}</h1>
        <p className="text-gray-500 text-sm mt-2">
          Posted {moment(new Date(news?.date)).fromNow()}
        </p>
      </div>
      <div className="relative w-full mb-8">
        <img
          src={news?.image}
          alt={news?.title}
          className="rounded-lg shadow-lg max-h-96 w-full object-contain"
        />
      </div>
      <div className="text-lg text-gray-700 leading-relaxed">
        <p>{news?.description}</p>
      </div>
      <div className="mt-8">
        <Link href="/news" className="text-blue-600 hover:text-blue-800">
          ← Back to News
        </Link>
      </div>
    </div>
  );
};

export default NewsMain;
