import React from "react";
import { RiGeminiFill } from "react-icons/ri";

export const TextSection = ({ title, paragraphs }) => {
  return (
    <div className="px-6 md:px-24  mt-24 mb-20 bg-[#fffaf7] text-gray-400 font-forum">
      <RiGeminiFill className="text-gray-400 text-4xl mb-4" />

      <h2 className="text-3xl md:text-5xl text-[#601221] mb-6 ">
        {title}
      </h2>

      {paragraphs.map((text, index) => (
        <p key={index} className="italic text-lg mb-10 mt-16 font-forum">
          {text}
        </p>
      ))}
    </div>
  );
};
