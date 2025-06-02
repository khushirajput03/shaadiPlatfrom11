import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    img: 'service1.png',
    title: 'DESTINATION & VENUE SELECTION',
  },
  {
    img: 'service2.png',
    title: 'DESTINATION & VENUE SELECTION',
  },
  {
    img: 'service3.png',
    title: 'PRE WEDDING SHOOTS',
  },
  {
    img: 'service4.png',
    title: 'DECOR & THEMES',
  },
  {
    img: 'service5.png',
    title: 'BRIDAL MAKEOVER',
  },
  {
    img: 'service6.png',
    title: 'PROPOSAL PLANNING',
  },
];

export const OurService = () => {
  return (
    <div className="py-10 bg-white text-center px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl text-[#601221] mb-10 font-forum">
        OUR SERVICES
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto font-forum">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-b-none rounded-t-[220px] overflow-hidden shadow-md group"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-auto max-h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
              <p className="text-white text-2xl text-center leading-tight font-forum">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/Portfolio">
        <button className="bg-white text-[#601221] p-2 px-10 mt-16 border border-[#601221] hover:bg-[#601221] hover:text-white transition-all duration-700 mx-auto block">
          EXPLORE MORE
        </button>
      </Link>
    </div>
  );
};
