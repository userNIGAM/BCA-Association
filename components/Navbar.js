'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-20 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/association.png"
            alt="BCA Association Logo"
            width={60}
            height={60}
          />
          <span className="ml-3 text-xl font-bold text-blue-800 hidden md:block">BCA Association MMC</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-blue-800 font-light hover:text-blue-600 transition duration-200"
          >
            HOME
          </Link>
          <Link
            href="/teams"
            className="text-blue-800 font-light hover:text-blue-600 transition duration-200"
          >
            TEAM
          </Link>
          <Link
            href="/news"
            className="text-blue-800 font-light hover:text-blue-600 transition duration-200"
          >
            NEWS & NOTICES
          </Link>
          <Link
            href="/contact"
            className="text-blue-800 font-light hover:text-blue-600 transition duration-200"
          >
            CONTACT
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4 text-blue-800">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 font-light">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-600 font-light">
            <FaEnvelope className="font-light text-2xl" />
          </a>
        
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6 text-blue-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md rounded-b-lg"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              className="text-blue-800 font-semibold hover:text-blue-600 transition duration-200"
              onClick={handleLinkClick}
            >
              HOME
            </Link>
            <Link
              href="/teams"
              className="text-blue-800 font-semibold hover:text-blue-600 transition duration-200"
              onClick={handleLinkClick}
            >
              TEAMS
            </Link>
            <Link
              href="/news"
              className="text-blue-800 font-semibold hover:text-blue-600 transition duration-200"
              onClick={handleLinkClick}
            >
              NEWS & NOTICES
            </Link>
            <Link
              href="/contact"
              className="text-blue-800 font-semibold hover:text-blue-600 transition duration-200"
              onClick={handleLinkClick}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4 text-blue-800">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-600">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-600">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-blue-600">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
