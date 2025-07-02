import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-purple-500' },
    { name: 'TypeScript', icon: '💎', color: 'from-blue-600 to-indigo-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-500' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-pink-500' },
    { name: 'Docker', icon: '🐳', color: 'from-cyan-400 to-blue-500' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with seamless user experience and powerful admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Live',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative workspace with real-time updates and intuitive drag-and-drop interface.',
      tech: ['React', 'TypeScript', 'Express', 'Socket.io'],
      status: 'Beta',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent conversational AI with natural language processing and learning capabilities.',
      tech: ['Python', 'TensorFlow', 'Flask', 'OpenAI'],
      status: 'Demo',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dee
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
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

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a <span className="text-white font-semibold">passionate software engineer</span> who loves turning complex problems into elegant solutions. My code is clean, my designs are thoughtful, and my coffee is strong.
                </p>
                <p>
                  With expertise in modern web technologies and a keen eye for user experience, I create applications that not only work flawlessly but also delight users.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">🎯</span>
                  <span className="text-purple-300">Problem Solver</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">🚀</span>
                  <span className="text-pink-300">Innovation Driven</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">⚡</span>
                  <span className="text-blue-300">Performance Focused</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1576272531110-2a342fe22342" 
                alt="Workspace"
                className="relative w-full h-96 object-cover rounded-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
            {skills.map((skill, index) => (
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

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Build Something
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Ready to bring your ideas to life?</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white">Get in touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">dee@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">LinkedIn</p>
                      <p className="text-gray-300">linkedin.com/in/dee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🐙</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">GitHub</p>
                      <p className="text-gray-300">github.com/dee</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea 
                    rows="5" 
                    placeholder="Your Message"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message ✨
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Dee. Crafted with 💜 and lots of caffeine.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;