import React from "react";
import "./KeySellingPoints.css"; 
import peace from '../assets/p.jpeg'
import aesthetic from '../assets/aesthetic.jpeg'


const KeySellingPoints = () => {
  return (
    <section className="key-selling-points">

      <div className="selling-point">
        <div className="description">
          <h2>Why Choose Us?</h2>
          <p>
            We offer a platform that prioritizes your mental wellness. With
            personalized mood tracking, calming exercises, and daily motivation,
            we ensure that you're on the right path to inner peace.
          </p>
        </div>
        <div className="image">
          <img
            src={peace} alt="Mental Wellness" 
          />
        </div>
      </div>

    
      <div className="selling-point">
        <div className="description">
          <h2>Personalized For You</h2>
          <p>
            Our platform adapts to your mood and personal preferences, delivering
            insights and exercises that cater specifically to you, making sure
            every experience is unique and impactful.
          </p>
        </div>
        <div className="image">
          <img
          src={aesthetic} alt="Personalized Features"
          />
        </div>
      </div>
    </section>
  );
};

export default KeySellingPoints;
