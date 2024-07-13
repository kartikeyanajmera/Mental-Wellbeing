import React from 'react';
import { useEffect, useState } from 'react';

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="topbar" className={`flex items-center fixed top-0 left-0 w-full transition-all duration-500 z-[996] ${scrolled ? 'topbar-scrolled' : ''}`}>
      <div className="container mx-auto flex justify-between">
        <div className="contact-info flex items-center space-x-4">
          <i className="bi bi-envelope"></i> 
          <a href="mailto:kartikeyan15ajmera@gmail.com" className="leading-none text-gray-700 transition-colors duration-300 hover:text-blue-700">kartikeyan15ajmera@gmail.com</a>
          <i className="bi bi-phone"></i> 
          <span>+91 9358899721</span>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-blue-900 pl-4 inline-block leading-none transition-colors duration-300 hover:text-blue-700"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-blue-900 pl-4 inline-block leading-none transition-colors duration-300 hover:text-blue-700"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-blue-900 pl-4 inline-block leading-none transition-colors duration-300 hover:text-blue-700"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-blue-900 pl-4 inline-block leading-none transition-colors duration-300 hover:text-blue-700"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
