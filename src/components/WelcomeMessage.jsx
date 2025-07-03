import React from 'react';
import './WelcomeMessage.css';
import backgroundImage from '../assets/anime.jpg'; 
import RandomQuote from './RandomQuote'; 

export default function WelcomeMessage() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome to CalmSphere</h1>
      <p className="welcome-subtext">Your journey to mental peace begins here</p>
      <RandomQuote />
    </div>
  );
}

