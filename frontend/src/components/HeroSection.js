import React from 'react';
import { scrollToSection } from '../utils/scroll';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
            <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">D</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Hi, I'm
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Dee
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Software Engineer crafting <span className="text-purple-400 font-semibold">digital experiences</span> that matter
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float-delay"></div>
    </section>
  );
};

export default HeroSection; 