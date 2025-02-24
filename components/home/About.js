"use client";
import React, { useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle paragraph

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // AOS animations will run once
  }, []);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto mt-24 text-center -z-10" data-aos="fade-up">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-around gap-8 font-extralight pt-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
        {/* Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-2"
          data-aos="fade-right" // AOS for scroll animation
        >
          <SectionHeader
            title="About Us"
            subtitle="Learn more about our association and our mission."
          />
          <p className="text-md leading-relaxed text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* AnimatePresence for smooth transition */}
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="text-md leading-relaxed text-justify mt-4 overflow-hidden"
              >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Curabitur convallis
                tortor a mauris tristique, ut placerat est gravida. Donec in
                scelerisque tortor. Phasellus eu augue quis arcu volutpat semper
                id nec nisl.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={toggleParagraph}
            className="mt-4 px-6 py-2 bg-blue-800 text-white font-semibold rounded-full shadow hover:bg-blue-900 transition-colors"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </motion.button>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-md"
          data-aos="fade-left" // AOS for scroll animation
        >
          <img
            src="/images/association2.jpg"
            alt="BCA Association MMC"
            className="w-auto h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
