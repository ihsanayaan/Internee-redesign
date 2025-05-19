import React from 'react';
import { motion } from 'framer-motion';
import './Internships.css';

// Import your images
import frontendImg from '../../assets/internships/frontend.jpg';
import reactImg from '../../assets/internships/react.jpg';
import uiuxImg from '../../assets/internships/uiux.jpg';
import graphicImg from '../../assets/internships/graphic.jpg';
import chatbotImg from '../../assets/internships/chatbot.jpg';
import otherImg from '../../assets/internships/other.jpg';
import appImg from '../../assets/internships/app.jpg';
import backendImg from '../../assets/internships/backend.jpg';

const internshipsData = [
  { title: 'Frontend Development', applyLink: '#', img: frontendImg },
  { title: 'React Developer', applyLink: '#', img: reactImg },
  { title: 'UI/UX Design', applyLink: '#', img: uiuxImg },
  { title: 'Graphic Design', applyLink: '#', img: graphicImg },
  { title: 'Chatbot Development', applyLink: '#', img: chatbotImg },
  { title: 'Other Internships', applyLink: '#', img: otherImg },
  { title: 'App Development', applyLink: '#', img: appImg },
  { title: 'Backend Development', applyLink: '#', img: backendImg },
];

const Internships = () => {
  return (
    <div className="internships-page container">
      <h2 className="internships-title">Available Internships</h2>
      <div className="internship-list">
        {internshipsData.map((internship, index) => (
          <motion.div
            key={index}
            className="internship-card"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <img src={internship.img} alt={internship.title} className="internship-img" />
            <div className="card-details">
              <h3>{internship.title}</h3>
              <a href={internship.applyLink} className="apply-btn">Apply Now
                 <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="#00e676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Internships;
