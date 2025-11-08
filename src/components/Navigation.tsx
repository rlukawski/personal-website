import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const navItems = [
  { labelKey: 'nav.home', id: 'home' },
  { labelKey: 'nav.about', id: 'about' },
  { labelKey: 'nav.experience', id: 'experience' },
  { labelKey: 'nav.skills', id: 'skills' },
  { labelKey: 'nav.certificates', id: 'certificates' },
  { labelKey: 'nav.contact', id: 'contact' },
];

export const Navigation = () => {
  const { t, i18n } = useTranslation();
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
                {t(item.labelKey)}
              </span>
              <span
                className={`absolute left-0 top-0 ${
                  isCurrent ? 'font-bold' : ''
                }`}
              >
                {t(item.labelKey)}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2">
        <li
          className={`cursor-pointer hover:text-gray-600 transition-colors ${
            i18n.language === 'pl' ? 'font-bold' : ''
          }`}
          onClick={() => i18n.changeLanguage('pl')}
        >
          PL
        </li>
        <li
          className={`cursor-pointer hover:text-gray-600 transition-colors ${
            i18n.language === 'en' ? 'font-bold' : ''
          }`}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </li>
      </ul>
    </div>
  );
};
