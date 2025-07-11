import React from 'react';
import { scrollToSection } from '../utils/scroll';

const Navigation = ({ activeSection }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dee
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 relative ${
                  activeSection === item 
                    ? 'text-purple-400' 
                    : 'text-gray-300'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 