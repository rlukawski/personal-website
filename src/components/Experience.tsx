import React from "react";
import { PiBriefcaseLight } from "react-icons/pi";
import egzotechLogo from "../assets/egzotech-logo.png";
import ishaFoundationLogo from "../assets/isha-foundation-logo.png";
import nonstopLogo from "../assets/nonstop-logo.png";
import infovideMatrixLogo from "../assets/infovide-matrix-logo.png";
import airBitesLogo from "../assets/air-bites-logo.png";
import onetLogo from "../assets/onet-logo.png";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
  startDate: string;
  endDateKey?: string;
  endDate?: string;
  titleKey: string;
  company: string;
  customIcon?: string | React.ComponentType<{ className?: string }>;
  descriptionKeys: string[];
  technologies?: string;
  projectKey?: string;
  projectComponent?: (t: (key: string) => string) => React.ReactNode;
}

// Calculate duration between two dates in years and months
const calculateDuration = (startDateStr: string, endDateStr?: string): { years: number; months: number } => {
  const [startYear, startMonth] = startDateStr.split('.').map(Number);
  const startDate = new Date(startYear, startMonth - 1);
  
  let endDate: Date;
  if (!endDateStr) {
    // If no end date, use current date
    endDate = new Date();
  } else {
    const [endYear, endMonth] = endDateStr.split('.').map(Number);
    endDate = new Date(endYear, endMonth - 1);
  }
  
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Add 1 to months since we're counting the current month
  months++;
  
  // If months equals 12, convert to years
  if (months === 12) {
    years++;
    months = 0;
  }
  
  return { years, months };
};

// Format duration string for display using i18next's built-in pluralization
const formatDuration = (years: number, months: number, t: (key: string, options?: { count: number }) => string): string => {
  const parts: string[] = [];
  
  if (years > 0) {
    parts.push(`${years} ${t('experience.year', { count: years })}`);
  }
  
  if (months > 0) {
    parts.push(`${months} ${t('experience.month', { count: months })}`);
  }
  
  return parts.join(' ');
};

const getExperienceData = (): ExperienceItem[] => [
  {
    startDate: "2022.01",
    endDateKey: "experience.present",
    titleKey: "experience.exp0.title",
    company: "EGZOTech",
    customIcon: egzotechLogo,
    descriptionKeys: [
      "experience.exp0.desc0",
      "experience.exp0.desc1",
      "experience.exp0.desc2",
      "experience.exp0.desc3",
    ],
    projectKey: "experience.exp0.project",
    technologies:
      "React, Redux, Signals, Typescript, Cypress, Websocket, REST, Docker, CI/CD, MySQL",
  },
  {
    startDate: "2020.01",
    endDateKey: "experience.present",
    titleKey: "experience.exp1.title",
    company: "Freelance",
    customIcon: PiBriefcaseLight,
    descriptionKeys: ["experience.exp1.desc0", "experience.exp1.desc1", "experience.exp1.desc2"],
    projectComponent: (t) => (
      <>
        <a
          href="https://generator-paskow.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary"
        >
          generator-paskow.pl
        </a>{" "}
        {t("experience.exp1.project")}
      </>
    ),
    technologies:
      "Next.js, React, TypeScript, Zustand, tRPC, PostgreSQL, Docker, SCSS",
  },
  {
    startDate: "2020.01",
    endDate: "2021.12",
    titleKey: "experience.exp2.title",
    company: "Isha Foundation",
    customIcon: ishaFoundationLogo,
    descriptionKeys: ["experience.exp2.desc0"],
  },
  {
    startDate: "2013.01",
    endDate: "2016.10",
    titleKey: "experience.exp3.title",
    company: "Nonstop sp. j.",
    customIcon: nonstopLogo,
    descriptionKeys: ["experience.exp3.desc0", "experience.exp3.desc1"],
    technologies: "PHP, CakePHP, MySQL, Percona Cluster, HTML/CSS, JS",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    projectComponent: (_t) => (
      <>
        <a
          href="https://web.archive.org/web/20150207000901/http://multibenefit.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary"
        >
          multibenefit.pl (webarchive)
        </a>
      </>
    ),
  },
  {
    startDate: "2010.01",
    endDate: "2012.12",
    titleKey: "experience.exp4.title",
    company: "LukTronik.pl (e-commerce)",
    customIcon: PiBriefcaseLight,
    descriptionKeys: [],
    technologies: "PHP, MySQL, HTML/CSS/JS",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    projectComponent: (_t) => (
      <a
        href="https://web.archive.org/web/20120111092738/http://luktronik.pl/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-primary"
      >
        luktronik.pl (webarchive)
      </a>
    ),
  },
  {
    startDate: "2008.09",
    endDate: "2009.12",
    titleKey: "experience.exp5.title",
    company: "Infovide-Matrix",
    customIcon: infovideMatrixLogo,
    descriptionKeys: ["experience.exp5.desc0", "experience.exp5.desc1"],
  },
  {
    startDate: "2007.06",
    endDate: "2008.08",
    titleKey: "experience.exp6.title",
    company: "Air Bites Polska",
    customIcon: airBitesLogo,
    descriptionKeys: ["experience.exp6.desc0", "experience.exp6.desc1"],
    projectKey: "experience.exp6.project",
  },
  {
    startDate: "2000.01",
    endDate: "2007.05",
    titleKey: "experience.exp7.title",
    company: "Onet.pl",
    customIcon: onetLogo,
    descriptionKeys: ["experience.exp7.desc0", "experience.exp7.desc1"],
    technologies: "PHP, Perl, MySQL, HTML/CSS/JS",
  },
];

export const Experience = () => {
  const { t } = useTranslation();
  const experienceData = getExperienceData();

  return (
    <section id="experience" className="mt-8 scroll-mt-24 container-width">
      <h2 className="heading-2">{t("experience.title")}</h2>

      <div className="container-body mt-2">
        <div className="grid grid-cols-[auto_1fr] gap-4 body-small">
          {experienceData.map((exp, index) => (
            <React.Fragment key={index}>
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                {exp.customIcon &&
                  (typeof exp.customIcon === "string" ? (
                    <img
                      src={exp.customIcon}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <exp.customIcon className="w-full h-full text-gray-600" />
                  ))}
              </div>

              <div>
                <div className="flex items-start gap-2 mb-1">
                  <p>
                    <b>{t(exp.titleKey)}</b>
                    <br />
                    {exp.company} <br />
                    <span className="text-muted">
                      {exp.startDate} - {exp.endDateKey ? t(exp.endDateKey) : (exp.endDate || '')}
                      {(() => {
                        const duration = calculateDuration(exp.startDate, exp.endDate);
                        const durationStr = formatDuration(duration.years, duration.months, t);
                        return durationStr ? ` · ${durationStr}` : '';
                      })()}
                    </span>
                  </p>
                </div>
                {(exp.descriptionKeys.length > 0 ||
                  exp.technologies ||
                  exp.projectKey ||
                  exp.projectComponent) && (
                  <ul className="list-disc list-outside pl-6 space-y-0 list-text mt-2">
                    {exp.descriptionKeys.map((descKey, descIndex) => (
                      <li key={descIndex}>{t(descKey)}</li>
                    ))}
                    {(exp.projectKey || exp.projectComponent) && (
                      <li>
                        <b>{t("experience.project")}</b>:{" "}
                        {exp.projectComponent
                          ? exp.projectComponent(t)
                          : t(exp.projectKey!)}
                      </li>
                    )}
                    {exp.technologies && (
                      <li>
                        <b>{t("experience.technologies")}</b>: {exp.technologies}
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
