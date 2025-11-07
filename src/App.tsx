import type React from "react";

import { Home, Navigation } from "./components";

export default function Example(): React.ReactElement {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}
