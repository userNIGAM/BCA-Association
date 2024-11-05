"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <SectionHeader
        title="BCA Association MMC"
        subtitle="Learn more about our association and our mission."
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-8  font-extralight pt-8 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
        {/* Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-lg leading-relaxed text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 px-6 py-2  bg-blue-800 text-white  font-semibold rounded-full shadow hover:bg-red-600 transition-colors"
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img
            src="/bcaAssociation.jpg"
            alt="BCA Association MMC"
            className="w-auto h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
