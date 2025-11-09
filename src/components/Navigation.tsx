import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navItems, scrollToSection } from '../utils/navigation';

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between px-4 md:px-12 py-2 sticky top-0 z-10 bg-transparent backdrop-blur-sm shadow-sm">
        <p 
          className="heading-1 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Rafał Łukawski
        </p>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 text-lg">
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

        {/* Language Switcher */}
        <ul className="hidden md:flex gap-2">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            className="self-end mb-8 p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Navigation Items */}
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isCurrent = currentSection === item.id;
              
              return (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-gray-600 transition-colors text-xl ${
                    isCurrent ? 'font-bold' : ''
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {t(item.labelKey)}
                </li>
              );
            })}
          </ul>

          {/* Mobile Language Switcher */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Language</p>
            <ul className="flex gap-4">
              <li
                className={`cursor-pointer hover:text-gray-600 transition-colors text-lg ${
                  i18n.language === 'pl' ? 'font-bold' : ''
                }`}
                onClick={() => i18n.changeLanguage('pl')}
              >
                PL
              </li>
              <li
                className={`cursor-pointer hover:text-gray-600 transition-colors text-lg ${
                  i18n.language === 'en' ? 'font-bold' : ''
                }`}
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
