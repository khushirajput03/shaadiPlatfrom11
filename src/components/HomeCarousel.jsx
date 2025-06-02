import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react' 
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'


const images = [
        "gallery1.png",
        "gallery2.png",
        "gallery3.png",
        "gallery4.png",
        "gallery5.png",
        "gallery6.png",
        // "gallery7.png",
        "gallery8.png",
        "gallery9.png",
        "gallery10.png",
        "gallery11.png",
        
]


export const HomeCarousel = () => {
  return (
    <>
     <h2 className="text-3xl md:text-5xl  text-[#601221] mb-6 leading-tight text-content font-forum text-center">
         
            OUR GALLERY
          </h2>
    <div className='bg-[#fefaf6] py-10'>
        <Swiper
        modules={[Navigation]}
        navigation 
        slidesPerView={1}
        breakpoints={{
            640 : { slidesPerView : 1},
            768 : { slidesPerView : 2},
            1024 : { slidesPerView : 3}
        }}
        loop
        >
        {images.map((url, index) => (
             <SwiperSlide key={index}>
            <img
              src={url}
              alt={`wedding-${index}`}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
        </Swiper>
         <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
          }
        `}</style>
        <div className='flex justify-center'>
         <button className='bg-white text-[#601221] flex items-center justify-center  p-2 pl-10 pr-10 mt-5 text-center border border-gray-300 hover:border-[#601221] transition duration-1000 ease'>
          EXPLORE MORE
        </button>
        </div>
    </div>
    </>
  )
}
