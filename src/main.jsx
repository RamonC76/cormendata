import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
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
import "./styles/IndustryPage.css";
import "./styles/CoursePage.css";
import "./i18n/i18n.js";
import "./styles/navbar-dropdown.css";

// HashRouter en vez de BrowserRouter: en GitHub Pages no hay servidor que
// reescriba rutas, así que una URL como /industrias/banca da 404 al
// recargar la página directamente. Con HashRouter las rutas viven después
// del "#" (ej. tusitio.com/#/industrias/banca), que el navegador siempre
// resuelve contra index.html sin pedirle nada al servidor.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
