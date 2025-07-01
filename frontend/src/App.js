import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
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
    { name: 'JavaScript', level: 95, icon: '⚡' },
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Python', level: 88, icon: '🐍' },
    { name: 'TypeScript', level: 82, icon: '💙' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'AWS', level: 75, icon: '☁️' },
    { name: 'Docker', level: 78, icon: '🐳' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Live'
    },
    {
      title: 'Task Management App',
      description: 'Modern task management application with real-time collaboration, drag-and-drop functionality, and team workspaces.',
      tech: ['React', 'TypeScript', 'Express', 'Socket.io'],
      status: 'In Progress'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chat assistant powered by machine learning algorithms with natural language processing capabilities.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Dee
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item 
                      ? 'text-blue-400 border-b-2 border-blue-400' 
                      : 'text-gray-300'
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3" 
            alt="Code background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-blue-400/50 p-1 mb-6 animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                D
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              Dee
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Software Engineer crafting digital experiences through innovative code and elegant solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software engineer with a love for creating innovative digital solutions. With expertise in modern web technologies and a keen eye for user experience, I transform complex problems into elegant, functional applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in software development spans across full-stack development, cloud architecture, and emerging technologies. I believe in writing clean, maintainable code that makes a difference.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-xl">🎯</span>
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <span className="text-xl">🚀</span>
                  <span>Innovation Driven</span>
                </div>
                <div className="flex items-center gap-2 text-pink-400">
                  <span className="text-xl">⚡</span>
                  <span>Performance Focused</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576272531110-2a342fe22342" 
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="text-white font-semibold mb-3">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
              alt="Technology illustration"
              className="mx-auto rounded-2xl shadow-2xl max-w-md w-full opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and passion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : project.status === 'In Progress'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 text-sm font-medium">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to work together? Let's discuss your next project
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">dee@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-gray-400">linkedin.com/in/dee</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🐙</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <p className="text-gray-400">github.com/dee</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    rows="4" 
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Dee. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;