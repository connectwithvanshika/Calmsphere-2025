// components/AboutDescription.jsx
import React from 'react';
import './AboutDescription.css';
import aboutImage from '../assets/aboutpage.jpeg'; // ✅ Use your own image

const AboutDescription = () => {
  return (
    <section className="about-section">
      <div className="about-image-container">
        <img src={aboutImage} alt="About CalmSphere" className="about-image" />
      </div>
      <div className="about-text">
        <h2>Embrace the Calm Within You</h2>
        <p>
          In a world that rarely slows down, <strong>CalmSphere</strong> was born as a gentle pause — a space crafted to nurture your mind, elevate your mood, and help you reconnect with your inner peace.
          <br /><br />
          Designed with empathy and backed by psychological insights, CalmSphere offers a thoughtful blend of mood tracking, mindful breathing sessions, daily motivation, and journaling — all wrapped in a soothing, minimalist interface that brings calm to your fingertips.
          <br /><br />
          This isn’t just another wellness tool. It’s your personal sanctuary — a quiet corner of the internet where you are seen, heard, and supported. Whether it’s a tough day or a tender moment, CalmSphere is here to walk with you through it all — one breath, one feeling, one reflection at a time.
          <br /><br />
          Join us in cultivating a kinder, more mindful world — starting from within.
        </p>
      </div>
    </section>
  );
};

export default AboutDescription;
