"use client"
import React, { useState,useEffect } from 'react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import Timeline from '../../src/app/componenets/threejs';

export default function Landing() {
  const [animateBack, setAnimateBack] = useState(false);

  const handleAnimationComplete = () => {
    setAnimateBack(true);
  };

      useEffect(() => {
        setTimeout(() => {
          redirect('/home');
        }, 2000);
      }, []);
    

  return (
    <div className="bg-black flex text-white min-h-screen">
      <div className="justify-between mx-auto mt-80 items-center">
        <motion.div
          initial={{ rotate: 0, scale: 0.5 }} 
          animate={animateBack ? { rotate: 0, scale: 0.5 } : { rotate: -30, scale: 1.2 }} 
          transition={{ duration: 0.8}}
          onAnimationComplete={handleAnimationComplete} 
        >
          <img src="/images/logo.png" alt="Logo" />
        </motion.div>
      </div>
    </div>
  );
}
