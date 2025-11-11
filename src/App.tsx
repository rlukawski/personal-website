import type React from "react";

import { About, Home, Navigation, Skills, Contact, Certificates, Projects, Footer, ContactInfo } from "./components";
import { Experience } from "./components/Experience";

export default function Example(): React.ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex flex-col gap-2 md:px-12 items-stretch">
        <Home />
        <About />
        <div className="mt-8 container-width">
          <div className="flex flex-col md:flex-row gap-2 items-start">
            <div className="w-full md:w-60 flex-shrink-0 order-2 md:order-1 space-y-6">
              <ContactInfo />
              <Skills />
            </div>
            <div className="flex-1 min-w-0 order-1 lg:order-2">
              <Experience />
            </div>
          </div>
        </div>
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
