import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="mt-8 scroll-mt-24 content-container">
      <h2 className="heading-2">{t('about.title')}</h2>
      <div className="border border-gray-200 p-8 rounded-xl bg-transparent backdrop-blur-sm mt-2">
        <p className="body-normal mb-4">
          {t('about.paragraph1')}
        </p>

        <p className="body-normal">
          {t('about.paragraph2')}
        </p>
      </div>
    </section>
  );
};
