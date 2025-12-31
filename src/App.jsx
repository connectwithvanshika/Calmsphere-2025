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
import EmotionTranslator from "./components/EmotionTranslator";
import EmergencyCalmPage from "./components/EmergencyCalmPage";



// Pages
import YogaPage from "./pages/YogaPage";
import MusicPage from "./pages/MusicPage";
import JournalPage from "./pages/JournalPage";
import PomodoroPage from "./pages/PomodoroPage";
import NaturePage from "./pages/NaturePage";
import MoodLogPage from "./pages/MoodLogPage";
import FutureYouPage from "./pages/FutureYouPage";



const App = () => {
  const [page, setPage] = useState("home");
  const [showEmergencyMode, setShowEmergencyMode] = useState(true); // Set to true to show Emergency Calm Page


  const handleNavigate = (pageName) => {
    console.log("Navigating to:", pageName);
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
          <EmotionTranslator />
          <HeroSection />
          <FeatureCarousel onNavigate={handleNavigate} />
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

      {page === "yoga" && <YogaPage />}
      {page === "music" && <MusicPage />}
      {page === "journal" && <JournalPage />}
      {page === "pomodoro" && <PomodoroPage />}
      {page === "nature" && <NaturePage />}
      {page === "moodlog" && <MoodLogPage />}
      {page === "futureyou" && <FutureYouPage />}

      {!isAuthPage && page !== "moodlog" && page !== "futureyou" && <Footer onNavigate={handleNavigate} />}

      {/* Emergency Calm Overlay - Shows on top of everything when triggered */}
      {showEmergencyMode && (
        <EmergencyCalmPage onExit={() => setShowEmergencyMode(false)} />
      )}

    </>
  );
};

export default App;
