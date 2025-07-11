import React from 'react';
import { skills } from '../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                <div className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
              alt="Technology"
              className="relative max-w-md w-full rounded-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 