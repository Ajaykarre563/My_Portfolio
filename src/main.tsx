import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

/* Root Element Check */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

/* Render App */
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);