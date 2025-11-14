import React from 'react';

export default function MobileNav({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Mobile Menu */}
      <div className="absolute top-16 right-0 left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <nav className="flex flex-col">
          <a
            href="#events"
            className="px-6 py-4 border-b border-gray-100 hover:bg-primary/5 transition-colors font-medium text-gray-800"
            onClick={onClose}
          >
            📅 Events
          </a>
          <a
            href="#team"
            className="px-6 py-4 border-b border-gray-100 hover:bg-primary/5 transition-colors font-medium text-gray-800"
            onClick={onClose}
          >
            � Team
          </a>
          <a
            href="#blog"
            className="px-6 py-4 border-b border-gray-100 hover:bg-primary/5 transition-colors font-medium text-gray-800"
            onClick={onClose}
          >
            📝 Blog
          </a>
          <a
            href="#sponsors"
            className="px-6 py-4 hover:bg-primary/5 transition-colors font-medium text-gray-800"
            onClick={onClose}
          >
            💼 Sponsors
          </a>

          {/* CTA Button */}
          <div className="px-6 py-4 border-t border-gray-100">
            <button className="w-full px-6 py-3 rounded-lg bg-gradient-primary text-white font-bold hover:shadow-lg transition-all">
              ✨ Register Now
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
