import React from 'react';
import './AboutHeroSection.css';  // we'll create this CSS file next

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>About Us</h1>
        <p>
          {/* Welcome to Calmsphere, your personal sanctuary for mental wellness. */}
          Empowering you to nurture your mental wellness through intuitive mood tracking, mindful breathing, and daily motivation.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
