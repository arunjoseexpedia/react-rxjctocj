import React from 'react';
import './style.css'; // or extract to SideMenu.css if preferred

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  );
};

export default SideMenu;
