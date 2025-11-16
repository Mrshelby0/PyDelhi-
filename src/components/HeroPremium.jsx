import React, { useEffect, useRef, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export default function HeroPremium() {
  const imgRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { count: count1, counterRef: ref1 } = useCounter(7, 2000);
  const { count: count2, counterRef: ref2 } = useCounter(1300, 2200);
  const { count: count3, counterRef: ref3 } = useCounter(180, 2400);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = '/src/assets/python_community_hero.jpg';
    img.onload = () => {
      if (imgRef.current) {
        imgRef.current.src = img.src;
        imgRef.current.classList.add('loaded');
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3776AB" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="fade-in-up">
          <div className="inline-block mb-6">
            <span className="badge badge-light">🎉 Join 1.3K+ Pythonistas</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-gradient">PyDelhi</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            India's most vibrant Python community. Learn, connect, and build amazing things together with workshops, mentorship, and collaborative sprints.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#events" className="pill">
              <span>🚀</span>
              Explore Events
            </a>
            <a href="#team" className="pill opacity-70 hover:opacity-100">
              <span>👥</span>
              Meet Team
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div ref={ref1} className="card-gradient p-4 text-center rounded-lg">
              <div className="text-3xl font-bold text-gradient">{count1}</div>
              <div className="text-sm text-gray-600 mt-1">Event Days</div>
            </div>
            <div ref={ref2} className="card-gradient p-4 text-center rounded-lg">
              <div className="text-3xl font-bold text-gradient">{count2 >= 1000 ? (count2 / 1000).toFixed(1) + 'K' : count2}</div>
              <div className="text-sm text-gray-600 mt-1">Attendees</div>
            </div>
            <div ref={ref3} className="card-gradient p-4 text-center rounded-lg">
              <div className="text-3xl font-bold text-gradient">{count3}+</div>
              <div className="text-sm text-gray-600 mt-1">Speakers</div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="slide-in-right relative h-96">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 backdrop-blur-sm">
            <img 
              ref={imgRef} 
              className="w-full h-full object-cover" 
              alt="PyDelhi Community" 
              src="src/assets/3.jpg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400/80 rounded-full flex items-center justify-center text-3xl float shadow-lg">
            🐍
          </div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-400/60 rounded-full flex items-center justify-center text-4xl float shadow-lg" style={{ animationDelay: '1s' }}>
            💻
          </div>
        </div>
      </div>
    </section>
  );
}
