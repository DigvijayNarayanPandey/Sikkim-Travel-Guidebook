import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Places.css';


// You'll need to import your TravelBg image
// import TravelBg from '../../assets/TravelBg.jpg';

const Places = () => {


  return (
    <div className='Travel'>
      <div className="travel-page-top">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="travel-heading">"Discover the Four Faces of Sikkim"</h1>
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="regions-container">
            <Link to="/north-sikkim" className="region-card north-card">
              <div className="card-icon">🏔️</div>
              <h2>North Sikkim</h2>
              <p>Known for Gurudongmar Lake, Yumthang Valley, and rugged beauty. Perfect for adventure.</p>
              <div className="card-shine"></div>
            </Link>

            {/* Updated East Sikkim card with Link */}
            <Link to="/east-sikkim" className="region-card east-card">
              <div className="card-icon">🏛️</div>
              <h2>East Sikkim</h2>
              <p>Home to Gangtok, monasteries, and cable car rides with stunning Himalayan views.</p>
              <div className="card-shine"></div>
            </Link>

            <Link to="/west-sikkim" className="region-card west-card">
              <div className="card-icon">🌊</div>
              <h2>West Sikkim</h2>
              <p>Famous for Pelling, waterfalls, ancient monasteries and views of Kanchenjunga.</p>
              <div className="card-shine"></div>
            </Link>
            <Link to="/south-sikkim" className="region-card south-card">
              <div className="card-icon">🧘</div>
              <h2>South Sikkim</h2>
              <p>Serene landscapes, Buddha Park, and Ravangla - ideal for peaceful retreats.</p>
              <div className="card-shine"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;