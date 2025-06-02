import React from 'react'
import { RiGeminiFill } from "react-icons/ri";
import { IoIosFlag } from "react-icons/io";
import { CiMap } from "react-icons/ci";
import { FaPen } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Card = ({ title, description, width, descClass, specialTitles, icon }) => {
  return (
    <a
      href="#" 
      className={`block ${width} p-10  bg-white shadow-sm border border-[#601221] font-forum`}
    >
       
    <h5
  className={`mb-2 text-[#601221] flex items-center gap-2 ${specialTitles.includes(title) ? 'text-xl' : 'text-4xl'}`}
>
  {icon && <span className="text-2xl text-gray-400">{icon}</span>}
  <span>{title}</span>
</h5>

      <p className={`font-normal mt-8 ${descClass}`}>{description}</p>
    </a>
  );
};

export const AboutCards = () => {

  const cardData = [
    {
      title: 'OUR PURPOSE',
      description: 'Our cause is to allow everybody to cherish the moments that define us.',
      width: 'md:w-[48%] w-full'
    },
    {
      title: 'OUR VISION',
      description: 'Our vision is to ensure everyone around the world is empowered to create celebrations that are true to them for the moments most crucial to them.',
      width: 'md:w-[48%] w-full'
    },
    {
      icon:<IoIosFlag />,
      title: 'Our Value',
      description: 'We mixture consider, creativity, and attention to detail—so each ritual, moment, and reminiscence displays your love tale fantastically.',
      width: 'md:w-[27vw] w-full'
    },
    {
      icon:<CiMap />,
      title: 'Trusted Venue Partners',
      description: 'From royal palaces to beachside hotels, we deliver you handpicked venues that match your vibe, guest list, and wedding goals.',
      width: 'md:w-[27vw] w-full'
    },
    {
      icon:<GiWallet />,
      title: 'Budget Brilliance',
      description: 'Stunning weddings, clever budgets. We layout magical reviews that look grand—without going overboard.”',
      width: 'md:w-[27vw] w-full'
    },
    {
      icon:<FaPen />,
      title: 'Our Signature Style',
      description: 'Personalized principles, trend-placing designs, ideal info—every wedding ceremony we craft is uniquely “you.”',
      width: 'md:w-[27vw] w-full'
    },
    {
      icon:<IoEyeOutline />,
      title: 'Our Manifesto',
      description: 'We trust weddings aren’t just occasions—they’re feelings. Every element must mirror you—your tale, your style, your love.”',
      width: 'md:w-[27vw] w-full'
    },
    {
      icon:<FaUserFriends />,
      title: 'Our Promise',
      description: ' From “sure” to “I do,” we’ll be by your facet with honesty, creativity, and pure dedication.',
      width: 'md:w-[27vw] w-full'
    }
  ];

  const specialTitles = [
    'Our Value',
    'OUR VALUE',
    'Trusted Venue Partners',
    'Budget Brilliance',
    'Our Signature Style',
    'Our Manifesto',
    'Our Promise'
  ];

  return (
    <div className="md:px-24 sm:px-6 px-4 sm:mb-4">
      <RiGeminiFill className="text-gray-400 text-4xl mb-4" />
      <div className="md:flex flex-wrap gap-6">
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            width={item.width}
            specialTitles={specialTitles} 
            icon={item.icon}
            descClass={specialTitles.includes(item.title)
              ? 'text-[14px] mt-6 font-semibold  dark:text-gray-500 font-forum'
              : 'text-gray-700 dark:text-gray-400 font-forum'}
          />
        ))}
      </div>
    </div>
  );
};
