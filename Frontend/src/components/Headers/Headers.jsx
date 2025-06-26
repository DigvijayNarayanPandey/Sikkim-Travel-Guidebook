import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMore = () => {
    setMoreOpen(!moreOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <Link to="/" className="logo">Sikkim Guide</Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/places" className="nav-link">Travel Destinations</Link>
          <Link to="/adventure-zone" className="nav-link">Adventure Zone</Link>
          <Link to="/vlog" className="nav-link">Blogs & Tips</Link>
        </nav>

        <div className="more-menu">
          <div className="hamburger more-btn" onClick={toggleMore}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {moreOpen && (
            <div className="dropdown-content desktop-dropdown">
              <Link to="/hotels" className="nav-link" onClick={() => setMoreOpen(false)}>Hotels & Accommodations</Link>
              <Link to="/disaster-alerts" className="nav-link" onClick={() => setMoreOpen(false)}>Disaster Alerts</Link>
              <Link to="/contact" className="nav-link" onClick={() => setMoreOpen(false)}>Contact Us</Link>
              <Link to="/login" className="nav-link" onClick={() => setMoreOpen(false)}>Admin Login</Link>
              <Link to="/permit" className="nav-link" onClick={() => setMoreOpen(false)}>Permit</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Headers;
