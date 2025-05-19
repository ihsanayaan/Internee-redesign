import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Work, ContactMail, AccountCircle, Settings, Logout, Close } from '@mui/icons-material';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Internee.pk</h2>
        <button className="close-btn" onClick={onClose}>
          <Close />
        </button>
      </div>
      <ul className="sidebar-links">
        <li><Link to="/" onClick={onClose}><Home /> Home</Link></li>
        <li><Link to="/internships" onClick={onClose}><Work /> Internships</Link></li>
        <li><Link to="/contact" onClick={onClose}><ContactMail /> Contact</Link></li>
        <li><Link to="/profile" onClick={onClose}><AccountCircle /> My Profile</Link></li>
        <li><Link to="/settings" onClick={onClose}><Settings /> Settings</Link></li>
        <li><Link to="/logout" onClick={onClose}><Logout /> Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
