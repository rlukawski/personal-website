import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="mt-8 scroll-mt-24 container-width">
      <h2 className="heading-2">{t('about.title')}</h2>
      <div className="container-body mt-2">
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
