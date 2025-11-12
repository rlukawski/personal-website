import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function setMetaTag(name: string, content: string): void {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setPersonSchema(): void {
  // Remove existing schema if present
  const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="person"]');
  if (existingSchema) {
    existingSchema.remove();
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rafał Łukawski",
    "url": "https://lukawski.eu",
    "image": "https://lukawski.eu/author.jpg",
    "email": "rs.lukawski@gmail.com",
    "telephone": "+48-570-116-416",
    "jobTitle": "Software Developer & IT Project Manager",
    "description": "Software Developer & IT Project Manager | React & Next.js | Google Cloud Architect and Scrum Master building scalable web applications.",
    "sameAs": [
      "https://www.linkedin.com/in/rafal-lukawski/",
      "https://github.com/rlukawski"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Google Cloud",
      "Software Development",
      "Project Management",
      "Scrum"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-schema", "person");
  script.textContent = JSON.stringify(personSchema);
  document.head.appendChild(script);
}

export function useDocumentHeaders(): void {
  const { t } = useTranslation();
  
  useEffect(() => {
    const title = t("headers.title");
    const description = t("headers.description");
    const author = t("headers.author");

    if (title) {
      document.title = title;
    }

    if (description) {
      setMetaTag("description", description);
    }

    if (author) {
      setMetaTag("author", author);
    }

    // Add Person schema
    setPersonSchema();
  }, [t]);
}
