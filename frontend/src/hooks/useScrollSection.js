import { useState, useEffect } from 'react';
import { getActiveSection } from '../utils/scroll';

export const useScrollSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getActiveSection();
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}; 