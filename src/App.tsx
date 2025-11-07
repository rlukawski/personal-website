import type React from "react";

import { About, Home, Navigation } from "./components";

export default function Example(): React.ReactElement {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex flex-col gap-16 px-12">
        <Home />
        <About />
      </div>
    </div>
  );
}
