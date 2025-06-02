import React from 'react';
import { RiGeminiFill } from "react-icons/ri";

export function About2Part() {
  return (
    <section className="py-12  px-6 md:px-20 bg-white font-forum">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
     
        <div className="w-full md:w-1/2 md:sticky top-1">
          <img
            src="about-left.png"
            alt="Lifetime of Love"
            className="w-full h-auto shadow-lg"
          />
        </div>

       
        <div className="w-full md:w-1/2 text-center md:text-left part-2-text">
         <RiGeminiFill className='text-gray-400 text-4xl mb-4' />
          <h2 className="text-3xl md:text-5xl  text-[#601221] mb-6 leading-tight text-content">
         
            One Click to a Lifetime of Love
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed text-content-para">
           With over a hundred love stories brought to life beneath starlit skies and blooming arches, Shaadi Platform has become more than a wedding planner; we are weavers of dreams, curators of joy, and storytellers of the heart.  
<br/><br/>
At Shaadi Platform, we believe a wedding is not just an event; it’s a soul-stirring celebration of love, a beautiful beginning of forever. Every couple is a new poem, and every ceremony we craft is a verse written with passion, grace, and meaning.  
<br/><br/>
We don’t just plan weddings; we breathe life into them.  
<br/><br/>
From the soft rustle of silk to the gentle flicker of candlelight, from the echo of laughter in a palace hall to the quiet promise shared by the sea, we transform moments into memories and dreams into dazzling realities. As the best wedding planner in India, our artistry lies in the details: the unseen, the felt, the unforgettable.  
<br/><br/>
Our dedicated team, driven by heart and guided by years of experience, understands that love is not one-size-fits-all. Whether your heart yearns for a quiet mountaintop vow, a regal ballroom filled with opulence, or a sunset kiss on sandy shores, we are here to make it happen exquisitely, effortlessly, and memorably.  
<br/><br/>
Because your wedding is not just a day.  
<br/><br/>
It is a promise.  
<br/><br/>
A dance of destinies.  
<br/><br/>
A celebration of everything that makes your Dream Love Story.  
<br/><br/>
At Shaadi Platform, we don’t just plan weddings; we create moments that remain long after the ultimate petal falls.
          </p>
          <button className='bg-white text-[#601221] p-2 pl-10 pr-10 mt-5 text-center border border-gray-300 hover:border-[#601221] transition duration-1000 ease'>
          Contact Us
        </button>
        </div>
      </div>
    </section>
  );
}


