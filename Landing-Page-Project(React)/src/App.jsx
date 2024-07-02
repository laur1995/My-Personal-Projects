import React, { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AuthForms from "./components/AuthForms";

const App = () => {
  const [authFormOpen, setAuthFormOpen] = useState(false);
  const [authFormMode, setAuthFormMode] = useState("signin"); // or "signup"

  const handleSignInClick = () => {
    setAuthFormOpen(true);
    setAuthFormMode("signin");
  };

  const handleSignUpClick = () => {
    setAuthFormOpen(true);
    setAuthFormMode("signup");
  };

  const handleCloseAuthForm = () => {
    setAuthFormOpen(false);
  };

  const handleStartFreeClick = () => {
    setAuthFormOpen(true);
    setAuthFormMode("signup");
  };

  const handleDocumentationClick = () => {
    const documentationSection = document.getElementById("documentation");
    if (documentationSection) {
      documentationSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Redirect to documentation page");
    }
  };

  return (
    <AuthProvider>
      <Navbar
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
      />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection
          onStartFreeClick={handleStartFreeClick}
          onDocumentationClick={handleDocumentationClick}
        />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
        <AuthForms
          isOpen={authFormOpen}
          onClose={handleCloseAuthForm}
          initialMode={authFormMode}
        />
      </div>
    </AuthProvider>
  );
};

export default App;
