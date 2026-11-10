import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Manrope is bundled with the site (no request to Google Fonts).
import "@fontsource-variable/manrope";
import "./styles.css";
import { LanguageProvider } from "./i18n";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home";
import { ServicePage, ServicesPage } from "./pages/services";
import { AboutPage, ApproachPage, ContactPage, NotFoundPage } from "./pages/misc";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServicePage />} />
            <Route path="approach" element={<ApproachPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
