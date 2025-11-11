export const navItems = [
  { labelKey: 'nav.about', id: 'about' },
  { labelKey: 'nav.experience', id: 'experience' },
  { labelKey: 'nav.skills', id: 'skills' },
  { labelKey: 'nav.certificates', id: 'certificates' },
  { labelKey: 'nav.contact', id: 'contact' },
];

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

