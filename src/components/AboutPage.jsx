import React from 'react';
import Navbar from './NavBar';
import AboutHeroSection from './AboutHeroSection';
import CompanyHistory from './CompanyHistory'; 

const AboutPage = ({ onNavigate }) => {
  return (
    <>
      <Navbar onNavigate={onNavigate} activePage="about" />
      <AboutHeroSection />

      <CompanyHistory />

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <button onClick={() => onNavigate('home')}>Back to Home</button>
      </main>
    </>
  );
};

export default AboutPage;
