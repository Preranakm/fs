import React from "react";
import { createRoot } from "react-dom/client";
import Second from "./second.jsx";

createRoot(document.getElementById("root"))
.render(
  <React.StrictMode>
    <Second />
  </React.StrictMode>
);