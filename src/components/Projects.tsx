import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="mt-8 scroll-mt-24 container-width w-full">
      <h2 className="heading-2 ml-4">{t('projects.title')}</h2>
      <div className="container-body mt-2">
        <p className="body-small text-center text-gray-500 py-8">
          <i>{t('projects.workInProgress')}</i>
        </p>
      </div>
    </section>
  );
};

