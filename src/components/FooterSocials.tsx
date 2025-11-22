import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rafal-lukawski/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/rlukawski",
    icon: FaGithub,
  },
  {
    name: "Email",
    url: "mailto:rafal@lukawski.eu",
    icon: FaEnvelope,
  },
];

export const FooterSocials = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className="heading-4 mb-2">
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
                className="flex items-center gap-2 body-small hover:text-gray-800 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span>{social.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

