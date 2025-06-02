import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export const About1Part = () => {
  return (
    <div className="relative w-full h-[400px] font-forum ">
     
      <img
        src="about-hero.png"
        alt="About"
        className="w-full h-full object-cover"
      />


      <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></div>

   
      <div className="absolute top-0 left-0 w-full h-full sm:h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl"   
        style={{ fontFamily: '"Forum", sans-serif' }}>
        About Us
        </h1>
        <div>
        <h2 className='text-white flex items:center gap-6 mt-4'>Home <span><FaArrowRightLong  className='mt-1'/></span> About</h2>
        </div>
      </div>
    </div>
  );
}
 
