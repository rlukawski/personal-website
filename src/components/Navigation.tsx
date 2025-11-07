import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export const Navigation = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      // Find the section that's currently in view
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(navItems[i].id);
          break;
        }
      }
    };

    // Set initial section
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-12 py-2 sticky top-0 z-10 bg-transparent backdrop-blur-sm shadow-sm">
      <p 
        className="text-gray-800 text-3xl font-bold cursor-pointer"
        onClick={() => scrollToSection('home')}
      >
        Rafał Łukawski
      </p>
      <ul className="flex gap-6 text-lg">
        {navItems.map((item) => {
          const isCurrent = currentSection === item.id;
          
          return (
            <li
              key={item.id}
              className="cursor-pointer hover:text-gray-600 transition-colors relative inline-block"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="invisible font-bold" aria-hidden="true">
                {item.label}
              </span>
              <span
                className={`absolute left-0 top-0 ${
                  isCurrent ? 'font-bold' : ''
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2">
        <li>PL</li>
        <li>EN</li>
      </ul>
    </div>
  );
};
