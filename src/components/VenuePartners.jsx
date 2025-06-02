import React from 'react';

const images = [
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/16.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/13.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/17.png", height: "h-34", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/12.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/18.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/19.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/9.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/10.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/8.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/11.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/6.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/5.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/7.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/15.png", height: "h-24", width: "w-40" },
    { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/1.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/4.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/2.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/3.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/14-1.png", height: "h-24", width: "w-40" },
  { src: "https://shaadiplatform.com/wp-content/uploads/2025/05/20.png", height: "h-24", width: "w-40" },
];

export const VenuePartners = () => {
  return (
    <div className="py-6 marquee-track overflow-hidden">

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <button className="bg-[#601221] text-white p-4 text-center">
            OUR VENUE PARTNERS
          </button>
        </div>
        <div className="flex w-max marquee mt-[60px] gap-14">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`img-${index}`}
              className={`mx-4 object-contain ${img.height} ${img.width}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
