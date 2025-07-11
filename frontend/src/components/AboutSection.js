import React from 'react';

const AboutSection = () => {
  const traits = [
    { icon: '🎯', text: 'Problem Solver', color: 'text-purple-300' },
    { icon: '🚀', text: 'Innovation Driven', color: 'text-pink-300' },
    { icon: '⚡', text: 'Performance Focused', color: 'text-blue-300' }
  ];

  return (
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
              {traits.map((trait, index) => (
                <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">{trait.icon}</span>
                  <span className={trait.color}>{trait.text}</span>
                </div>
              ))}
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
  );
};

export default AboutSection; 