import React from "react";
import { TextSection } from "./TextSection";

const aboutFounderText = [
  "Meet Shivani Sharma – The Heart Behind Shaadi Platform",
  "Shaadi Platform was born out of a dream to make each wedding truly unforgettable. Our founder, Shivani, envisioned a space where tradition meets technology, and where finding the perfect wedding solution is as joyful as the celebration itself.",
  "With a passion for romance stories and a deep understanding of the modern couple’s needs, Shivani created Shaadi Platform as more than just a platform; it’s a trusted partner on the journey to “happily ever after.” From finding the right venue to selecting the perfect photographer, each detail on Shaadi is carefully curated to make your big day seamless and special.",
  "Backed by a team that shares her vision, Shivani continues to lead Shaadi Platform with heart, innovation, and an unwavering commitment to helping couples celebrate love beautifully."
];

const aboutTeamText = [
  "We are a passionate team of wedding experts committed to creating luxury celebrations that are a true reflection of your style and story. With over a decade of experience in high-end wedding planning, bespoke design, outstanding photography, and exceptional venue selection, we focus on curating timeless and unforgettable events.  ",
  "From your very first consultation to the final toast, we take care of every detail with precision, elegance, and genuine care. Our purpose is straightforward: to transform your vision into a flawless celebration of love.  ",
  "Let us craft your once-in-a-lifetime experience—beautifully, seamlessly, and just the way you imagined."
];

export const AboutFounder = () => {
  return (
    <>
      <TextSection title="ABOUT THE FOUNDER" paragraphs={aboutFounderText} />
      <TextSection title="OUR TEAM" paragraphs={aboutTeamText} />
    </>
  );
};
