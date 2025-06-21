import React, { useState, useEffect } from 'react';
import './NorthSikkim.css';

// Import your images - you'll need to add these to your assets folder
import North1 from '../../assets/North1.jpg';
import North2 from '../../assets/North2.jpg';
import North3 from '../../assets/North3.jpg';
import North4 from '../../assets/North4.jpg';

const NorthSikkim = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Image slider data - replace with your actual image imports
  const sliderImages = [
    {
      src: North1,
      alt: "Gurudongmar Lake",
      caption: "Gurudongmar Lake - Sacred Waters at 17,800 ft"
    },
    {
      src: North4,
      alt: "Lachung Valley",
      caption: "Lachung - Land of Small Passes"
    },
    {
      src: North3,
      alt: "Phodong Monastery",
      caption: "Phodong Monastery - Monastery known for its beautiful architecture"
    },
    {
      src: North2,
      alt: "Yumthang Valley",
      caption: "Yumthang Valley - Nature's Own Paradise"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  const touristSpots = [
    {
      name: "Gurudongmar Lake",
      description: "One of the highest lakes in the world at 17,800 ft, considered sacred by Buddhists, Sikhs, and Hindus.",
      highlights: ["Sacred high-altitude lake", "Crystal clear waters", "Spectacular mountain views", "Religious significance"]
    },
    {
      name: "Yumthang Valley",
      description: "Known as the 'Valley of Flowers', this picturesque valley blooms with rhododendrons and primulas.",
      highlights: ["Rhododendron sanctuary", "Hot springs", "Alpine meadows", "Shingba Rhododendron Sanctuary"]
    },
    {
      name: "Zero Point",
      description: "The last motorable point towards the Indo-China border, offering breathtaking views of snow-capped peaks.",
      highlights: ["Border area views", "Snow playground", "Mountain photography", "Adventure destination"]
    },
    {
      name: "Lachung",
      description: "A beautiful mountain village known for its apple orchards and traditional Lepcha architecture.",
      highlights: ["Apple orchards", "Traditional architecture", "Monastery visits", "Mountain village life"]
    },
    {
      name: "Lachen",
      description: "Gateway to Gurudongmar Lake and Chopta Valley, offering pristine mountain beauty.",
      highlights: ["Base for Gurudongmar", "Lachen Monastery", "Chopta Valley access", "High altitude acclimatization"]
    },
    {
      name: "Thangu Valley",
      description: "A high-altitude valley known for its yak herders and stunning landscape views.",
      highlights: ["Yak herding community", "High altitude plains", "Traditional lifestyle", "Mountain vistas"]
    }
  ];

  const adventureActivities = [
    {
      activity: "High Altitude Trekking",
      location: "Various trails",
      difficulty: "Challenging",
      description: "Experience trekking at extreme altitudes with breathtaking Himalayan views."
    },
    {
      activity: "Photography Tours",
      location: "Gurudongmar & Yumthang",
      difficulty: "Easy to Moderate",
      description: "Capture the pristine beauty of high-altitude landscapes and unique flora."
    },
    {
      activity: "Yak Safari",
      location: "Thangu Valley",
      difficulty: "Easy",
      description: "Experience traditional yak rides through high-altitude meadows."
    },
    {
      activity: "Monastery Visits",
      location: "Lachen & Lachung",
      difficulty: "Easy",
      description: "Explore ancient Buddhist monasteries and experience local spiritual culture."
    },
    {
      activity: "Hot Springs Therapy",
      location: "Yumthang Valley",
      difficulty: "Easy",
      description: "Relax in natural hot springs surrounded by stunning mountain scenery."
    },
    {
      activity: "Flora Exploration",
      location: "Rhododendron Sanctuary",
      difficulty: "Easy to Moderate",
      description: "Discover rare Himalayan flowers and medicinal plants in their natural habitat."
    }
  ];

  const weatherSeasons = [
    {
      season: "Spring (March-May)",
      description: "Best time for rhododendron blooms and pleasant weather",
      temperature: "5°C to 15°C",
      highlights: ["Flower blooms", "Clear skies", "Moderate temperatures"]
    },
    {
      season: "Summer (June-August)",
      description: "Warm days but roads may close due to monsoon",
      temperature: "10°C to 20°C", 
      highlights: ["Warmest period", "Green landscapes", "Monsoon risks"]
    },
    {
      season: "Autumn (September-November)",
      description: "Clear mountain views and stable weather",
      temperature: "0°C to 10°C",
      highlights: ["Crystal clear views", "Stable weather", "Post-monsoon clarity"]
    },
    {
      season: "Winter (December-February)",
      description: "Extreme cold, many areas inaccessible due to snow",
      temperature: "-15°C to 5°C",
      highlights: ["Snow landscapes", "Limited accessibility", "Extreme cold"]
    }
  ];

  return (
    <div className="north-sikkim">
      {/* Vertical Image Slider */}
      <div className="hero-slider">
        <div className="slider-container">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="slide-overlay">
                <h2 className="slide-caption">{image.caption}</h2>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Controls */}
        <div className="slider-controls">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`control-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Header Overlay */}
        <div className="hero-header">
          <h1>North Sikkim</h1>
          <p>Journey to the Roof of the World</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Explore North Sikkim</h2>
            <p>
              North Sikkim is the most pristine and least populated district of Sikkim, offering some of the most 
              spectacular high-altitude landscapes in the world. Home to sacred lakes at breathtaking elevations, 
              the famous Valley of Flowers, and traditional mountain communities, this region provides an 
              unforgettable journey into the heart of the Himalayas. From the sacred waters of Gurudongmar Lake 
              to the colorful blooms of Yumthang Valley, North Sikkim is a paradise for nature lovers, 
              adventure seekers, and spiritual travelers.
            </p>
          </div>
        </section>

        {/* Tourist Spots Section */}
        <section className="tourist-spots">
          <div className="container">
            <h2>Sacred Destinations</h2>
            <div className="spots-grid">
              {touristSpots.map((spot, index) => (
                <div key={index} className="spot-card">
                  <h3>{spot.name}</h3>
                  <p>{spot.description}</p>
                  <div className="highlights">
                    <h4>Highlights:</h4>
                    <ul>
                      {spot.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adventure Activities Section */}
        <section className="adventure-section">
          <div className="container">
            <h2>High Altitude Adventures</h2>
            <div className="activities-grid">
              {adventureActivities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-header">
                    <h3>{activity.activity}</h3>
                    <span className="difficulty-badge">{activity.difficulty}</span>
                  </div>
                  <p className="location">📍 {activity.location}</p>
                  <p className="description">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather & Seasons Section */}
        <section className="weather-section">
          <div className="container">
            <h2>Seasonal Guide</h2>
            <div className="weather-grid">
              {weatherSeasons.map((season, index) => (
                <div key={index} className="weather-card">
                  <div className="season-header">
                    <h3>{season.season}</h3>
                    <span className="temperature-badge">{season.temperature}</span>
                  </div>
                  <p className="season-description">{season.description}</p>
                  <div className="season-highlights">
                    <h4>Key Features:</h4>
                    <ul>
                      {season.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="travel-tips">
          <div className="container">
            <h2>Essential Travel Information</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h3>🎫 Special Permits</h3>
                <p>Protected Area Permit (PAP) required for all tourists. Inner Line Permit needed for certain areas. Book through registered tour operators only.</p>
              </div>
              <div className="tip-card">
                <h3>🏔️ Altitude Sickness</h3>
                <p>Acclimatization essential. Areas above 14,000 ft. Carry oxygen cylinders, avoid alcohol, and consult doctors for pre-existing conditions.</p>
              </div>
              <div className="tip-card">
                <h3>🚗 Transportation</h3>
                <p>Only shared taxis and tourist vehicles allowed. Book through tour operators. Roads may close due to weather conditions.</p>
              </div>
              <div className="tip-card">
                <h3>🏠 Accommodation</h3>
                <p>Limited homestays and guesthouses. Book in advance. Basic facilities available. Carry sleeping bags for comfort.</p>
              </div>
              <div className="tip-card">
                <h3>🎒 Essential Items</h3>
                <p>Warm clothing, sunscreen, sunglasses, first aid kit, energy bars, and water bottles. Weather can change rapidly.</p>
              </div>
              <div className="tip-card">
                <h3>📱 Connectivity</h3>
                <p>Limited mobile network. BSNL works best. Inform family about communication gaps. Carry power banks.</p>
              </div>
              <div className="tip-card">
                <h3>💊 Health Precautions</h3>
                <p>Carry medicines for altitude sickness, cold, and stomach issues. Stay hydrated and avoid heavy meals.</p>
              </div>
              <div className="tip-card">
                <h3>🌿 Environmental Care</h3>
                <p>Maintain cleanliness, don't litter, respect local customs, and preserve the pristine environment for future generations.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NorthSikkim;