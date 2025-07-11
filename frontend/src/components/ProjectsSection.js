import React from 'react';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Projects I'm proud of</p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 bg-white/10 text-purple-300 rounded-xl text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <button className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    View Live
                  </button>
                  <button className="px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 