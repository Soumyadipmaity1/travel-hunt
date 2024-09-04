import React, { useState } from 'react';
import { FaUser, FaSearch } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { MdLanguage } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'bg-[#99BC85] text-black font-medium' : '';

  return (
    <nav className="fixed w-full z-50  text-white p-4 ">
      <div className="mx-auto flex items-center justify-between lg:justify-center space-x-4">

        <div className="text-lg font-bold text-white">
          <a href="#">TravelHunt</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-white/10 rounded-full p-1 px-[12px] backdrop-blur-md space-x-4">
          <div className="flex items-center py-2">
            <NavLink
              exact
              to="/"
              className={`hover:text-black hover:font-medium px-3 rounded-full py-2 text-[15px] hover:bg-[#99BC85] ${isActive('/')}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/accommodation"
              className={`hover:text-black hover:font-medium px-3 rounded-full py-2 text-[15px] hover:bg-[#99BC85] ${isActive('/accommodation')}`}
            >
              Accommodations
            </NavLink>
            <NavLink
              to="/plan-your-trip"
              className={`hover:text-black hover:font-medium px-3 rounded-full py-2 text-[15px] hover:bg-[#99BC85] ${isActive('/plan-your-trip')}`}
            >
              Plan Your Trip
            </NavLink>
            <NavLink
              to="/blog"
              className={`hover:text-black hover:font-medium px-3 rounded-full py-2 text-[15px] hover:bg-[#99BC85] ${isActive('/blog')}`}
            >
              Blog
            </NavLink>
            <NavLink
              to="/community"
              className={`hover:text-black hover:font-medium px-3 rounded-full py-2 text-[15px] hover:bg-[#99BC85] ${isActive('/community')}`}
            >
              Community
            </NavLink>
            <NavLink
              to="/local-guides"
              className={`hover:text-black hover:font-medium px-3 rounded-full py-2 text-[15px] hover:bg-[#99BC85] ${isActive('/local-guides')}`}
            >
              Local Guides
            </NavLink>
          </div>
          <div className="flex items-center bg-[#595B66] py-2 rounded-full px-1.5">
            <MdLanguage size={18} className="text-white mr-2" />
            <span className="text-white text-[15px]">IND | ENG</span>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-[#1a1a1a] p-4 px-6 rounded-full">
          <FaUser size={18} className="text-white mr-3" />
          <NavLink to="/login" className="text-white text-[15px]">Sign In</NavLink>
        </div>

        <div className="hidden md:flex items-center border border-gray-500 text-[15px] h-12 rounded-lg">
          <FaSearch size={25} className="text-black bg-[#99BC85] p-1 mx-2 rounded-sm" />
          <input
            type="text"
            placeholder="Search for specific"
            className="bg-transparent text-white focus:outline-none"
          />
        </div>

        <div className="md:hidden flex items-center z-50">
          {isMobileMenuOpen ? (
            <FiX size={24} onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <FiMenu size={24} onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md text-white flex flex-col items-center justify-center p-4 space-y-4 mt-4 rounded-lg">
          <NavLink
            exact
            to="/"
            className={`hover:text-gray-400 hover:bg-[#99BC85] px-5 py-2 rounded-full ${isActive('/')}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/accommodation"
            className={`hover:text-gray-400 hover:bg-[#99BC85] px-5 py-2 rounded-full ${isActive('/accommodation')}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accommodations
          </NavLink>
          <NavLink
            to="/plan-your-trip"
            className={`hover:text-gray-400 hover:bg-[#99BC85] px-5 py-2 rounded-full ${isActive('/plan-your-trip')}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Plan Your Trip
          </NavLink>
          <NavLink
            to="/blog"
            className={`hover:text-gray-400 hover:bg-[#99BC85] px-5 py-2 rounded-full ${isActive('/blog')}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/community"
            className={`hover:text-gray-400 hover:bg-[#99BC85] px-5 py-2 rounded-full ${isActive('/community')}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Community
          </NavLink>
          <NavLink
            to="/local-guides"
            className={`hover:text-gray-400 hover:bg-[#99BC85] px-5 py-2 rounded-full ${isActive('/local-guides')}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Local Guides
          </NavLink>
          <div className="flex items-center space-x-2">
            <FaUser size={20} />
            <span>Sign in</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
