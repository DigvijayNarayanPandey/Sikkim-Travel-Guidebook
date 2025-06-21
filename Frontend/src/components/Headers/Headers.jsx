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
          <Link to="/places" className="nav-link">Travels Destinations</Link>
          <Link to="/hotels" className="nav-link">Hotels and Accomodations</Link>
          <Link to="/adventure-zone" className="nav-link">Adventure Zone</Link>
          <Link to="/disaster-alerts" className="nav-link">Disaster Alerts</Link>
          <Link to="/vlog" className="nav-link">Blogs & Tips</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/login" className="nav-link">Admin Login</Link>   {/* Disaster Alerts connect it*/  }
          <Link to="/permit" className="nav-link">Permit</Link>   
        </nav>
      </div>
    </header>
  );
};

export default Headers;


// Explore now button should be re-directed to Travel page
// Travel page should re-directed to East, West, North, South Sikkim