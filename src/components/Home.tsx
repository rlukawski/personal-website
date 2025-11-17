import authorImg from "../assets/author.jpg";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "../utils/navigation";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <main id="home" className="mt-16 scroll-mt-32 container-width w-full">
      <div className="flex w-full justify-evenly items-center px-2 gap-2">
        <div className="h-full flex flex-col gap-2">
          <p className="heading-2">{t('home.subtitle')}</p>
          <div className="flex gap-2 items-center pl-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="body-large font-bold">{t('home.tagline')}</p>
          </div>
          <div className="pl-4 mt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t('home.contactMe')}
            </button>
          </div>
        </div>
        <div className="w-64 ">
          <img src={authorImg} alt="Rafał Łukawski" className="rounded-3xl" />
        </div>
      </div>
    </main>
  );
};
