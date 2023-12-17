// File: src/components/Header.jsx

import React from 'react';
import './Header.css';
import profileImage from '../assets/pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Header = () => {
    const instagramLink = 'https://www.instagram.com/cool_akashpatel';
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
        <div className="avatar">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div className="logo">Akash Patel</div>
          <ul className="nav-links">
          <li>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
              </a>
            </li>
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
