import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1>Looking for dream internship?</h1>
        <p>Internee.pk kickstarts student’s tech careers with internships, industry exposure, and skills.</p>
      </motion.div>

      {/* Internship Card */}
      <motion.div
        className="internship-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link to="/internships" className="find-btn">Find Internships
         <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 17" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="#00e676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
