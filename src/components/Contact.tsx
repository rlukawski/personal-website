import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xldargao", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mt-8 scroll-mt-24 container-width w-full">
      <h2 className="heading-2 ml-4">{t('contact.title')}</h2>
      <div className="container-body mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="heading-3 mb-4">{t('contact.getInTouch')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <a
                  href="mailto:rs.lukawski@gmail.com"
                  className="link-primary"
                >
                  rs.lukawski@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <a
                  href="tel:+48737340926"
                  className="link-primary"
                >
                  +48 737 340 926
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/rafal-lukawski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  {t('contact.linkedinProfile')}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="heading-3 mb-4">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="label mb-1">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="label mb-1">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="label mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? t('contact.sending')
                  : status === "success"
                  ? t('contact.sent')
                  : status === "error"
                  ? t('contact.error')
                  : t('contact.send')}
              </button>
              {status === "success" && (
                <p className="text-success">{t('contact.successMessage')}</p>
              )}
              {status === "error" && (
                <p className="text-error">
                  {t('contact.errorMessage')}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
