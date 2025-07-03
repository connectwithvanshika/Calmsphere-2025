import React from "react";
import "./ContactPage.css"; 

const ContactPage = () => {
  return (
    <div className="contact-container">

      <div className="contact-form">
        <h2>Chat to our CalmSphere Team</h2>
        <p>
          Feeling stuck or curious about something? Whether it's a gentle walkthrough or a soulful demo — our warm-hearted team is here. We'll reach out within 2 hours.
        </p>

        <form>
          <div className="input-group">
            <input type="text" placeholder="First name (e.g. Aanya)" />
            <input type="text" placeholder="Last name (e.g. Sharma)" />
          </div>
          <input type="text" placeholder="Your role (e.g. Student, Wellness Coach)" />
          <input type="email" placeholder="Work or personal email" />
          <input type="tel" placeholder="+91 (000) 000-0000" />

          <div className="employee-select">
            <label className="option">
              <input type="radio" name="accountType" />
              <div>
                <strong>I'm a solo seeker</strong>
                <p>I'd like to create a peaceful space just for myself.</p>
              </div>
            </label>
            <label className="option">
              <input type="radio" name="accountType" />
              <div>
                <strong>I'm with a mindful team</strong>
                <p>We're creating a shared wellness journey together.</p>
              </div>
            </label>
          </div>

          <button type="submit">Let's Connect</button>
        </form>
      </div>

      {/* Right Testimonial Section */}
      <div className="contact-visual">
        <div className="testimonial-overlay">
          <p>
            In the stillness of our breath and the quiet corners of our mind lies a truth more powerful than any noise the world can offer. Lord Buddha once said,'Peace comes from within. Do not seek it without. And in that simple line lies the essence of all healing.
          </p>
          <h4>Lord Buddha</h4>
          <span>Spiritual Guide · Beacon of Inner Peace</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
