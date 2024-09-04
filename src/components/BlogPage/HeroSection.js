import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/da3u4ukxz/image/upload/v1725450998/mountain_jqywsd.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black"></div>
      
      <div className="absolute hidden lg:block top-0 left-0 pt-28 px-8">
        <div className="flex flex-col items-center space-y-4">
          <Link to="#" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform">
            <FaTwitter size={24} />
          </Link>
          <Link to="#" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform">
            <FaInstagram size={24} />
          </Link>
          <Link to="#" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform">
            <FaFacebook size={24} />
          </Link>
        </div>
        <div className="text-white mt-10 -rotate-90 tracking-wide">
          Follow Us
        </div>
      </div>
      <div className="relative z-10 text-start mx-auto mb-24 text-white">
        <h1 className="sm:text-5xl  hidden sm:flex font-bold">Be Prepared For The</h1>
        <h1 className="sm:text-5xl hidden  sm:flex font-bold">Mountains And Beyond!</h1>
<h1 className='text-center text-4xl p-3 sm:hidden font-bold '>Be Prepared For The Mountains And Beyond!</h1>
        <p className="mt-24 text-xl text-center  text-black font-semibold flex-col items-center justify-center scroll-animation">
        Scroll down <FiArrowDown size={24} className="mx-auto mt-2 scroll-animation" />
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
