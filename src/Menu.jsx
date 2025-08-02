import React from 'react';
import './Menu.css';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu ${isOpen ? 'is-open' : ''}`}>
      <div className="menu-items">
        <a href="#home" className="menu-item" onClick={toggleMenu}>
          <span className="menu-item-text">Home</span>
        </a>
        <a href="#about" className="menu-item" onClick={toggleMenu}>
          <span className="menu-item-text">About</span>
        </a>
        <a href="#services" className="menu-item" onClick={toggleMenu}>
          <span className="menu-item-text">Services</span>
        </a>
        <a href="#contact" className="menu-item" onClick={toggleMenu}>
          <span className="menu-item-text">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Menu;