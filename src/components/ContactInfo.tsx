import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="scroll-mt-24">
      <h2 className="heading-2 ml-4">{t('contact.getInTouch')}</h2>
      <div className="container-body mt-2">
        <div className="space-y-2">
          <a
            href="mailto:rs.lukawski@gmail.com"
            className="flex items-center gap-2 py-1 px-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
          >
            <FaEnvelope className="w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-gray-800" />
            <span className="text-xs text-gray-700 group-hover:text-gray-900 truncate">
              rs.lukawski@gmail.com
            </span>
          </a>
          <a
            href="tel:+48737340926"
            className="flex items-center gap-2 py-1 px-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
          >
            <FaPhone className="w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-gray-800" />
            <span className="text-xs text-gray-700 group-hover:text-gray-900">
              +48 737 340 926
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/rafal-lukawski/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-1 px-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
          >
            <FaLinkedin className="w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-gray-800" />
            <span className="text-xs text-gray-700 group-hover:text-gray-900">
              {t('contact.linkedinProfile')}
            </span>
          </a>
          <a
            href="https://github.com/rlukawski"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-1 px-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
          >
            <FaGithub className="w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-gray-800" />
            <span className="text-xs text-gray-700 group-hover:text-gray-900">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};


