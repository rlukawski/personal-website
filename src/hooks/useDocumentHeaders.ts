import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function setMetaTag(name: string, content: string): void {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setOpenGraphTag(property: string, content: string): void {
  let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

export function useDocumentHeaders(): void {
  const { t } = useTranslation();
  const location = useLocation();
  
  useEffect(() => {
    const title = t("headers.title");
    const description = t("headers.description");
    const author = t("headers.author");
    const ogTitle = t("headers.ogTitle");
    const ogDescription = t("headers.ogDescription");
    const ogImage = t("headers.ogImage");
    const ogUrl = t("headers.ogUrl");
    const ogType = t("headers.ogType");

    // Get current URL - use the base URL from translations or construct from current location
    const baseUrl = ogUrl || "https://lukawski.eu";
    const currentUrl = `${baseUrl}${location.pathname}`;

    if (title) {
      document.title = title;
    }

    if (description) {
      setMetaTag("description", description);
    }

    if (author) {
      setMetaTag("author", author);
    }

    // Open Graph meta tags
    if (ogTitle) {
      setOpenGraphTag("og:title", ogTitle);
    }

    if (ogDescription) {
      setOpenGraphTag("og:description", ogDescription);
    }

    if (ogImage) {
      setOpenGraphTag("og:image", ogImage);
    }

    if (currentUrl) {
      setOpenGraphTag("og:url", currentUrl);
    }

    if (ogType) {
      setOpenGraphTag("og:type", ogType);
    }
  }, [t, location.pathname]);
}
