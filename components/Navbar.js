'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* Logo */}
          <Image src="/logo.png" alt="BCA Association Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold text-blue-800">BCA Association MMC</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-blue-800 font-bold hover:text-blue-800">Home</Link>
          <Link href="/about" className="text-blue-800 font-bold hover:text-blue-800">About</Link>
          <Link href="/news" className="text-blue-800 font-bold hover:text-blue-800">News & Notices</Link>
          <Link href="/teams" className="text-blue-800 font-bold hover:text-blue-800">Teams</Link>
          <Link href="/contact" className="text-blue-800 font-bold hover:text-blue-800">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
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
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden bg-white shadow-md"
        >
          <Link href="/" className="block px-4 py-2 text-blue-800 hover:bg-blue-50">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-blue-800 hover:bg-blue-50">About</Link>
          <Link href="/news" className="block px-4 py-2 text-blue-800 hover:bg-blue-50">News & Notices</Link>
          <Link href="/teams" className="block px-4 py-2 text-blue-800 hover:bg-blue-50">Teams</Link>
          <Link href="/contact" className="block px-4 py-2 text-blue-800 hover:bg-blue-50">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
