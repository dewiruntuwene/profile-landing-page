import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'AWS', 'Docker'
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern React frontend and Node.js backend.',
      tech: ['React', 'Node.js', 'MongoDB'],
      year: '2024'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team workspaces.',
      tech: ['React', 'TypeScript', 'Express'],
      year: '2024'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chat assistant with natural language processing capabilities.',
      tech: ['Python', 'TensorFlow', 'Flask'],
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold text-gray-900">
              Dee
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-700">D</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Hi, I'm Dee
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Software Engineer focused on crafting clean, efficient solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-colors duration-200"
            >
              View Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-sm hover:border-gray-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">About</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate software engineer with expertise in modern web technologies. 
                  I focus on writing clean, maintainable code and creating intuitive user experiences.
                </p>
                <p>
                  My approach combines technical excellence with practical problem-solving, 
                  ensuring every project delivers real value.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576272531110-2a342fe22342" 
                alt="Workspace"
                className="w-full h-80 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16 text-center">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={skill} className="text-center">
                <div className="p-6 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors duration-200">
                  <h3 className="text-gray-700 font-medium">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16 text-center">Projects</h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-gray-200 pb-16 last:border-b-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-sm hover:bg-blue-700 transition-colors duration-200">
                      View Project
                    </button>
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-sm hover:border-gray-400 transition-colors duration-200">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16 text-center">Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-8">Get in touch</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-900 font-medium mb-1">Email</p>
                  <p className="text-gray-600">dee@example.com</p>
                </div>
                <div>
                  <p className="text-gray-900 font-medium mb-1">LinkedIn</p>
                  <p className="text-gray-600">linkedin.com/in/dee</p>
                </div>
                <div>
                  <p className="text-gray-900 font-medium mb-1">GitHub</p>
                  <p className="text-gray-600">github.com/dee</p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Dee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;