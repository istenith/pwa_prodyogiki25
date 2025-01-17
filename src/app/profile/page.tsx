"use client";

import React from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";
import CircularProgressBar from '../componenets/progressbar';
const Profile = () => {

  const eventNames = [
    "Abhedya",
    "Chemystrey",
    "Aqua Fortress",
    "Mouse Trap",
  ];

const events= [
  {
    id: 1,
    img: "/image77.jpg",
    text:"mousetrap"
   },
   {
    id: 2,
    img: "/image77.jpg",
    text:"abhedya"
   },
   {
    id: 3,
    img: "/image77.jpg",
    text:"aeroquest"
   },
   {
    id: 4,
    img: "/image77.jpg",
    text:"CSE Event"
   },

];

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat "
       style={{
        backgroundImage: `url('/background.png')`,
       }}
    >
      <div className='participant_info font-inter flex flex-col text-white items-center justify-center'>
        <div className="w-32 h-32 rounded-full overflow-hidden my-3">
        <Image 
  src="/profile.svg" 
  alt="Circular Image" 
  width={500} 
  height={500} 
  className="w-full h-full object-cover" 
/>
        </div>
        <div className='name text-md font-semibold text-white'>Amit Singh</div>
        <div className='prodyid text-md font-semibold py-3 text-white'>prody_id 011</div>
        <div className='points text-md font-semibold text-white'>1000</div>
        <div className='points text-sm font-medium mb-8 text-white'>Prody Points</div>
      </div>
      <CircularProgressBar events={eventNames.length} eventNames={eventNames}/>
      <div className='flex px-4 pt-7 pb-2 gap-52'>
      <div className='text-white font-semibold text-lg'>More Events</div>
      <MdKeyboardArrowRight size={24} className='text-white'/>
      </div>
      
<div className="grid grid-rows-2 grid-flow-col gap-4 bg-[##010101] p-4 w-full text-white ">
  {events.map((event) => (
    <div key={event.id} className="flex items-center mb-4 hover:scale-110 transition-all duration-300">
      
      <div
        className="circle z-10 w-16 h-16 rounded-full bg-cover bg-center bg-black border-[#010101] border-[3px] "
        
      >
        <Image
              src={event.img}
              alt={event.text}
              width={64} 
              height={64} 
              className="rounded-full object-cover"
            />
      </div>

      <div
        className="rectangle w-32 h-12 bg-[#FFFFFF] bg-opacity-15 pl-8 py-3 rounded-r-[20px] text-sm font-medium -ml-6"
      >
        {event.text}
        
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Profile;
