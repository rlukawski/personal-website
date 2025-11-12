import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="container-body">
      <h3 className="heading-3 mb-4">{t('contact.getInTouch')}</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaEnvelope className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <a
            href="mailto:rs.lukawski@gmail.com"
            className="link-primary text-sm break-all"
          >
            rs.lukawski@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <a
            href="tel:+48570116416"
            className="link-primary text-sm"
          >
            +48 570 116 416
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <a
            href="https://www.linkedin.com/in/rafal-lukawski/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary text-sm"
          >
            {t('contact.linkedinProfile')}
          </a>
        </div>
      </div>
    </section>
  );
};


