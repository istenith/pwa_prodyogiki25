"use client";
import React from 'react';
import Burger from '../home/components/hamburger';
import { motion } from 'framer-motion';
import { timelineData3 } from '@/lib/constants';

const Timeline = () => {
  return (
    <div className="min-h-screen py-10">
      <Burger />
      <div className="text-center text-white font-bold text-[28px]">
        Timeline
      </div>

      <div className="flex flex-col">
        {timelineData3.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y:40 }}
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 1.2, delay: index * 1.2 }} 
          >
            {/* Left for odd index */}
            {index % 2 !== 0 && (
              <div
                className="w-6/12 px-2 flex absolute left-2 flex-row"
                style={{ marginTop: event.margin }} 
              >
                <div className="flex flex-col items-center px-4">
                  <div className="text-white w-5/12">{event.day}</div>
                  <div className="w-full mt-4 h-[250px] overflow-scroll text-white">{event.description}</div>
                </div>

                <div className="flex flex-col">
                  <div className="h-72 border-l-4 pb-2 mx-auto border-white"></div>
                  <div className="h-5 w-5 mt-10 rounded-full bg-white"></div>
                </div>
              </div>
            )}

            {/* Right for even index */}
            {index % 2 === 0 && (
              <div
                className="w-6/12 flex absolute right-3 flex-row"
                style={{ marginTop: event.margin }} 
              >
                <div className="h-72 border-l-4 mx-auto border-white"></div>
                <div className=" -ml-3 mt-4">
                <div className="h-5 w-5 mt-80 rounded-full bg-white"></div>
             
                  </div>
            
                <div className="flex flex-col items-center px-4">
                  <div className="text-white w-5/12">{event.day}</div>
                  <div className="w-full mt-4 h-[250px] overflow-scroll text-white">{event.description}</div>
                </div>


              
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
