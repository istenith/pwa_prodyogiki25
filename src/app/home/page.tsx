"use client"
import Card1 from './components/card';
import Timeline from './components/timeline';
import Burger from './components/hamburger';

export default function Home() {


  return (
    <>
      <div className="min-h-screen bg-black  relative">

        <div className=''>
          <Burger />


          <div className="flex flex-col ml-16 pt-24 bg text-white text-opacity-70">
            ISTE NITH HAMIRPUR'S
          </div>

          <div className="flex flex-row ml-12 mt-0">
            <div className="-pt-12">
              <img
                src="/Screenshot_2025-01-10_at_1.07.54_AM-removebg-preview.png"
                className="w-[60px] h-[88px]"
                alt="Logo"
              />
            </div>

            <div className="flex flex-col mt-4 -ml-2 font-bold text-[33.81px] text-white text-opacity-70">
              RODYOGIKI'25
            </div>
          </div>

          <div className="text-center -ml-6 text-white text-opacity-60">
            24-26th January
          </div>
        </div>

        <div className='flex flex-row  pt-8'>
          <div className='flex flex-col ml-10 w-7/12'>
            <div className='text-white'>WHAT IS</div>
            <div className='text-custom text-[16.3px] bg-gradient-to-b from-custom to-black text-transparent bg-clip-text'>
              PRODYOGIKI?
            </div>
            <div className='text-white text-[12.37px] mt-2 pr-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum cumque, perferendis pariatur quam, cupiditate eveniet corrupti obcaecati ab velit impedit. Nisi iste molestias ex delectus provident quidem laboriosam soluta?
            </div>
            <div className='text-custom text-[16.3px] mt-4 bg-gradient-to-b from-custom to-black text-transparent bg-clip-text'>
              FOR YOU
            </div>
          </div>

          <div className='flex -mt-12 -ml-10'>
            <div className='-rotate-12'>
              <img
                src='/Screenshot_2025-01-10_at_1.07.54_AM-removebg-preview.png'
                className='w-12 h-60'
                alt='logo'
              />
            </div>
            <img
              src='/Screenshot_2025-01-10_at_1.07.54_AM-removebg-preview.png'
              className='w-12 h-60'
              alt='logo'
            />
            <div className='rotate-12'>
              <img
                src='/Screenshot_2025-01-10_at_1.07.54_AM-removebg-preview.png'
                className='w-12 h-60'
                alt='logo'
              />
            </div>
          </div>
        </div>

        <div className='pt-8'></div>
        <Card1 />
        <Timeline />
      </div>
    </>
  );
}
