"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Burger from './components/hamburger'; 
import Timeline from './components/timeline'; 
import { AnimatedTestimonials } from "@/app/componenets/ui/animated-testimonials";
export default function Home() {

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
       src: "/images/1.jpeg",
    },
    
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
       src: "/images/workshop.png",
    },

    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
       src: "/images/events.png",
    },
    
 
  ];
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 2000); 
  }, []);

  return (
    <>

      {!showBackground && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative bg-[url('/images/h1.png')] bg-cover bg-center flex inset-0 min-h-screen"
        >
          <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-t from-custom/40 to-transparent z-0"></div>
          <div className="relative z-10 flex flex-row ml-8 text-white my-auto">
            <Image
            height={200}
            width={200}
             src="/images/logo.png" alt="Logo" 
             className="w-24 h-40" />
            <div className="text-3xl mt-16">PRODYOGIKI&apos;25</div>
          </div>
        </motion.div>
      )}


      {showBackground && (
        <div className="bg-[#081C14] bg-cover bg-center relative min-h-screen">
          <div className="absolute inset-0 top-28 bg-gradient-to-t h-[600px] from-transparent via-[#59F7E2] to-transparent opacity-40 blur-xl z-0"></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="relative z-10"
          >

            <div className="top-7 left-3 flex flex-row absolute">
              <div className="w-12 h-16 flex flex-row">
                <Image width={149} height={149} src="/images/logo.png" alt="" />
              </div>
              <div className="flex flex-col pt-3 ml-2">
                <div className="text-white">Hello,</div>
                <div className="text-white -mt-1 text-opacity-70">Welcome to PRODYOGIKI&apos;25</div>
              </div>
            </div>

            <Burger />

            <div className="flex flex-row">
              <div className="flex w-7/12 flex-col">
                <div className="flex ml-8 pt-36 text-white text-[17px]">
                  ISTE NIT HAMIRPUR&apos;S
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 4 }}
                >
                  <div className="flex ml-12 mt-0">
                    <div className="flex flex-col mt-3 -ml-4 font-bold text-[28px] text-gradient bg-gradient-to-b from-[#59F7E2] to-white text-transparent bg-clip-text">
                      PRODYOGIKI&apos;25
                    </div>
                  </div>

                  <div className="ml-8 -mt-2 text-white text-[15px] text-opacity-60">
                    24-26th January
                  </div>
                  <div className="w-full h-[1px] mt-5 bg-gradient-to-r from-transparent via-custom to-transparent"></div>
                  <div className="mt-2 ml-8 text-white text-[17px]">REALMS OF ENGINEERING</div>
                </motion.div>
              </div>
              <div className="h-[200px] w-[160px] mt-40">
                <Image width={400} height={800} src="/images/im.png" alt="Logo" />
              </div>
            </div>

            <div className="text-white border-b-4 ml-4 text-[17px] z-50 border-[#008080] text-center border-2 w-[219px] h-[48px] rounded-3xl p-2">
              WHAT IS PRODYOGIKI?
            </div>

            <div className="flex mt-7 flex-row">

<div className='w-2/4  ml-4 obverflow-hidden'>
<AnimatedTestimonials testimonials={testimonials} />
</div>
         

              <div className="w-[200px] ml-7 h-[205px] text-[13px] text-white">
                s vitae amet! Consequuntur, laudantium ut? Lorem ipsum dolor sit amet. consectetur adipisicing elit. Aspernatur adipisci repudiandae, tempore quis sed sint ex maxime odit voluptatem. Obcaecati pariatur facere fugiat nemo! Doloribus quisquam culpa quo sequi! Distinctio!
              </div>
            </div>

            <div className="flex flex-row pt-16">
              <div className="flex flex-row ml-0">
                <div className="text-white border-b-4 ml-4 text-[17px] border-[#008080] text-center border-2 w-[219px] h-[48px] rounded-3xl p-2">
                  FOR YOU
                </div>
              </div>
            </div>

            <div className="pt-7 flex justify-around flex-row">
              <div className="w-[185px] h-[150px] border-2 rounded-2xl flex flex-col">
                <div className="mt-5 mx-auto rounded-full bg-custom w-12 h-12 "></div>
                <div className="mt-5 mx-auto text-white"> EVENTS</div>
                <div className="w-full h-[1px] mt-3 bg-gradient-to-r from-transparent via-custom to-transparent"></div>
              </div>

              <div className="w-[185px] h-[150px] border-2 rounded-2xl flex flex-col">
                <div className="mt-5 mx-auto rounded-full bg-custom w-12 h-12 "></div>
                <div className="mt-5 mx-auto text-white"> WORKSHOPS</div>
                <div className="w-full h-[1px] mt-3 bg-gradient-to-r from-transparent via-custom to-transparent"></div>
              </div>
            </div>
          </motion.div>
          <Timeline />
        </div>
      )}
    </>
  );
}
