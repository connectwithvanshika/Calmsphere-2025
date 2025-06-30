import React, { useState } from 'react';
import Navbar from './NavBar';

const HomePage = ({ onNavigate }) => {
  return (
    <>
      <Navbar activePage="home" />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to CalmSphere</h1>
        <p>Your mental wellness partner.</p>
        <button onClick={() => onNavigate('about')}>Go to About Page</button>
      </main>
    </>
  );
};

export default HomePage;
