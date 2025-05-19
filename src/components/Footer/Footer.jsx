import React from 'react';
import './Footer.css';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone
} from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Internee.pk</h2>
          <p>The ultimate platform designed to turbocharge the IT sector in Pakistan.</p>
          <p><Phone /> +92 312 3023645</p>
          <div className="footer-socials">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><LinkedIn /></a>
            <a href="#"><Instagram /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>Student Ambassador</li>
              <li>Interns Profiles</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Community</li>
              <li>Certification</li>
              <li>Scholarships</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 internee.pk</p>
        <p>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
