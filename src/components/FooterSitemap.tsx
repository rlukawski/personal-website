import { useTranslation } from "react-i18next";
import { navItems, scrollToSection } from "../utils/navigation";

const updatedItems = [{ labelKey: "footer.home", id: "home" }, ...navItems];

export const FooterSitemap = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        {t("footer.sitemap")}
      </h4>
      <ul className="flex flex-col gap-2">
        {updatedItems.map((item) => (
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
  );
};
