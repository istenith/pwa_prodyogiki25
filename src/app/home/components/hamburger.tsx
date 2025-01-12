"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Burger Icon */}
      <div
        className="absolute top-12 right-8 cursor-pointer z-20"
        onClick={toggleMenu}
      >
        {/* Hamburger Bars */}
        <div
          className={`w-6 h-[2px] bg-white bg-opacity-80 mb-1 transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-[2px] bg-white bg-opacity-80 mb-1 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`w-6 h-[2px] bg-white bg-opacity-80 mb-1 transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-4 right-0 w-full h-96 bg-black bg-opacity-20 backdrop-blur-sm
          flex flex-col pt-16 pl-8 z-10 rounded-3xl border border-white border-opacity-20"
        >
          <ul className="text-white text-3xl space-y-6">
            <li>
              <Link href="/home" className="hover:text-custom transition-all duration-200">Home</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-custom transition-all duration-200">Events</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
