'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ContactStrip from './ContactStrip';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle link clicks and close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-transparent bg-opacity-10 backdrop-blur-md fixed w-full h-32 top-0 z-20 flex items-center justify-center">
        <div className="container relative mx-auto px-4 py-2 flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            {/* Logo */}
            <Image src="/images/association.png" alt="BCA Association Logo" width={120} height={120} />
            <span className="ml-2 text-xl font-bold text-blue-800 hidden md:block">BCA Association MMC</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-blue-800 font-bold hover:text-blue-600 transition duration-200">Home</Link>
            {/* <Link href="/about" className="text-blue-800 font-bold hover:text-blue-600 transition duration-200">About</Link> */}
            <Link href="/teams" className="text-blue-800 font-bold hover:text-blue-600 transition duration-200">Teams</Link>
            <Link href="/news" className="text-blue-800 font-bold hover:text-blue-600 transition duration-200">News & Notices</Link>
            <Link href="/contact" className="text-blue-800 font-bold hover:text-blue-600 transition duration-200">Contact</Link>
          </div>
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
            className="md:hidden bg-white shadow-md rounded-b-lg absolute left-1/2 top-16 transform -translate-x-1/2 mt-2 w-11/12 max-w-md flex flex-col justify-center items-center"
          >
            <div className="flex flex-col w-full">
              <Link href="/" className="block px-4 py-4 text-blue-800 hover:bg-blue-50 transition duration-200 text-center" onClick={handleLinkClick}>Home</Link>
              {/* <Link href="/about" className="block px-4 py-4 text-blue-800 hover:bg-blue-50 transition duration-200 text-center" onClick={handleLinkClick}>About</Link> */}
              <Link href="/teams" className="block px-4 py-4 text-blue-800 hover:bg-blue-50 transition duration-200 text-center" onClick={handleLinkClick}>Teams</Link>
              <Link href="/news" className="block px-4 py-4 text-blue-800 hover:bg-blue-50 transition duration-200 text-center" onClick={handleLinkClick}>News & Notices</Link>
              <Link href="/contact" className="block px-4 py-4 text-blue-800 hover:bg-blue-50 transition duration-200 text-center" onClick={handleLinkClick}>Contact</Link>
            </div>
          </motion.div>
        )}
      </nav>

      <ContactStrip />
    </>
  );
};

export default Navbar;
