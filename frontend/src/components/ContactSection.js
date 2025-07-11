import React from 'react';
import { contactInfo } from '../data/contact';

const ContactSection = () => {
  return (
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
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-colors duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center`}>
                      <span className="text-white text-xl">{contact.icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{contact.type}</p>
                      <p className="text-gray-300">{contact.value}</p>
                    </div>
                  </div>
                ))}
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
  );
};

export default ContactSection; 