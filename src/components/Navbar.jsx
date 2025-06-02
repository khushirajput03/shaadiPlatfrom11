import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#601221] text-white relative z-50 px-4 py-2 md:py-5 font-forum">

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center relative py-4">
        <div className="flex space-x-28 absolute left-20 top-1/2 -translate-y-1/2 ml-60">
          <Link to="/about">ABOUT</Link>
          <Link to="/service">SERVICES</Link>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2">
          <Link to="/">
            <img src="logo.png" alt="logo" className="w-[100px] h-auto" />
          </Link>
        </div>

        <div className="flex space-x-24 absolute right-1 top-1/2 -translate-y-1/2 mr-72">
          <Link to="/Portfolio">PORTFOLIO</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>

      {/* Mobile Top Bar with reduced padding on small screens */}
      <div className="md:hidden flex justify-between items-center py-2">
        <Link to="/">
          <img src="logo.png" alt="logo" className="w-[70px]" />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {/* Dropdown Menu — untouched as you requested */}
      {menuOpen && (
        <nav className="flex flex-col space-y-3 px-4 pb-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link to="/Portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </nav>
      )}
    </header>
  );
};
