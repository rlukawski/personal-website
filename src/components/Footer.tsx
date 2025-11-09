import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { navItems, scrollToSection } from "../utils/navigation";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rafal-lukawski/",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/rafallukawski",
      icon: FaGithub,
    },
    {
      name: "Email",
      url: "mailto:rs.lukawski@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="mt-16 mb-8 px-12">
      {/* Horizontal line */}
      <div className="border-t border-gray-300 pt-12 pb-8">
        <div className="flex flex-col gap-12">
          {/* Call to Action Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                {t('footer.cta')}{' '}
                <span className="text-gray-600">{t('footer.ctaHighlight')}</span>
              </h3>
            </div>
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
              aria-label={t('footer.startProject')}
            >
              {t('footer.startProject')}
              <FaArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Sitemap and Socials */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Sitemap */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {t('footer.sitemap')}
              </h4>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-200 text-left"
                    >
                      {t(item.labelKey)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {t('footer.socials')}
              </h4>
              <ul className="flex flex-col gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                        rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{social.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm pt-4 border-t border-gray-200">
            <p>© {currentYear} Rafał Łukawski</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

