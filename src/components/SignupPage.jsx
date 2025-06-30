// components/SignupPage.jsx
import React from "react";
import "./SignupPage.css"; // Assuming you have separate styling

const SignupPage = ({ onNavigate }) => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Join CalmSphere.</h2>
        <p>Create your account and start your calm journey today.</p>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
          <p className="switch-link">
            Already have an account? <a href="#" onClick={() => onNavigate("login")}>Log in</a>
          </p>
          <p className="switch-link">
            ← <a href="#" onClick={() => onNavigate("home")}>Back to Home</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
