"use client";
import ContactSection from "@/components/ContactSection";
import News from "@/components/News";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import { MockData } from "./MockData";

const NewsGrid = () => {
  // Static news data
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(MockData.length / newsPerPage);

  // Get current news for the page
  const currentNews = MockData.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  // Function to handle pagination
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <SectionHeader title="News & Notices" />

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.map((news, index) => (
            <News
              key={index}
              title={news.title}
              description={news.description}
              date={news.date}
              image={news.image}
              id={index}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-900 text-white hover:bg-blue-700"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-700 text-white"
                    : "bg-blue-900 text-white hover:bg-blue-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-900 text-white hover:bg-blue-700"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <ContactSection />
    </>
  );
};

export default NewsGrid;
