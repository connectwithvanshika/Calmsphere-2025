// components/ServicesHeroSection.jsx
import React from 'react';
import './ServicesHeroSection.css'; // We'll style here
import aboutImage from '../assets/yoga2.jpg'

const ServicesHeroSection = () => {
  return (
    <section className="services-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Explore Our Premium Services</h1>
          <p>Designed to empower your peace and productivity</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
