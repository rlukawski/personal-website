import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "../utils/navigation";

export const FooterCTA = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div className="flex flex-col">
        <h3 className="heading-1">
          {t('footer.cta')}{' '}
          <span className="text-muted">{t('footer.ctaHighlight')}</span>
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
  );
};

