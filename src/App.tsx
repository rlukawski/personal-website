import type React from "react";

import { About, Home, Navigation, Skills, Contact, Certificates, Footer } from "./components";
import { Experience } from "./components/Experience";

export default function Example(): React.ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex flex-col gap-2 md:px-12 items-stretch">
        <Home />
        <About />
        <Experience />
        <Skills />
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
