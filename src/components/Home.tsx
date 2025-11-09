import authorImg from "../assets/author.jpg";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <main id="home" className="mt-16 scroll-mt-32 container-width w-full">
      <div className="flex w-full justify-evenly items-center">
        <div className="h-full flex flex-col gap-2">
          <p className="heading-2">{t('home.subtitle')}</p>
          <div className="flex gap-2 items-center pl-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="body-large font-bold">{t('home.tagline')}</p>
          </div>
        </div>
        <div className="w-64 ">
          <img src={authorImg} alt="Rafał Łukawski" className="rounded-3xl" />
        </div>
      </div>
    </main>
  );
};
