import React from "react";
import googleCloudArchitectLogo from "../assets/google-cloud-architect.png";
import scrumMasterLogo from "../assets/scrum-master-psm1.png";
import { useTranslation } from "react-i18next";

const certificatesData = [
  {
    date: "2024.07",
    name: "Professional Cloud Architect",
    issuer: "Google",
    customIcon: googleCloudArchitectLogo,
    validationLink: "https://www.credly.com/badges/257b922c-e06d-493b-b9a8-4e3be00b87a3/linked_in_profile",
  },
  {
    date: "2012.01",
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    customIcon: scrumMasterLogo,
    validationLink: "https://www.scrum.org/user/233933",
  },
];

export const Certificates = () => {
  const { t } = useTranslation();
  return (
    <section id="certificates" className="mt-8 scroll-mt-24 content-container w-full">
      <h2 className="text-2xl font-bold">{t('certificates.title')}</h2>

      <div className="border border-gray-200 p-8 rounded-xl bg-transparent backdrop-blur-sm mt-2">
        <div className="grid grid-cols-[auto_1fr] gap-4 text-sm">
          {certificatesData.map((cert, index) => (
            <React.Fragment key={index}>
              <div>
                <p>{cert.date}</p>
              </div>
              <div className="flex items-start gap-4">
                {cert.customIcon && (
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={cert.customIcon}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p>
                    <b>{cert.name}</b>
                    <br />
                    {cert.issuer}
                  </p>
                  {cert.validationLink && (
                    <p className="">
                      <a
                        href={cert.validationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {t('certificates.showCredentials')}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

