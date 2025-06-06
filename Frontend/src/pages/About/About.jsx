import React from 'react';
import './About.css';

// Import images
import Slide1 from '../../assets/Slide1.jpg';
import Slide2 from '../../assets/Slide2.jpg';
import Slide3 from '../../assets/Slide3.jpg';
import Slide4 from '../../assets/Slide4.jpg';
import Slide5 from '../../assets/Slide5.jpg';
import HomestayImage from '../../assets/Homestays.jpg';
import BikeImage from '../../assets/BikeRents.jpg';
import PlacesImage from '../../assets/Places.jpg';
import SikkimImage from '../../assets/SikkimImage.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Sikkim</h1>
        <p>Essential Information for Your Journey</p>
      </div>

      <div className="about-content">
        {/* Travel Guide Section */}
        <section className="info-section">
          <div className="info-image">
            <img src={SikkimImage} alt="Travel Guide" />
          </div>
          <div className="info-text">
            <h2>Travel Guide</h2>
            <p>Discover the best routes, accommodations, and local experiences in Sikkim. Our comprehensive guide helps you plan your perfect Himalayan adventure.</p>
            <ul>
              <li>Best time to visit</li>
              <li>Local transportation</li>
              <li>Accommodation options</li>
              <li>Local cuisine guide</li>
            </ul>
          </div>
        </section>

        {/* Disaster Information Section */}
        <section className="info-section reverse">
          <div className="info-image">
            <img src={Slide1} alt="Disaster Information" />
          </div>
          <div className="info-text">
            <h2>Disaster Information</h2>
            <p>Stay informed about natural disasters and emergency protocols in Sikkim. Your safety is our priority.</p>
            <ul>
              <li>Emergency contact numbers</li>
              <li>Landslide alerts</li>
              <li>Weather warnings</li>
              <li>Evacuation procedures</li>
            </ul>
          </div>
        </section>

        {/* COVID Information Section */}
        <section className="info-section">
          <div className="info-image">
            <img src={Slide2} alt="COVID Information" />
          </div>
          <div className="info-text">
            <h2>COVID Guidelines</h2>
            <p>Current COVID-19 protocols and safety measures for travelers visiting Sikkim.</p>
            <ul>
              <li>Vaccination requirements</li>
              <li>Testing protocols</li>
              <li>Safety guidelines</li>
              <li>Health facilities</li>
            </ul>
          </div>
        </section>

        {/* Border Guidelines Section */}
        <section className="info-section reverse">
          <div className="info-image">
            <img src={Slide3} alt="Border Guidelines" />
          </div>
          <div className="info-text">
            <h2>Border Guidelines</h2>
            <p>Important information about border regulations and entry requirements for Sikkim.</p>
            <ul>
              <li>Entry permits</li>
              <li>Border checkpoints</li>
              <li>Restricted areas</li>
              <li>Documentation requirements</li>
            </ul>
          </div>
        </section>

        {/* North Sikkim Permit Guidelines Section */}
        <section className="info-section">
          <div className="info-image">
            <img src={Slide4} alt="Permit Guidelines" />
          </div>
          <div className="info-text">
            <h2>North Sikkim Permit Guidelines</h2>
            <p>Essential information about obtaining and using permits for North Sikkim.</p>
            <ul>
              <li>Permit application process</li>
              <li>Required documents</li>
              <li>Permit validity</li>
              <li>Restricted areas</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
