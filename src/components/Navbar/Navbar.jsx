import React, { useState, useEffect, useRef } from 'react';
import { LightMode, DarkMode, AccountCircle, Menu, Settings, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ dark, toggleDark, onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={dark ? 'navbar dark' : 'navbar'}>
      <div className="navbar-container">
        {/* Left: Sidebar toggle icon */}
        <div className="left-icons">
          <Menu className="menu-icon" onClick={onMenuClick} />
        </div>

        {/* Center: Logo */}
        {/* <div className="logo">Internee.pk</div> */}
         <div className="logo-section">
        <img src="/logo.png" alt="Internee.pk Logo" className="logo" />
        <h1>Internee.pk</h1>
      </div>

        {/* Right: Dark mode & profile */}
        <div className="right-icons">
          <button className="dark-toggle" onClick={toggleDark}>
            {dark ? <LightMode /> : <DarkMode />}
          </button>

          <div className="profile-menu" ref={dropdownRef}>
            <AccountCircle
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <Link to="/profile" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                <AccountCircle /> My Profile
              </Link>
              <Link to="/settings" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                <Settings /> Settings
              </Link>
              <Link to="/logout" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                <Logout /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
