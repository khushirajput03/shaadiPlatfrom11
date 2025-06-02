import React from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowRight,  } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const slides = [
  { id: 1, image: 'decor1.png' },
  { id: 2, image: 'decor2.png' },
  { id: 3, image: 'decor3.png' },
  { id: 4, image: 'decor4.png' },
  { id: 5, image: 'decor5.png' },
];


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 bg-white text-[#800000] p-3 rounded-full shadow
     hover:bg-[#f0f0f0] transition-all"
  >
<MdKeyboardArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 bg-white text-[#800000] p-5 rounded-full shadow
     hover:bg-[#f0f0f0] transition-all"
  >
  <MdKeyboardArrowRight />
  </button>
);

export const HomeReactSlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <div className="py-10 px-5 md:px-20 bg-[#fcf8f6] relative">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="px-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
