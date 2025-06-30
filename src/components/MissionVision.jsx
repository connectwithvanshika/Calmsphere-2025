import React from 'react';
import './MissionVision.css';

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <h2 className="section-heading">Our Purpose</h2>
      <div className="mv-container">
        <div className="mv-box">
          <h3>Our Mission</h3>
          <p>
            To create a safe and peaceful digital space that helps individuals achieve emotional balance and mental clarity through mindful tools and experiences.
          </p>
        </div>
        <div className="mv-box">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted digital companion for mental wellness, empowering people worldwide to live more peaceful and mindful lives.
          </p>
        </div>
      </div>
    </section>
  );
}
