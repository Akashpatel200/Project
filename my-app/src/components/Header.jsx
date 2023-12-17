// File: src/components/Header.jsx

import React from 'react';
import './Header.css';
import profileImage from '../assets/pic.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
        <div className="avatar">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div className="logo">Akash Patel</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
