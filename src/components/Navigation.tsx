import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import { navItems, scrollToSection } from '../utils/navigation';

// Single breakpoint configuration for mobile menu
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

// Custom hook for section tracking
const useActiveSection = () => {
  const [currentSection, setCurrentSection] = useState<string>('');

  useEffect(() => {
    const sectionVisibility = new Map<string, number>();

    const updateHash = (section: string) => {
      const newHash = section ? `#${section}` : '';
      const currentHash = window.location.hash;
      
      if (section && currentHash !== newHash) {
        history.replaceState(null, '', newHash);
      } else if (!section && currentHash) {
        history.replaceState(null, '', window.location.pathname);
      }
    };

    const findMostVisibleSection = () => {
      let maxVisibility = -1;
      let mostVisibleSection = '';

      navItems.forEach((item) => {
        const visibility = sectionVisibility.get(item.id);
        if (visibility !== undefined && visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = item.id;
        }
      });

      return mostVisibleSection;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionVisibility.set(entry.target.id, entry.intersectionRatio);
          } else {
            sectionVisibility.delete(entry.target.id);
          }
        });

        const mostVisible = findMostVisibleSection();
        setCurrentSection(mostVisible);
        updateHash(mostVisible);
      },
      {
        rootMargin: '-100px 0px -50% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Set initial section from hash
    const initialHash = window.location.hash.slice(1);
    if (initialHash && navItems.some((item) => item.id === initialHash)) {
      setCurrentSection(initialHash);
    }

    return () => observer.disconnect();
  }, []);

  return currentSection;
};

// Language Switcher Component
const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const navigate = useNavigate();
  const { lang: currentLang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  
  const switchLanguage = useCallback((lang: string) => {
    const hash = window.location.hash;
    navigate(`/${lang}${hash}`, { replace: true });
  }, [navigate]);

  const activeLang = currentLang || i18n.language;

  return (
    <ul className={`gap-2 ${className}`}>
      {['pl', 'en'].map((lang) => (
        <li
          key={lang}
          className={`cursor-pointer hover:text-gray-600 transition-colors ${
            activeLang === lang ? 'font-bold' : ''
          }`}
          onClick={() => switchLanguage(lang)}
        >
          {lang.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

// Mobile Menu Button Component
const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className={`${classes.menuButton} flex flex-col gap-1.5 p-2`}
    onClick={onClick}
    aria-label="Open menu"
  >
    {[...Array(3)].map((_, i) => (
      <span key={i} className="block w-6 h-0.5 bg-gray-900" />
    ))}
  </button>
);

// Close Button Component
const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="self-end mb-8 p-2 hover:bg-gray-100 rounded"
    onClick={onClick}
    aria-label="Close menu"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);

export const Navigation = () => {
  const { t } = useTranslation();
  const currentSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  }, []);

  const handleMobileMenuOpen = useCallback(() => setIsMobileMenuOpen(true), []);
  const handleMobileMenuClose = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <nav className={`w-full flex items-center justify-between ${classes.padding} py-2 sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm`}>
        <h1 
          className="heading-1 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Rafał Łukawski
        </h1>
        
        {/* Desktop Navigation */}
        <ul className={`${classes.navHidden} gap-4 text-lg items-center`}>
          {navItems.map((item) => {
            const isContact = item.id === 'contact';
            const isActive = currentSection === item.id;
            return (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-200 relative inline-block ${
                  isContact
                    ? 'bg-gray-100 rounded-md px-3 py-1.5 hover:bg-gray-200 hover:shadow-sm'
                    : 'hover:text-gray-600'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {isContact ? (
                  <>
                    <span className="invisible font-bold whitespace-nowrap" aria-hidden="true">
                      {t(item.labelKey)}
                    </span>
                    <span className={`absolute inset-0 flex items-center justify-center whitespace-nowrap ${
                      isActive ? 'font-bold' : ''
                    }`}>
                      {t(item.labelKey)}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="invisible font-bold whitespace-nowrap" aria-hidden="true">
                      {t(item.labelKey)}
                    </span>
                    <span className={`absolute left-0 top-0 whitespace-nowrap ${
                      isActive ? 'font-bold' : ''
                    }`}>
                      {t(item.labelKey)}
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <LanguageSwitcher className={classes.navHidden} />
        <MobileMenuButton onClick={handleMobileMenuOpen} />
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog 
        open={isMobileMenuOpen} 
        onClose={handleMobileMenuClose}
        className={`relative z-50 ${classes.dialog}`}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        
        <div className="fixed inset-0 flex items-start justify-end">
          <DialogPanel className="h-full w-64 bg-white shadow-xl">
            <div className="flex flex-col h-full p-6 overflow-y-auto">
              <CloseButton onClick={handleMobileMenuClose} />

              <ul className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isContact = item.id === 'contact';
                  const isActive = currentSection === item.id;
                  return (
                    <li
                      key={item.id}
                      className={`cursor-pointer transition-all duration-200 text-xl relative ${
                        isContact
                          ? 'bg-gray-100 rounded-md px-4 py-2 text-center hover:bg-gray-200 hover:shadow-sm'
                          : 'hover:text-gray-600'
                      }`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span className="invisible font-bold" aria-hidden="true">
                        {t(item.labelKey)}
                      </span>
                      <span className={`absolute left-0 top-0 w-full ${isContact ? 'text-center py-2' : ''} ${
                        isActive ? 'font-bold' : ''
                      }`}>
                        {t(item.labelKey)}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Language</p>
                <LanguageSwitcher className="flex gap-4 text-lg" />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
