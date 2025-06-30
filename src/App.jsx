import React, { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import WelcomeMessage from "./components/WelcomeMessage";
import HeroSection from "./components/HeroSection";
import FeatureCarousel from "./components/FeatureCarousel";
import KeySellingPoints from "./components/KeySellingPoints";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import AboutHeroSection from "./components/AboutHeroSection";
import CompanyHistory from "./components/CompanyHistory";
import AboutDescription from "./components/AboutDescription";
import MissionVision from "./components/MissionVision";
import TeamCarousel from "./components/TeamCarousel";
import Services from "./components/Services";
import ServicesHeroSection from "./components/ServicesHeroSection";
import FAQ from "./components/FAQ";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

const App = () => {
  const [page, setPage] = useState("home");

  const handleNavigate = (pageName) => {
    setPage(pageName);
  };

  const isAuthPage = page === "login" || page === "signup";

  return (
    <>
      {!isAuthPage && <Navbar onNavigate={handleNavigate} activePage={page} />}
      <ScrollToTop page={page} />

      {page === "home" && (
        <>
          <WelcomeMessage />
          <HeroSection />
          <FeatureCarousel />
          <KeySellingPoints />
          <TestimonialCarousel />
        </>
      )}

      {page === "about" && (
        <>
          <AboutHeroSection />
          <CompanyHistory />
          <AboutDescription />
          <MissionVision />
          <TeamCarousel />
        </>
      )}

      {page === "services" && (
        <>
          <ServicesHeroSection />
          <Services />
          <FAQ />
        </>
      )}

      {page === "blog" && <BlogPage />}
      {page === "contact" && <ContactPage />}
      {page === "login" && <LoginPage onNavigate={handleNavigate} />}
      {page === "signup" && <SignupPage onNavigate={handleNavigate} />}

     {!isAuthPage && <Footer onNavigate={handleNavigate} />}
    </>
  );
};

export default App;
