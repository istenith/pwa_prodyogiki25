"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Card1 from './components/card';
import Timeline from './components/timeline';
import Burger from './components/hamburger';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="bg-black bg-[url('/images/bg.png')] bg-cover bg-center ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
<div className='w-12 h-12 absolute  top-7 left-3'>
  <Image width={149} height={149} src="/images/logo.png" alt="" />
</div>

          <Burger />

          <div className=''>
            <div className='flex flex-col ml-16 pt-32 bg  text-white text-opacity-70'>
               ISTE NIT HAMIRPUR&apos;S</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 4 }}
              className=""
            >
                          <div className="flex flex-row ml-12 mt-0">
              <div className="-pt-12">
                <Image
                width={149} height={149}
                  src="/images/logo.png"
                  className="w-[60px] h-[88px]"
                  alt="Logo"
                />
              </div>

              <div className="flex flex-col mt-4 -ml-2 font-bold text-[33.81px] text-white text-opacity-70">
                RODYOGIKI&apos;25
              </div>
            </div>

            <div className="text-center -ml-6 text-white text-opacity-60">
              24-26th January
            </div>
             
            </motion.div>


          </div>

          <div className='flex flex-row pt-12'>
            <div className='flex flex-col ml-8 '>
              <div className='text-white'>WHAT IS</div>
              <motion.div
                className='text-custom text-[22px] bg-gradient-to-b from-custom to-black text-transparent bg-clip-text'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 4 }}
              >
                PRODYOGIKI?
              </motion.div>
              <motion.div
                className='text-custom text-[22px] bg-gradient-to-b from-custom to-black text-transparent bg-clip-text'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 4 }}
              >
                <div className='text-white text-[15px] mt-2 pr-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum cumque, perferendis pariatur quam, cupiditate eveniet corrupti obcaecati ab velit impedit. Nisi iste molestias ex delectus provident quidem laboriosam soluta?
              </div>
              </motion.div>
              
              <div className='text-custom text-[20px] mt-12 bg-gradient-to-b from-custom to-black text-transparent bg-clip-text'>
                FOR YOU
              </div>
            </div>

            {/* <div className='flex mt-0 -ml-8'>

              <img
                src="/images/1.jpeg"
                className='w-40 h-48'
                alt='logo'
              />
              
            </div> */}
          </div>

          <div className='pt-4'></div>
          <Card1 />
          <Timeline />
        </motion.div>
      </div>
    </>
  );
}
