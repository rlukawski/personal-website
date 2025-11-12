// useDocumentHeaders.ts
import { useEffect } from "react";

function setMetaTag(name: string, content: string): void {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }

  meta.content = content;
}

export function useDocumentHeaders(props: {
  title?: string;
  description?: string;
  author?: string;
}): void {
  const { title, description, author } = props;
  
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      setMetaTag("description", description);
    }

    if (author) {
      setMetaTag("author", author);
    }
  }, [title, description, author]);
}
