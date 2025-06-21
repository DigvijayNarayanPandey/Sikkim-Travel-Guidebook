import React, { useState, useEffect } from 'react';
import './WestSikkim.css';

// Import your images - you'll need to add these to your assets folder
import West1 from '../../assets/West1.jpg';
import West2 from '../../assets/West2.jpg';
import West3 from '../../assets/West3.png';
import West4 from '../../assets/West4.avif';

const WestSikkim = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  // Image carousel data for West Sikkim
  const carouselImages = [
    {
      src: West1,
      alt: "Pelling Monastery",
      caption: "Pelling - Gateway to Kanchenjunga Views"
    },
    {
      src: West2,
      alt: "Pemayangtse Monastery",
      caption: "Pemayangtse Monastery - Historic Buddhist site"
    },
    {
      src: West3,
      alt: "Skywalk",
      caption: "Skywalk - Offers stunning views of the Himalayas"
    },
    {
      src: West4,
      alt: "Dubdi Monastery",
      caption: "Dubdi Monastery - The oldest monastery in Sikkim"
    }
  ];

  // Auto-carousel functionality
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(carouselTimer);
  }, [carouselImages.length]);

  const westSikkimDestinations = [
    {
      place: "Pelling",
      description: "A charming hill station offering spectacular views of Mount Kanchenjunga and rich Buddhist heritage.",
      attractions: ["Kanchenjunga Views", "Pemayangtse Monastery", "Skywalk", "Sangachoeling Monastery"]
    },
    {
      place: "Khecheopalri Lake",
      description: "Sacred lake revered by both Buddhists and Hindus, believed to fulfill wishes of devotees.",
      attractions: ["Sacred significance", "Crystal clear waters", "Bird watching", "Prayer flags"]
    },
    {
      place: "Yuksom",
      description: "Historic village and the first capital of Sikkim, base camp for Kanchenjunga trek.",
      attractions: ["Historical importance", "Trekking base", "Norbugang Coronation Throne", "Kathok Lake"]
    },
    {
      place: "Rabdentse Ruins",
      description: "Archaeological remains of the second capital of Sikkim kingdom with panoramic mountain views.",
      attractions: ["Royal heritage", "Archaeological site", "Mountain panorama", "Historical significance"]
    },
    {
      place: "Darap Village",
      description: "Traditional Limbu village offering authentic rural experience and organic farming practices.",
      attractions: ["Cultural immersion", "Organic farming", "Village walks", "Traditional lifestyle"]
    },
    {
      place: "Rimbi Waterfall",
      description: "Picturesque waterfall cascading down rocky cliffs, perfect for nature photography.",
      attractions: ["Natural beauty", "Photography spot", "Scenic surroundings", "Peaceful environment"]
    }
  ];

  const adventureExperiences = [
    {
      experience: "Kanchenjunga Base Camp Trek",
      region: "Yuksom to Goecha La",
      level: "Challenging",
      description: "Epic high-altitude trek offering close encounters with the world's third highest peak."
    },
    {
      experience: "Skywalk Adventure",
      region: "Pelling",
      level: "Easy to Moderate",
      description: "Thrilling glass skywalk suspended 100 feet above ground with Himalayan panorama."
    },
    {
      experience: "Village Homestays",
      region: "Darap, Yuksom",
      level: "Easy",
      description: "Authentic cultural experience staying with local families in traditional villages."
    },
    {
      experience: "Monastery Hopping",
      region: "Pelling Circuit",
      level: "Easy",
      description: "Spiritual journey visiting ancient monasteries with rich Buddhist heritage."
    },
    {
      experience: "Nature Photography",
      region: "Multiple locations",
      level: "Easy to Moderate",
      description: "Capture stunning landscapes, wildlife, and traditional architecture."
    }
  ];

  const handleSlideNavigation = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="west-sikkim-container">
      {/* Hero Image Carousel */}
      <div className="hero-carousel-section">
        <div className="carousel-wrapper">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === activeSlideIndex ? 'slide-active' : ''}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="carousel-overlay">
                <h2 className="carousel-title">{image.caption}</h2>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Navigation */}
        <div className="carousel-navigation">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`nav-indicator ${index === activeSlideIndex ? 'indicator-active' : ''}`}
              onClick={() => handleSlideNavigation(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Header Overlay */}
        <div className="hero-title-overlay">
          <h1>West Sikkim</h1>
          <p>Explore Ancient Heritage & Majestic Peaks</p>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* About West Sikkim Section */}
        <section className="about-west-section">
          <div className="content-container">
            <h2>Discover West Sikkim</h2>
            <p>
              West Sikkim is a treasure trove of ancient monasteries, sacred lakes, and breathtaking mountain vistas. 
              This region serves as the spiritual heart of Sikkim, where centuries-old Buddhist traditions thrive 
              amidst some of the most spectacular Himalayan landscapes. From the historic village of Yuksom, 
              the first capital of Sikkim, to the pristine Khecheopalri Lake considered sacred by locals, 
              West Sikkim offers an authentic glimpse into the cultural and natural heritage of the region. 
              Adventure seekers will find world-class trekking opportunities, while culture enthusiasts can 
              immerse themselves in the rich Buddhist heritage that permeates every aspect of life here.
            </p>
          </div>
        </section>

        {/* Destinations Grid Section */}
        <section className="destinations-showcase">
          <div className="content-container">
            <h2>Premier Destinations</h2>
            <div className="destinations-grid">
              {westSikkimDestinations.map((destination, index) => (
                <div key={index} className="destination-card">
                  <h3>{destination.place}</h3>
                  <p>{destination.description}</p>
                  <div className="attractions-list">
                    <h4>Key Attractions:</h4>
                    <ul>
                      {destination.attractions.map((attraction, idx) => (
                        <li key={idx}>{attraction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adventure Experiences Section */}
        <section className="adventure-experiences">
          <div className="content-container">
            <h2>Adventure Experiences</h2>
            <div className="experiences-grid">
              {adventureExperiences.map((adventure, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <h3>{adventure.experience}</h3>
                    <span className="difficulty-level">{adventure.level}</span>
                  </div>
                  <p className="experience-location">🏔️ {adventure.region}</p>
                  <p className="experience-info">{adventure.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Information Section */}
        <section className="travel-information">
          <div className="content-container">
            <h2>Essential Travel Information</h2>
            <div className="info-cards-grid">
              <div className="info-card">
                <h3>🎯 Planning Your Visit</h3>
                <p>Plan 3-5 days minimum to explore major attractions. Book accommodations in advance, especially during peak seasons (March-May, October-December).</p>
              </div>
              <div className="info-card">
                <h3>🌤️ Weather & Seasons</h3>
                <p>Best visited March-June and September-December. Winter brings snow to higher altitudes. Monsoon (July-August) can cause travel disruptions.</p>
              </div>
              <div className="info-card">
                <h3>🚌 Transportation</h3>
                <p>Shared taxis and private vehicles from Gangtok. Road conditions vary; book reliable transport. Some areas require 4WD vehicles.</p>
              </div>
              <div className="info-card">
                <h3>🏨 Where to Stay</h3>
                <p>Pelling offers hotels and resorts with mountain views. Yuksom has guesthouses and homestays. Advance booking recommended for trekkers.</p>
              </div>
              <div className="info-card">
                <h3>🍜 Food & Culture</h3>
                <p>Try traditional Sikkimese cuisine including momos, thukpa, and chhurpi. Experience Buddhist culture through monastery visits and local festivals.</p>
              </div>
              <div className="info-card">
                <h3>📋 Important Notes</h3>
                <p>Carry cash as ATMs are limited. Respect local customs at religious sites. Pack warm clothes for higher altitudes and weather changes.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WestSikkim;