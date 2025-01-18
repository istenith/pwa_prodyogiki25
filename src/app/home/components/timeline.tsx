"use client";
import { useState } from "react";
import { motion } from "framer-motion";  
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


export default function Timeline() {
  const timelineData = [
    {
      day: "DAY 1",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velestias distinctio qui commodi fugit? Aut pariatur tempora repellat consectetur fuga iure, nesciunt quibusdam veritatis perspiciatis, molestiae voluptatibus natus, sapiente blanditiis.",
    },
    {
      day: "DAY 2",
      content:
        "Sed ut perspiciatis unde omnis  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      day: "DAY 3",
      content:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];

  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const goToNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
  };

  const goToPreviousDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + timelineData.length) % timelineData.length);
  };

  return (
    <div className="flex flex-col w-full h-full pt-16">

      <div className="text-white border-b-4 ml-4 text-[17px] border-[#008080] text-center border-2 w-[219px] h-[48px] rounded-3xl p-2">
        TIMELINE
      </div>


      <div className="mt-4 mx-auto flex w-full px-8 flex-col text-center">
        <div className="flex justify-between w-full pt-12 px-4">
          <motion.button
            onClick={goToPreviousDay}
            className="bg-[#008080] text-white py-2 px-4 rounded-full hover:bg-[#006666] z-50 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
          <AiOutlineLeft size={24} /> 
          </motion.button>

          <motion.button
            onClick={goToNextDay}
            className="bg-[#008080] text-white py-2 px-4 rounded-full z-50 hover:bg-[#006666] transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
          <AiOutlineRight size={24} />
            
          </motion.button>
        </div>


        <motion.div
          className="text-white text-2xl -mt-8"
          key={timelineData[currentDayIndex].day} 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}  
          exit={{ opacity: 0, x: -100 }}  
          transition={{ duration: 0.5 }}
        >
          {timelineData[currentDayIndex].day}
        </motion.div>

        <motion.div
          className="text-white text-left px-8 pt-8 pb-8"
          key={timelineData[currentDayIndex].content}  
          initial={{ opacity: 0, x: 100 }}  
          animate={{ opacity: 1, x: 0 }}  
          exit={{ opacity: 0, x: -100 }}  
          transition={{ duration: 0.5 }}
        >
          {timelineData[currentDayIndex].content}
        </motion.div>
      </div>
    </div>
  );
}
