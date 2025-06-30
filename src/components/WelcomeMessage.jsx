import React from 'react';
import './WelcomeMessage.css';
import backgroundImage from '../assets/anime.jpg'; // Adjust the path as necessary
import RandomQuote from './RandomQuote'; // ✅ Import added

export default function WelcomeMessage() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome to CalmSphere.</h1>
      <p className="welcome-subtext">Your journey to mental peace begins here.</p>
      <RandomQuote />
    </div>
  );
}

