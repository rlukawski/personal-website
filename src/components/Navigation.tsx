import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import { navItems, scrollToSection } from '../utils/navigation';

// Single breakpoint configuration for mobile menu
// Change this to 'sm' | 'md' | 'lg' | 'xl' | '2xl' to adjust when mobile menu appears
const MOBILE_BREAKPOINT = 'lg' as const;

// Tailwind requires complete class names to be present in source code
const breakpointClasses = {
  sm: {
    navHidden: 'hidden sm:flex',
    menuButton: 'sm:hidden',
    dialog: 'sm:hidden',
    padding: 'px-4 sm:px-12',
  },
  md: {
    navHidden: 'hidden md:flex',
    menuButton: 'md:hidden',
    dialog: 'md:hidden',
    padding: 'px-4 md:px-12',
  },
  lg: {
    navHidden: 'hidden lg:flex',
    menuButton: 'lg:hidden',
    dialog: 'lg:hidden',
    padding: 'px-4 lg:px-12',
  },
  xl: {
    navHidden: 'hidden xl:flex',
    menuButton: 'xl:hidden',
    dialog: 'xl:hidden',
    padding: 'px-4 xl:px-12',
  },
  '2xl': {
    navHidden: 'hidden 2xl:flex',
    menuButton: '2xl:hidden',
    dialog: '2xl:hidden',
    padding: 'px-4 2xl:px-12',
  },
} as const;

const classes = breakpointClasses[MOBILE_BREAKPOINT];

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(navItems[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`w-full flex items-center justify-between ${classes.padding} py-2 sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm`}>
        <p 
          className="heading-1 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Rafał Łukawski
        </p>
        
        {/* Desktop Navigation */}
        <ul className={`${classes.navHidden} gap-4 text-lg`}>
          {navItems.map((item) => {
            const isCurrent = currentSection === item.id;
            return (
              <li
                key={item.id}
                className="cursor-pointer hover:text-gray-600 transition-colors relative inline-block"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="invisible font-bold whitespace-nowrap" aria-hidden="true">
                  {t(item.labelKey)}
                </span>
                <span className={`absolute left-0 top-0 whitespace-nowrap ${isCurrent ? 'font-bold' : ''}`}>
                  {t(item.labelKey)}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Language Switcher */}
        <ul className={`${classes.navHidden} gap-2`}>
          <li
            className={`cursor-pointer hover:text-gray-600 transition-colors ${i18n.language === 'pl' ? 'font-bold' : ''}`}
            onClick={() => i18n.changeLanguage('pl')}
          >
            PL
          </li>
          <li
            className={`cursor-pointer hover:text-gray-600 transition-colors ${i18n.language === 'en' ? 'font-bold' : ''}`}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`${classes.menuButton} flex flex-col gap-1.5 p-2`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-gray-900" />
          <span className="block w-6 h-0.5 bg-gray-900" />
          <span className="block w-6 h-0.5 bg-gray-900" />
        </button>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog 
        open={isMobileMenuOpen} 
        onClose={setIsMobileMenuOpen}
        className={`relative z-50 ${classes.dialog}`}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        
        <div className="fixed inset-0 flex items-start justify-end">
          <DialogPanel className="h-full w-64 bg-white shadow-xl">
            <div className="flex flex-col h-full p-6">
              <button
                className="self-end mb-8 p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <ul className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={`cursor-pointer hover:text-gray-600 transition-colors text-xl ${
                      currentSection === item.id ? 'font-bold' : ''
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {t(item.labelKey)}
                  </li>
                ))}
              </ul>

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
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
