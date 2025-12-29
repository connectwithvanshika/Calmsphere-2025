import React from "react";
import "./Navbar.css";

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => onNavigate("home")}
        style={{ cursor: "pointer" }}
      >
        CalmSphere.
      </div>
      <ul className="nav-links">
        <li className={activePage === "home" ? "active-link" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
          >
            Home
          </a>
        </li>
        <li className={activePage === "about" ? "active-link" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("about");
            }}
          >
            About Us
          </a>
        </li>
        <li className={activePage === "services" ? "active-link" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("services");
            }}
          >
            Services
          </a>
        </li>
        <li
          className={activePage === "blog" ? "active-link" : ""}
          onClick={() => onNavigate("blog")}
        >
          <a>Blog</a>
        </li>

        <li className={activePage === "moodlog" ? "active-link" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("moodlog");
            }}
          >
            Mood Log
          </a>
        </li>

        <li className={activePage === "futureyou" ? "active-link" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("futureyou");
            }}
          >
            Future You
          </a>
        </li>

        <li className={activePage === "contact" ? "active-link" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="auth-buttons">
        <button onClick={() => onNavigate("login")}>Login</button>
        <button onClick={() => onNavigate("signup")}>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
