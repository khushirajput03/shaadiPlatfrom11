import React from 'react';

export const HomeMessageForm = () => {
  return (
    <div
      className="min-h-[90vh] bg-[#f9f8f8] bg-center flex flex-col items-center md:items-end px-4 py-16"
      style={{
        backgroundImage: "url('/messageFormImage (1).png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-3xl md:text-4xl mr-60 font-forum text-center md:text-right mb-8 text-white w-full md:pr-16">
        SEND A MESSAGE
      </h2>

      <div className="w-full max-w-xl bg-white/90 p-6 sm:p-8 rounded-md">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-[#601221]">Your Name</label>
            <input
              type="text"
              id="name"
              className="p-3 border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-[#601221]">Your Phone</label>
            <input
              type="tel"
              id="phone"
              className="p-3 border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="mb-1 text-[#601221]">Date of Function</label>
            <input
              type="date"
              id="date"
              className="p-3 border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gathering" className="mb-1 text-[#601221]">Gathering Size</label>
            <input
              type="text"
              id="gathering"
              className="p-3 border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="location" className="mb-1 text-[#601221]">Preferred Location *</label>
            <input
              type="text"
              id="location"
              className="p-3 border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="budget" className="mb-1 text-[#601221]">Your Budget</label>
            <input
              type="text"
              id="budget"
              className="p-3 border-b border-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-1 text-[#601221]">Tell Us More</label>
            <textarea
              id="message"
              className="p-3 border-b border-gray-400 bg-transparent focus:outline-none resize-none h-28"
            ></textarea>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-[#601221] text-white py-3 mt-4 hover:bg-[#801b2e] transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
