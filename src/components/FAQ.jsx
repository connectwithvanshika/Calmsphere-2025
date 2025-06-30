// components/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "How do I access the CalmSphere services?",
    answer: "Simply sign up or log in, and navigate to the 'Services' page where you can access yoga sessions, focus tools, journaling space, and more.",
  },
  {
    question: "Is the content available for free?",
    answer: "Yes, most of the CalmSphere features are free to use. Some premium features may require a subscription, which will be clearly indicated.",
  },
  {
    question: "Can I track my progress over time?",
    answer: "Absolutely! With the mood tracker and journaling features, you can reflect on your mental wellness journey.",
  },
  {
    question: "How do I reset my password?",
    answer: "Go to the login page and click on 'Forgot Password'. You’ll receive a reset link on your registered email.",
  },
  {
    question: "Is my journal data secure?",
    answer: "Yes, your entries are stored securely and only accessible by you. We value your privacy deeply.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
