import type React from "react";

import { About, Home, Navigation, Skills, Contact, Certificates, Footer } from "./components";
import { Experience } from "./components/Experience";

export default function Example(): React.ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex flex-col gap-2 px-12 items-stretch">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
