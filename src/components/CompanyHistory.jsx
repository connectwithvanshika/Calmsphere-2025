import React from 'react';
import './CompanyHistory.css';

const timelineData = [
  {
    year: "2020",
    text: "CalmSphere was born with a vision to create a peaceful digital space for mental clarity and emotional balance.",
  },
  {
    year: "2021",
    text: "Launched our first set of mood tracking tools and mindfulness resources.",
  },
  {
    year: "2022",
    text: "Built a strong team of wellness-focused developers, psychologists, and creatives.",
  },
  {
    year: "2023",
    text: "Refined our features, expanded our user base, and embraced user feedback for meaningful updates.",
  },
  {
    year: "2024 - Now",
    text: "We are a thriving community of people prioritizing their well-being and embracing calm together.",
  },
];

const CompanyHistory = () => {
  return (
    <section className="company-history">
      <h2>Our Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyHistory;
