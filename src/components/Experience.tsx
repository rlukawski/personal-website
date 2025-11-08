import React from "react";
import { PiBriefcaseLight } from "react-icons/pi";
import egzotechLogo from "../assets/egzotech-logo.png";
import ishaFoundationLogo from "../assets/isha-foundation-logo.png";
import nonstopLogo from "../assets/nonstop-logo.png";
import infovideMatrixLogo from "../assets/infovide-matrix-logo.png";
import airBitesLogo from "../assets/air-bites-logo.png";
import onetLogo from "../assets/onet-logo.png";

interface ExperienceItem {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  customIcon?: string | React.ComponentType<{ className?: string }>;
  descriptions: string[];
  technologies?: string;
  project?: React.ReactNode;
}

const experienceData: ExperienceItem[] = [
  {
    startDate: "2022.01",
    endDate: "present",
    title: "Senior Software Developer",
    company: "EGZOTech",
    customIcon: egzotechLogo,
    descriptions: [
      "Conduct code reviews and mentor junior developers",
      "Develop React components with Chakra-UI and Styled Components",
      "Conduct integration testing with Cypress",
      "Create and maintain TypeScript libraries controlling complex processes and performing logical operations",
      "Manage CI/CD environment based on GitHub Actions",
      "Enhance existing Angular + NestJS application",
    ],
    project: (
      <>
        EGZOClinic (software) on multiple devices used by EGZOTech:{" "}
        <b>Stella BIO</b>, <b>Sidra LEG</b>, <b>Meissa OT</b>
      </>
    ),
    technologies:
      "React, Redux, Signals, Typescript, Cypress, Websocket, REST, Docker, CI/CD, MySQL",
  },
  {
    startDate: "2020.09",
    endDate: "present",
    title: "Full-Stack Developer",
    company: "Freelance",
    customIcon: PiBriefcaseLight,
    descriptions: [
      "Development of web projects mainly based on React framework for Upwork clients.",
      "Working on my own project using React and Next.js framework",
    ],
    project: (
      <>
        <a
          href="https://generator-paskow.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          generator-paskow.pl
        </a>{" "}
        - a meme generator for popular TV programs.
      </>
    ),
    technologies:
      "React, Zustand, TS/JS, Next.js, SCSS, PostgreSQL, Trpc, REST, Docker",
  },

  {
    startDate: "2016.09",
    endDate: "2021.12",
    title: "Volunteer",
    company: "Isha Foundation",
    customIcon: ishaFoundationLogo,
    descriptions: [
      "Translation volunteer supporting wellbeing and personal development content for the Isha Foundation's global community.",
    ],
  },
  {
    startDate: "2013.01",
    endDate: "2016.10",
    title: "Project Manager / Senior Developer",
    company: "Nonstop sp. j.",
    customIcon: nonstopLogo,
    descriptions: [
      "Architect, Team Manager, and Senior Developer for the multibenefit.pl project - implemented and maintained until 2016.",
    ],
    technologies: "PHP, CakePHP, MySQL, Percona Cluster, HTML/CSS, JS",
    project: (
      <>
        <a
          href="https://web.archive.org/web/20150207000901/http://multibenefit.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          multibenefit.pl (webarchive)
        </a>
      </>
    ),
  },
  {
    startDate: "2010.01",
    endDate: "2012.12",
    title: "Owner",
    company: "LukTronik.pl (e-commerce)",
    customIcon: PiBriefcaseLight,
    descriptions: [],
    technologies: "PHP, MySQL, HTML/CSS/JS",
    project: (
      <a
        href="https://web.archive.org/web/20120111092738/http://luktronik.pl/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        luktronik.pl (webarchive)
      </a>
    ),
  },
  {
    startDate: "2008.09",
    endDate: "2009.12",
    title: "Project Manager",
    company: "Infovide-Matrix",
    customIcon: infovideMatrixLogo,
    descriptions: [
      "Managing telecommunications projects at TP.SA. Successfully completed 3 editions of software development for Order Management and BPM - 8.3 - 9.2 - for the internal systems of the partner",
    ],
  },
  {
    startDate: "2007.06",
    endDate: "2008.08",
    title: "Technical Product Manager",
    company: "Air Bites Polska",
    customIcon: airBitesLogo,
    descriptions: ["Technical Product Manager for VoIP services in Poland"],
    project: "VoIP telephony solution for online customers",
  },
  {
    startDate: "2000.01",
    endDate: "2007.03",
    title: "Software Developer / Architect / Manager",
    company: "Onet.pl",
    customIcon: onetLogo,
    descriptions: [
      "Project manager and developer in portal projects",
      "Design and implementation of architectural solutions used by other development teams",
    ],
    technologies: "PHP, Perl, MySQL, HTML/CSS/JS",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="mt-8 scroll-mt-24">
      <h2 className="text-2xl font-bold">Experience</h2>

      <div className="border border-gray-200 p-8 rounded-xl bg-transparent backdrop-blur-sm mt-2">
        <div className="grid grid-cols-[auto_1fr] gap-4 text-sm">
          {experienceData.map((exp, index) => (
            <React.Fragment key={index}>
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                {exp.customIcon && (
                  typeof exp.customIcon === "string" ? (
                    <img
                      src={exp.customIcon}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <exp.customIcon className="w-full h-full text-gray-600" />
                  )
                )}
              </div>

              <div>
                <div className="flex items-start gap-2 mb-1">
                  <p>
                    <b>{exp.title}</b>
                    <br />
                    {exp.company} <br />
                    <span className="text-gray-500">{exp.startDate} - {exp.endDate}</span>
                  </p>
                </div>
                {(exp.descriptions.length > 0 ||
                  exp.technologies ||
                  exp.project) && (
                  <ul className="list-disc list-outside pl-6 space-y-0 text-gray-700 text-sm leading-relaxed mt-2">
                    {exp.descriptions.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                    {exp.project && (
                      <li>
                        <b>Project</b>: {exp.project}
                      </li>
                    )}
                    {exp.technologies && (
                      <li>
                        <b>Technologies</b>: {exp.technologies}
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
