// components/Services.jsx
import React from 'react';
import './Services.css';

import yoga from '../assets/yoga_land.jpg';
import music from '../assets/capibara.jpeg';
import Journal from '../assets/journal_land.jpeg';
import timer from '../assets/timer.jpeg';
import moodTracker from '../assets/brown.jpeg';
import meditation from '../assets/meditation.jpeg';
import dailyAffirmations from '../assets/affermation.jpeg';
import sleep from '../assets/sleep.jpeg';
import morning from '../assets/morning.jpeg';

const servicesData = [
  {
    title: "Yoga Tutorials",
    description: "Our Yoga Tutorials are crafted to support your mental clarity, emotional balance, and physical relaxation. With guided sessions for all levels, you'll learn calming stretches, mindful breathing, and gentle movements that ease stress and improve focus. Whether you're starting your day or unwinding at night, our certified instructors help you reconnect with yourself—anytime, anywhere.",
    image: yoga,
    link: "#",
  },
  {
    title: "Soothing Music",
    description: "Escape the noise and drift into serenity with our handpicked collection of soothing soundtracks. Each melody is designed to calm your thoughts, reduce stress, and uplift your mood. Whether you're meditating, journaling, or just unwinding, let these gentle tunes create a peaceful atmosphere that nurtures your inner calm and emotional well-being. ",
    image: music,
    link: "#",
  },
  {
    title: "Journal Space",
    description: "Find your safe corner to reflect, express, and heal. Journal Space is your private sanctuary to write down thoughts, emotions, gratitude, or daily reflections—free from judgment. Whether you're celebrating small wins or releasing heavy moments, this space is crafted to support emotional clarity, personal growth, and peace of mind through mindful writing.",
    image: Journal,
    link: "#",
  },
  {
    title: "Focus Timer",
    description: "Boost your productivity while staying mindful with our beautifully designed Focus Timer. Whether you're studying, working, or meditating, set your intention and let the timer guide your sessions. With customizable intervals and gentle reminders, it helps you stay on track, reduce distractions, and create a balanced rhythm between focused work and intentional rest.",
    image: timer,
    link: "#",
  },
  {
    title: "Mood Tracker",
    description: "Tune into your emotions with our intuitive Mood Tracker. Log your daily feelings, spot patterns, and understand what truly affects your mood. Over time, gain powerful insights into your emotional well-being and make mindful choices that support your mental health journey. It’s not just tracking—it’s self-awareness, healing, and growth in the most gentle way.",
    image: moodTracker,
    link: "#",
  },
  {
    title: "Guided Meditation",
    description: "Begin and end your day with intention through our soothing Guided Meditation sessions. Whether you seek calm, clarity, or emotional balance, these mindful practices will gently guide your breath, relax your mind, and ground your energy. Perfect for beginners or seasoned meditators—breathe in peace, breathe out stress, and embrace the present moment.",
    image: meditation,
    link: "#",
  },
  {
    title: "Daily Affirmations",
    description: "Start each day with empowering words that uplift your spirit and reshape your mindset. Our handpicked Daily Affirmations are crafted to boost confidence, reduce negativity, and inspire self-love. Whether whispered to yourself or read aloud, these gentle reminders will help you grow stronger, calmer, and kinder—one beautiful thought at a time.",
    image: dailyAffirmations,
    link: "#",
  },
  {
    title: "Sleep Sounds",
    description: "Drift into deep, restful sleep with our calming collection of Sleep Sounds. From gentle rain and ocean waves to ambient melodies and forest whispers, each soundscape is designed to quiet your mind and soothe your senses. Let go of the day's stress and embrace tranquil nights filled with peace, comfort, and sweet dreams. ",
    image: sleep,
    link: "#",
  },
  {
    title: "Wellness Blog",
    description: "Dive into our Wellness Blog — a serene space filled with insightful articles, mindful living tips, and expert advice on emotional well-being. Whether you're seeking self-care routines, mental health guidance, or daily motivation, each post is crafted to inspire balance and inner peace. Read, reflect, and grow at your own pace in your cozy calm corner.",
    image: morning,
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="services-section">
  
      <h2>Our Services</h2>
      {/* <p>We offer a range of tools and features to support your mental wellness journey.</p> */}
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-box ${index % 2 === 0 ? 'row' : 'row-reverse'}`}>
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
