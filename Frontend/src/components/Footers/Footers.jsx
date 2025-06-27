import React from 'react';
import './Footer.css';

const Footers = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Animated Background Pattern */}
      <div className="footer-background"></div>
      
      {/* Overlay */}
      <div className="footer-overlay"></div>
      
      {/* Content */}
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-branding">
            <h2>Explore Sikkim</h2>
            <p>Your ultimate guide to discovering the beauty of Sikkim — homestays, bike rentals, and places to explore!</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/homestays">Homestays</a></li>
                <li><a href="/bikerentals">Bike Rentals</a></li>
                <li><a href="/places">Places to Visit</a></li>
                <li><a href="/vlogs">Blogs</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">📱 Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">👥 Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {currentYear} Sikkim Travel Guidebook. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footers;