import React from 'react'
import { RiGeminiFill } from "react-icons/ri"; 
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export const ContactForm = () => {
  return (
    <div className='bg-[#601221] mt-8 flex flex-col md:flex-row font-forum px-6 md:px-20 py-10 md:py-20 gap-10 md:gap-40'>

      {/* Left Info Section */}
      <div className='flex-1'>
        <div>
          <RiGeminiFill className='text-white text-4xl mb-4' />
        </div>
        <h2 className='text-white text-3xl md:text-4xl mb-8 md:mb-16'>GET IN TOUCH</h2>
        <div className='text-white space-y-4'>
          <p className='flex items-center'><FaLocationDot className="mr-2" />Punjab</p>
          <p className='flex items-center'><FaLocationDot className="mr-2" />Chandigarh</p>
          <p className='flex items-center'><FaLocationDot className="mr-2" />JAIPUR</p>
          <a 
            href="https://www.google.com/maps?q=208,+Plot+No.+CB-202A,+Guru+Harkrishan+Plaza,+Ring+Road,+Naraina,+New+Delhi+-+110028" 
            target="_blank" 
            rel="noreferrer"
            className='flex items-start'
          >
            <FaLocationDot className="mr-2 mt-1" />
            <span>
              Main Branch - 208, Plot No. CB-202A, Guru Harkrishan<br />
              Plaza, Ring Road, Naraina, New Delhi - 110028
            </span>
          </a>
          <a href='mailto:Info@shaadiplatform.com' className='flex items-center'>
            <IoMdMail className="mr-2" />
            Info@shaadiplatform.com
          </a>
          <a href='tel:+918800344104' className='flex items-center'>
            <FaPhone className="mr-2" />
            +91-88003 44104
          </a>
        </div>
      </div>

      {/* Right Form Section */}
      <div className='flex-1'>
        <RiGeminiFill className='text-white text-4xl mb-4' />
        <h2 className='text-white text-3xl md:text-4xl mb-8'>SEND A MESSAGE</h2>
        <form className="max-w-xl mx-auto bg-white p-6 rounded-sm shadow-md">
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm text-[#601221] italic mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="block w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#601221] py-2.5 px-0" 
              placeholder="Enter Your Name" 
              required 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm text-[#601221] italic mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="block w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#601221] py-2.5 px-0" 
                placeholder="Enter Your Email Id" 
                required 
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="block text-sm text-[#601221] italic mb-1">Phone</label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                className="block w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#601221] py-2.5 px-0" 
                placeholder="Enter Your Phone No." 
                required 
              />
            </div>
          </div> 

          <div className="mb-5">
            <label htmlFor="message" className="block text-sm text-[#601221] italic mb-1">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={4}
              className="block w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#601221] py-2.5 px-0 resize-none" 
              placeholder="Please Enter Your Query!!!" 
              required
            />
          </div>

          <button 
            type="submit" 
            className="text-white bg-[#601221] md:pl-48  md:pr-48 sm:pr-0  sm:pl-0 focus:ring-4 focus:outline-none font-medium text-sm w-full sm:w-auto px-10 py-2.5 text-center"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}
