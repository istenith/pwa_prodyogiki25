"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Burger(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return(

        <>
                  <div
            className="absolute top-12 right-8 cursor-pointer z-20"
            onClick={toggleMenu}
          >
            <div className="w-6 h-[2px] bg-white bg-opacity-80 mb-1"></div>
            <div className="w-6 h-[2px] bg-white bg-opacity-80 mb-1"></div>
            <div className="w-6 h-[2px] bg-white bg-opacity-80 mb-1"></div>
          </div>

          {isMenuOpen && (
            <div className="absolute top-0 right-0 bg-black opacity-90 w-full h-96 flex flex-col items-center justify-center z-10">
              <ul className="text-white space-y-4">
          <li><Link href="/home">Home</Link></li>
      
      <li> <Link href="/events">Events</Link></li>

              </ul>
            </div>
          )}
        </>
    )
}