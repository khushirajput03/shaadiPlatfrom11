import React from 'react'
import { Link } from 'react-router-dom';
import { RiGeminiFill } from "react-icons/ri";

export const HomeAbout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 px-0 md:px-24 py-0 md:py-10">

      {/* Left Section */}
      <div className="w-full md:w-1/2 px-4 md:px-0">
        <RiGeminiFill className='text-gray-300 text-4xl mb-4' />    
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#601221] mb-4 sm:mb-6 leading-tight font-forum">
          A PERFECT PLATFORM FOR<br />
          A PERFECT WEDDING
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4 italic">
          Shaadi Platform is where love finds its ideal celebration. From the first ‘Hi’ to the final vows, we turn your story
          into a dream wedding that speaks from the heart. 
        </p>
       
        <Link to="/contact">
          <button className='bg-white text-[#601221] py-2 px-6 sm:px-10 mt-6 sm:mt-16 border border-[#601221] font-forum hover:border-[#601221] transition duration-700 ease-in-out'>
            GET STARTED
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 px-4 md:px-0">
        <img 
          src="https://shaadiplatform.com/wp-content/uploads/2025/05/Untitled-design-31.jpg" 
          alt="About us"
          className="w-full h-auto max-w-full object-cover rounded-md"
        />
      </div>

    </div>
  )
}
