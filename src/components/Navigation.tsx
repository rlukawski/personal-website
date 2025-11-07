export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="w-full flex items-center justify-between px-12 py-2 sticky top-0 z-10 bg-transparent backdrop-blur-sm shadow-sm">
      <p 
        className="text-gray-800 text-3xl font-bold cursor-pointer"
        onClick={() => scrollToSection('home')}
      >
        Rafał Łukawski
      </p>
      <ul className="flex gap-6 text-lg">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <ul className="flex gap-2">
        <li>PL</li>
        <li>EN</li>
      </ul>
    </div>
  );
};
