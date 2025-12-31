import React from "react";
import "./FeatureCarousel.css";
import music from "../assets/music.jpeg";
import nature from "../assets/brownnature.jpeg";
import pomodoro from "../assets/pomodoro.jpeg";
import Journal from "../assets/Journal.jpeg";
import yoga from "../assets/ryoga.jpeg";

const features = [
  {
    image: yoga,
    title: "Relaxing Yoga Tutorial.",
    description:
      "Guided yoga sessions designed to stretch, calm, and relieve stress. Perfect for any experience level, helping you find inner peace",
    link: "yoga",
  },
  {
    image: music,
    title: "Soothing Music.",
    description:
      "A collection of calming music and nature sounds to create a peaceful atmosphere, perfect for relaxation or focus",
    link: "music",
  },
  {
    image: Journal,
    title: "Mood Journal.",
    description:
      "Track your emotions daily to gain insights into your mental health and cultivate mindfulness for a balanced life.",
    link: "journal",
  },
  {
    image: pomodoro,
    title: "Focus Timer.",
    description:
      "Boost your concentration and work peacefully using calming Pomodoro timer.",
    link: "https://pomofocus.io/",
  },
  {
    image: nature,
    title: "Relaxing Visuals.",
    description:
      "Immerse yourself in calming nature visuals to reduce stress and create a tranquil environment wherever you are.",
    link: "https://www.pexels.com/search/videos/nature/",
  },
];

const FeatureCarousel = ({ onNavigate }) => {
  return (
    <div className="carousel-section">
      <h2 className="carousel-title">Featured Wellness Picks</h2>
      <div className="carousel-container">
        {features.map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.link === "yoga" || item.link === "music" || item.link === "journal" ? (
              <button
                className="cta-btn"
                onClick={() => {
                  console.log("Clicked:", item.link);
                  onNavigate(item.link);
                }}
                style={{
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                }}
              >
                Learn More
              </button>
            ) : (
              <a
                href={item.link}
                className="cta-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
