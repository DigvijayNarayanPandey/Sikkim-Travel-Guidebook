import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Sikkim Guide
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/homestays" className="nav-link">Homestays</Link>
          <Link to="/bike-rentals" className="nav-link">Bike Rentals</Link>
          <Link to="/places" className="nav-link">Places to Visit</Link>
          <Link to="/vlog" className="nav-link">Vlogs</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
