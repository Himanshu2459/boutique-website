import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar fade-in">
      <div className="nav-left">
        <a href="/" className="logo">Shreesingar</a>
      </div>
      
      <div className="nav-center">
        <a href="#home" className="nav-link">Home</a>
        <a href="#new-arrivals" className="nav-link">New Arrivals</a>
        <a href="#collections" className="nav-link">Collections</a>
        <a href="#summer" className="nav-link">Summer Wear</a>
        <a href="#about" className="nav-link">About</a>
      </div>
      
      <div className="nav-right">
        <button className="icon-btn" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </button>
        <button className="icon-btn" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </button>
        <button className="icon-btn" aria-label="Cart">
          <i className="fas fa-shopping-bag"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
