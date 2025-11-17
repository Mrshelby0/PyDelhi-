import React, { useState, useEffect } from 'react';
import logo from '../assets/pydelhi_community_logo.jpeg';


export default function HeaderPremium({ onToggleMobile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg border-b border-gray-100' 
        : 'bg-white/70 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <a href="." className="flex items-center gap-3 group" aria-label="Go to top">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
            <img src={logo} alt="PyDelhi Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-lg text-gradient">PyDelhi</div>
            <div className="text-xs text-gray-600">Python Community</div>
          </div>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex gap-8">
          {['Events', 'Team', 'Blog', 'Sponsors'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 font-500 hover:text-gradient transition-all relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-4">
          <a href="https://github.com/pydelhi" className="btn btn-secondary">
            GitHub
          </a>
          <a href="#join" className="btn btn-primary">
            Join Us
          </a>
        </div>

      </div>

      {/* Mobile Menu Toggle - absolutely positioned so it cannot be pushed off-screen */}
      <button onClick={onToggleMobile} aria-label="Toggle navigation" className="lg:hidden absolute right-3 top-3 btn btn-icon" type="button">
        <span aria-hidden="true">☰</span>
      </button>
    </header>
  );
}
