import React from 'react';
import './TeamCarousel.css';
import vanshika from '../assets/vanshika2.jpeg';
import team_m3 from '../assets/team_m3.jpg';
import Reyansh from '../assets/Reyansh.jpeg';
import team_m4 from '../assets/team_m4.jpeg';
import team_m5 from '../assets/team_m5.jpg';
import team_m6 from '../assets/team_m6.jpg';




const teamMembers = [
  {
    name: "Vanshika",
    role: "Founder & CEO",
    image: vanshika,
    bio: "Visionary leader with a passion for mental wellness and digital innovation.",
  },
  {
    name: "Nirvaan",
    role: "Co-Founder & Designer",
    image: team_m3,
    bio: "Blends calm aesthetics with meaningful user experience.",
  },
  {
    name: "Reyansh",
    role: "Lead Developer",
    image: Reyansh,
    bio: "Code whisperer. Builds scalable, responsive, and beautiful digital tools.",
  },
  {
    name: "Kiya",
    image: team_m4,
    role: "Mental Health Advisor",
    bio: "Certified psychologist shaping calm-driven, science-backed content.",
  },
  {
    name: "Nyra",
    image: team_m5,
    role: "Marketing Head",
    bio: "Brings CalmSphere to the world through creativity and empathy.",
  },
  {
    name: "Ziyana",
    role: "UI/UX Designer",
    image: team_m6,
    bio: "Crafts intuitive and aesthetic user journeys with a touch of calm.",
  },
];

export default function TeamCarousel() {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet the Team</h2>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
