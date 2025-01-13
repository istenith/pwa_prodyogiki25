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
  // const gridbox="border-2 border-blue-500 rounded-lg p-2 bg-[#FFFFFF] bg-opacity-15";
  // const gridevents =[
  //   "Abhedya",
  //   "Chemystrey",
  //   "Aqua Fortress",
  //   "Mouse Trap",

  // ];

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat"
       style={{
        backgroundImage: `url('/background.png')`,
       }}
    >
      <div className='participant_info font-inter flex flex-col text-white items-center justify-center'>
        <div className="w-32 h-32 rounded-full overflow-hidden bg-white my-3">
        <Image 
  src="/profile.jpg" 
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
      {/* <div className = 'grid grid-rows-2 grid-flow-col gap-4'>
        <div className='$`{gridbox}`'>Glider</div>
        <div>Mousetrap</div>
        <div>Abhedya</div>
        <div>Monopoly</div>
        </div>    */}
    </div>
  );
};

export default Profile;
