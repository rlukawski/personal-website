import type React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { About, Home, Navigation, Contact, Certificates, Projects, Footer } from "./components";
import { useDocumentHeaders } from "./hooks/useDocumentHeaders";

// Component that syncs i18n with route language and validates language code
function LanguageSync() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang) {
      if (lang === 'en' || lang === 'pl') {
        i18n.changeLanguage(lang);
      } else {
        // Redirect invalid language codes to /en
        navigate('/en', { replace: true });
      }
    }
  }, [lang, i18n, navigate]);

  return null;
}

// Main content component
function AppContent(): React.ReactElement {
  useDocumentHeaders();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex flex-col gap-2 md:px-12 items-stretch">
        <Home />
        <About />
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

export default function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route
          path="/:lang"
          element={
            <>
              <LanguageSync />
              <AppContent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
