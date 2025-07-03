import React from "react";
import "./Footer.css";

const Footer = ({ onNavigate }) => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
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
            <li>
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
            <li>
              <a
                href="https://docs.google.com/document/d/1_sRtbaJxML9zk53GOzal9r5GcMf0avVfVTgbdvhw5d4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1JKSJJuWyN3JtnmUrDcwzCbiIKKU11J3-srHGfBS3oD8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: support@calmsphere.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} CalmSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
