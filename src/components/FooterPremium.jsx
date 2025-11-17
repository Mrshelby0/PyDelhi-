import React from 'react';
import logo from '../assets/pydelhi_community_logo.jpeg';

export default function FooterPremium() {
  return (
    <footer className="bg-dark-gray text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center font-bold">
                <img src={logo} alt="PyDelhi Logo" className="w-full h-full object-cover" loading="lazy" decoding="async" width={40} height={40} />
              </div>
              <span className="font-bold text-xl">PyDelhi</span>
            </div>
            <p className="text-gray-400 text-sm">Building India's most vibrant Python community since 2018.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Meetups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Guidelines</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contribute</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-primary flex items-center justify-center transition">🐙</a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-primary flex items-center justify-center transition">𝕏</a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-primary flex items-center justify-center transition">💬</a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-primary flex items-center justify-center transition">▶️</a>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 mb-8" />

        {/* Bottom */}
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p>© 2025 PyDelhi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
