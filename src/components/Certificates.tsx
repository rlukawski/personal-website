import React from "react";
import googleCloudArchitectLogo from "../assets/google-cloud-architect.png";
import scrumMasterLogo from "../assets/scrum-master-psm1.png";

const certificatesData = [
  {
    date: "2024.07",
    name: "Professional Cloud Architect",
    issuer: "Google",
    customIcon: googleCloudArchitectLogo,
    validationLink: null,
  },
  {
    date: "2012.01",
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    customIcon: scrumMasterLogo,
    validationLink: null,
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="mt-8 scroll-mt-24">
      <h2 className="text-2xl font-bold">Certificates</h2>

      <div className="border border-gray-200 p-8 rounded-xl bg-transparent backdrop-blur-sm mt-2">
        <div className="grid grid-cols-[auto_1fr] gap-4 text-sm">
          {certificatesData.map((cert, index) => (
            <React.Fragment key={index}>
              <div>
                <p>{cert.date}</p>
              </div>
              <div className="flex items-start gap-4">
                {cert.customIcon && (
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden p-2 flex-shrink-0">
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
                    <p className="mt-2">
                      <a
                        href={cert.validationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Validate certificate
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

