import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#fff7f2] text-[#601221] py-12 px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  
        <div>
          <h3 className="text-xl font-semibold mb-4">EXPLORE</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="space-x-4 font-medium">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
          <p>Info@shaadiplatform.com</p>
          <p>+91-88003 44104</p>

        <a href='' className='font-medium'>Location</a>
        <div>
        <a href=''>208, Plot No. CB-202A, Guru Harkrishan Plaza, Ring Road, Naraina, 
        New Delhi - 110028</a>
        </div>
        </div>

        <div className='text-2xl'>
         LET'S TALK ABOUT YOUR FUTURE WEDDING!
         <br/>
      </div>
      </div>
    </footer>
  );
};
