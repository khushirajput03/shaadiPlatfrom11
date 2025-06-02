import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react' 
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'


const images = [
        "decor1.png",
        "decor2.png",
        "decor3.png",
        "decor4.png",
        "decor5.png",
        "decor6.png",
        "decor7.png"
        // "decor8.png",
]


export const HomeDecor = () => {
  return (
    <>
     <h2 className="text-3xl md:text-5xl  text-[#601221] mb-6 leading-tight text-content font-forum text-center">
         
            DECOR
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
