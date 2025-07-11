import React from 'react';
import './styles/globals.css';
import { useScrollSection, useMousePosition } from './hooks';
import {
  Navigation,
  CursorFollower,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer
} from './components';

const App = () => {
  const activeSection = useScrollSection();
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      <CursorFollower mousePosition={mousePosition} />
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;