import React from 'react'
import { RiGeminiFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { FaTshirt } from "react-icons/fa";
import { PiFlowerLotusDuotone } from "react-icons/pi";

export const Why_Choose = () => {
    const services_cards = [
        {
            icons: <ImUsers />,
            title: "PROFESSIONAL TEAM AND CREWS",
            description: "Our expert planners, designers, and coordinators bring dream wedding to life with precision, creativity, and dedication.",
        },
        {
            icons: <FaTshirt />,
            title: "DRESSES & SUITS COLLECTION",
            description: "Explore our exclusive collection of bridal gowns, groom suits, and traditional attire — curated to suit every style and celebration.",
        },
        {
            icons: <PiFlowerLotusDuotone />,
            title: "AMAZING WEDDING DECORATION",
            description: "From elegant floral setups to luxurious lighting and themes, we transform your venue into a magical space you'll never forget.",
        }
    ]
    return (
        <div className='bg-[#601221] mt-10 font-forum'>
            <div className='flex items-center justify-center'>
                <RiGeminiFill className='text-gray-400 text-4xl mb-4 mt-16 ' />
            </div>
            <h2 className='text-white text-[38px] sm:text-xl text-center'>WHY CHOOSE SHAADI PLATFORM</h2>
            <div className='flex items-center justify-center mt-4'>
                <button className='border border-white text-white p-2 pl-[40px] pr-[40px] text-center'>OUR SERVICE</button>
            </div>

           
            <div className='flex flex-wrap justify-center mt-14 px-4'>
                {
                    services_cards.map((service, index) => (
                        <div key={index} className='bg-[#601221] text-white p-14 border border-white w-full sm:w-[80%] md:w-[45%] lg:w-[28%] mb-12'>
                            <div className='text-5xl mb-5'>{service.icons}</div>
                            <h3 className='text-[18px] mb-2'>{service.title}</h3>
                            <p className='text-white'>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
