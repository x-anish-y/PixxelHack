import React, { useState } from 'react';
import Menu from './Menu';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">TravSmart</div>
        <button
          onClick={toggleMenu}
          className="hamburger-button"
          aria-label="Toggle menu"
        >
          <div className={`hamburger-lines ${isMenuOpen ? 'open' : ''}`}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </button>
      </div>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;