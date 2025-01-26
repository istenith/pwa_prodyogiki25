"use client"
import React from 'react';
import Burger from '../home/components/hamburger';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <div className="min-h-screen relative bg-[url('/images/member.png')] bg-cover bg-center py-10">
      <Burger /> 
      <div className="text-center  text-white font-bold text-[28px] ">
        Timeline
      </div>
     <div className='flex flex-row'>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration: 1}}>
<div  className='w-6/12 px-2 mt-8 flex absolute left-2 flex-row' >
        <div className='flex flex-col items-center px-4'>
        <div className=' text-white w-5/12 '>{}</div>
        <div className='w-full mt-4 text-white'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio tenetur deserunt, unde suscipit minima consequuntur explicabo eius reiciendis rerum.m dolore?
        </div>


      </div>

<div className='flex flex-col'>

<div className=' h-72 border-l-4 pb-2  mx-auto border-white'></div>
      <div className='h-5 w-5 mt-8 rounded-full  bg-white'></div>

</div>

      </div>
</motion.div>






<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration: 1,delay:1}}>



      <div className='w-6/12  mt-[400px] flex absolute right-1  flex-row' >
      <div className=' h-72 border-l-4 mx-auto border-white'></div>
      <div className='flex flex-col items-center px-4'>
        <div className=' text-white w-5/12 '>DAY-1</div>
        <div className='w-full mt-4 text-white'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio tenetur deserunt, unde suscipit minima consequuntur explicabo eius reiciendis rerum.m dolore?
        </div>
      </div>
 
      </div>

      </motion.div>

      <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1,delay:2}}>
<div className='w-6/12 px-2 mt-[800px] flex absolute left-2 flex-row ' >
        <div className='flex flex-col items-center px-4'>
        <div className=' text-white w-5/12 '>DAY-1</div>
        <div className='w-full mt-4 text-white'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio tenetur deserunt, unde suscipit minima consequuntur explicabo eius reiciendis rerum.m dolore?
        </div>


      </div>
      <div className='flex flex-col'>

<div className=' h-72 border-l-4 pb-2  mx-auto border-white'></div>
      <div className='h-5 w-5 mt-8 rounded-full  bg-white'></div>

</div>
      </div>
</motion.div>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration: 1,delay:3}}>



      <div className='w-6/12  mt-[1200px] flex absolute right-1 flex-row' >
      <div className=' h-72 border-l-4 mx-auto border-white'></div>
      <div className='flex flex-col items-center px-4'>
        <div className=' text-white w-5/12 '>DAY-1</div>
        <div className='w-full mt-4 text-white'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio tenetur deserunt, unde suscipit minima consequuntur explicabo eius reiciendis rerum.m dolore?
        </div>
      </div>
 
      </div>

      </motion.div>
      
     </div>

    </div>
  );
};

export default Timeline;
