import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phone: "",
    accountType: "Solo Seeker" // Default value
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData({ ...formData, accountType: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/vanshika.connects@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          role: formData.role,
          email: formData.email,
          phone: formData.phone,
          accountType: formData.accountType,
          message: "I would like to connect with the CalmSphere Team."
        })
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({
          firstName: "",
          lastName: "",
          role: "",
          email: "",
          phone: "",
          accountType: "Solo Seeker"
        });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div className="contact-container">

      <div className="contact-form">
        <h2>Chat to our CalmSphere Team</h2>
        <p>
          Feeling stuck or curious about something? Whether it's a gentle walkthrough or a soulful demo — our warm-hearted team is here. We'll reach out within 2 hours.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name (e.g. Aanya)"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name (e.g. Sharma)"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="role"
            placeholder="Your role (e.g. Student, Wellness Coach)"
            value={formData.role}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Work or personal email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="+91 (000) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="employee-select">
            <label className="option">
              <input
                type="radio"
                name="accountType"
                value="Solo Seeker"
                checked={formData.accountType === "Solo Seeker"}
                onChange={handleChange}
              />
              <div>
                <strong>I'm a solo seeker</strong>
                <p>I'd like to create a peaceful space just for myself.</p>
              </div>
            </label>
            <label className="option">
              <input
                type="radio"
                name="accountType"
                value="Mindful Team"
                checked={formData.accountType === "Mindful Team"}
                onChange={handleChange}
              />
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

      {/* Verification Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Response Sent! ✨</h3>
            <p>Thank you for reaching out! We have received your details.</p>
            <p className="popup-subtext">We'll get back to you at {formData.email || "your email"} shortly.</p>
            <button className="popup-close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
