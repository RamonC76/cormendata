import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/global.css";
import "./styles/Button.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/ProblemSection.css";
import "./styles/ServicesSection.css";
import "./styles/ProcessSection.css";
import "./styles/TechStackSection.css";
import "./styles/UseCaseSection.css";
import "./styles/ContactSection.css";
import "./styles/Footer.css";
import "./i18n/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
