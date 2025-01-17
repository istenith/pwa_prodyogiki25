"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        className="absolute top-11  right-8 cursor-pointer z-[500]"
        onClick={toggleMenu}
      >
        <div
          className={`w-[21px] h-[2px] bg-white bg-opacity-80 mb-1 transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1' : ''
          }`}
        ></div>
        <div
          className={`w-[21px] h-[2px] bg-white bg-opacity-80 mb-1 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`w-[21px] h-[2px] bg-white bg-opacity-80 mb-1 transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed top-2 right-0 w-full min-h-screen bg-black bg-opacity-20 backdrop-blur-sm
          flex flex-col pt-16 pl-8 z-[200] rounded-3xl border border-white border-opacity-20"
        >
          <ul className="text-white text-2xl space-y-6">
            <li>
              <Link href="/home" className="hover:text-custom transition-all duration-200">Home</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-custom transition-all duration-200">Events</Link>
            </li>
            <li>
              <Link href="/members" className="hover:text-custom transition-all duration-200">Members</Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-custom transition-all duration-200">Profile</Link>
            </li>

            <li>
              <Link href="/workshop" className="hover:text-custom transition-all duration-200">Workshop</Link>
            </li>
            <li>
              <Link href="/timeline" className="hover:text-custom transition-all duration-200">TimeLine</Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-custom transition-all duration-200">SignUp</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
