// components/LoginPage.jsx
import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onNavigate }) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back.</h2>
        <p>Log in to continue your wellness journey.</p>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
          <p className="switch-link">
            Don't have an account? <a href="#" onClick={() => onNavigate("signup")}>Sign up</a>
          </p>
          <p className="switch-link">
            ← <a href="#" onClick={() => onNavigate("home")}>Back to Home</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
