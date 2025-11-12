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
  }, [t]);
}
