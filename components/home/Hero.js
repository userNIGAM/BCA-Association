"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../SectionHeader";
import TSParticles from "../extra/TSparticle";

const Hero = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // AOS animations run once on scroll
  }, []);

  return (
    <div
      className="max-w-7xl min-h-96 mx-auto my-10 text-center relative -z-10"
      data-aos="fade-up"
    >
      <div className=" absolute top-0 left-0 h-full min-h-96 w-full z-40 flex flex-col md:flex-row items-center justify-between gap-8 font-extralight pt-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
        {/* Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-center"
          data-aos="fade-right" // AOS scroll animation
        >
          <SectionHeader
            title="BCA Association MMC"
            subtitle="Non-political governing body of BCA students at Mechi Multiple Campus."
          />
          <p className="text-md leading-relaxed text-justify px-4"></p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 px-6 py-2 bg-blue-800 text-white font-semibold rounded-full shadow hover:bg-red-600 transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden"
          data-aos="fade-left" // AOS scroll animation
        >
          <img
            src="/images/association.png"
            alt="BCA Association MMC"
            height={350}
            width={350}
          />
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 h-full min-h-96 w-full z-30">
        <TSParticles />
      </div>
    </div>
  );
};

export default Hero;
