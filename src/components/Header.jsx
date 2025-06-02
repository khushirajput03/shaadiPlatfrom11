import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-[#601221] z-5 relative header">
      <div className="flex items-center mt-2 md:ml-[120px] sm:ml-2 ml-2 pr-4">
        
  
        <Link to="/">
          <img src="shadilogo.png" width={100} className="md:mb-3 md:mr-[190px] mr-4" alt="logo" />
        </Link>

    
        <nav className="space-x-8 navbar gap-10 hidden md:flex">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/service">SERVICE</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/BlogsandNews">BLOGS & NEWS</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

    
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col  transition-all duration-500 ease-in-out  space-y-3 px-4 mt-3 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)}>SERVICE</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</Link>
          <Link to="/BlogsandNews" onClick={() => setMenuOpen(false)}>BLOGS & NEWS</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </nav>
      )}
    </header>
  );
};
