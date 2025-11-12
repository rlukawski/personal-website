import type React from "react";

import { About, Home, Navigation, Contact, Certificates, Projects, Footer } from "./components";
import { useDocumentHeaders } from "./hooks/useDocumentHeaders";

export default function Example(): React.ReactElement {
  useDocumentHeaders({
    title: 'Rafał Łukawski - Personal Website',
    description: 'Software Developer & IT Project Manager | React & Next.js | Google Cloud Architect and Scrum Master building scalable web applications digital platforms.',
    author: 'Rafał Łukawski'
  });
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex flex-col gap-2 md:px-12 items-stretch">
        <Home />
        <About />
        <Projects />
        <Certificates />
      </div>
      <div className="min-h-[100vh] flex flex-col">
        <div className="md:px-12">
          <Contact />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
