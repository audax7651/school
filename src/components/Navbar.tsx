'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Pasay City South High School
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/academics" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Academics
              </Link>
              <Link href="/admissions" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Admissions
              </Link>
              <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/academics" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Academics
            </Link>
            <Link href="/admissions" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Admissions
            </Link>
            <Link href="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 