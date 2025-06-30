import React, { useState } from "react";
import "./TestimonialCarousel.css"; 
import boy1 from '../assets/boy1.jpeg'
import boy3 from '../assets/boy3.jpeg'
import girl3 from '../assets/girl3.jpeg'
import vanshika from '../assets/vanshika2.jpeg'

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Vansh Deshwal",
      review: "This platform has truly transformed my mental health. The mood tracking feature is amazing!",
      photo: boy1,
    },
    {
      name: "Vanshika",
      review: "I feel more motivated every day thanks to the personalized content. Highly recommend it!",
      photo: vanshika,
    },
    {
      name: "Ansh Singh",
      review: "The daily exercises and insights are really helpful. It's a must-have app for anyone looking for mental peace.",
      photo: boy3,
    },
    {
      name: "Bhuvi Sharma",
      review: "Absolutely love the breathing exercises. They really help me stay calm throughout the day.",
      photo: girl3,
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-carousel">
      <h2 className="carousel-title">What Our Users Are Saying</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={goToPrev}>
          &#8592;
        </button>

        <div className="carousel">
          <div className="testimonial-card">
            <img
              src={testimonials[currentIndex].photo}
              alt={testimonials[currentIndex].name}
              className="testimonial-photo"
            />
            <h3 className="customer-name">{testimonials[currentIndex].name}</h3>
            <p className="testimonial-text">{testimonials[currentIndex].review}</p>
          </div>
        </div>

        <button className="carousel-button next" onClick={goToNext}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
