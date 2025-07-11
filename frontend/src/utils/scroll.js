export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const getActiveSection = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 100;
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      
      if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
        return section;
      }
    }
  }
  
  return 'home';
}; 