import React, { useState, useEffect } from 'react';
import styles from './SouthSikkim.module.css';

// Import your images - you'll need to add these to your assets folder
import South1 from '../../assets/South1.jpg';
import South2 from '../../assets/South2.jpg';
import South3 from '../../assets/South3.jpeg';
import South4 from '../../assets/South4.jpg';

const SouthSikkim = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Image carousel data for South Sikkim
  const verticalSliderImages = [
    {
      src: South1,
      alt: "Ravangla",
      caption: "Ravangla - Tranquil Mountain Retreat"
    },
    {
      src: South2,
      alt: "Namchi",
      caption: "Namchi - Spiritual Capital of South Sikkim"
    },
    {
      src: South3,
      alt: "Temi Tea Garden",
      caption: "Temi - Only Tea Garden of Sikkim"
    },
    {
      src: South4,
      alt: "Char Dham",
      caption: "Char Dham - Replicas of the four sacred Hindu shrines"
    }
  ];

  // Auto-carousel functionality for vertical sliding
  useEffect(() => {
    const verticalSliderTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % verticalSliderImages.length);
    }, 4500);

    return () => clearInterval(verticalSliderTimer);
  }, [verticalSliderImages.length]);

  const southSikkimAttractions = [
    {
      location: "Namchi",
      description: "The cultural and religious hub of South Sikkim, famous for its massive statues and spiritual significance.",
      highlights: ["Char Dham", "Samdruptse Hill", "Statue of Guru Padmasambhava", "Rock Garden"]
    },
    {
      location: "Ravangla",
      description: "A serene hill station known for its Buddha Park and stunning views of Mount Kanchenjunga.",
      highlights: ["Buddha Park", "Rayong Sunrise Point", "Tathagata Tsal", "Bon Monastery"]
    },
    {
      location: "Temi Tea Garden",
      description: "Sikkim's only tea estate offering organic tea cultivation amidst scenic mountain landscapes.",
      highlights: ["Tea plantation tours", "Organic tea tasting", "Scenic photography", "Tea processing unit"]
    },
    {
      location: "Jorethang",
      description: "Commercial hub and gateway to South Sikkim with vibrant local markets and cultural diversity.",
      highlights: ["Local markets", "River confluence", "Cultural diversity", "Trade center"]
    },
    {
      location: "Maenam Hill",
      description: "Wildlife sanctuary and trekking destination offering rich biodiversity and panoramic views.",
      highlights: ["Wildlife sanctuary", "Trekking trails", "Bird watching", "Rhododendron forests"]
    },
    {
      location: "Tendong Hill",
      description: "Sacred hill with mythological significance and excellent trekking opportunities for nature lovers.",
      highlights: ["Mythological significance", "Trekking routes", "Panoramic views", "Sacred forests"]
    }
  ];

  const adventureActivities = [
    {
      activity: "Buddha Park Meditation",
      location: "Ravangla",
      difficulty: "Easy",
      description: "Peaceful meditation sessions in the serene environment of the world's largest Buddha statue."
    },
    {
      activity: "Temi Tea Garden Tour",
      location: "Temi",
      difficulty: "Easy",
      description: "Guided tours through Sikkim's only tea plantation with tea tasting and processing demonstrations."
    },
    {
      activity: "Maenam Hill Trek",
      location: "Ravangla to Maenam",
      difficulty: "Moderate",
      description: "Scenic trek through rhododendron forests to Maenam Wildlife Sanctuary with bird watching opportunities."
    },
    {
      activity: "Tendong Hill Expedition",
      location: "Damthang",
      difficulty: "Moderate to Challenging",
      description: "Sacred hill trek offering spiritual significance and panoramic views of the Himalayas."
    },
    {
      activity: "Cultural Village Tours",
      location: "Multiple villages",
      difficulty: "Easy",
      description: "Immersive experiences in traditional Sikkimese villages with homestay options."
    }
  ];

  const handleVerticalNavigation = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.southSikkimWrapper}>
      {/* Hero Vertical Image Slider */}
      <div className={styles.heroVerticalSlider}>
        <div className={styles.sliderContainer}>
          {verticalSliderImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.verticalSlide} ${index === currentImageIndex ? styles.activeSlide : ''}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className={styles.slideGradientOverlay}>
                <h2 className={styles.slideCaption}>{image.caption}</h2>
              </div>
            </div>
          ))}
        </div>
        
        {/* Vertical Navigation Indicators */}
        <div className={styles.verticalNavigation}>
          {verticalSliderImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.verticalIndicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
              onClick={() => handleVerticalNavigation(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Title Overlay */}
        <div className={styles.mainTitleOverlay}>
          <h1>South Sikkim</h1>
          <p>Spiritual Sanctuaries & Cultural Heritage</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContentArea}>
        {/* About South Sikkim Section */}
        <section className={styles.southAboutSection}>
          <div className={styles.sectionContainer}>
            <h2>Experience South Sikkim</h2>
            <p>
              South Sikkim stands as the spiritual and cultural heart of the state, where ancient traditions 
              blend seamlessly with natural beauty. This region is home to magnificent religious monuments, 
              including the towering statue of Guru Padmasambhava and the serene Buddha Park in Ravangla. 
              The only tea garden of Sikkim, Temi, spreads across the rolling hills offering visitors a 
              unique tea cultivation experience. From the sacred peaks of Tendong Hill to the biodiversity 
              of Maenam Wildlife Sanctuary, South Sikkim presents a perfect harmony of spiritual enlightenment, 
              cultural richness, and natural splendor that attracts pilgrims, nature enthusiasts, and 
              cultural explorers from around the world.
            </p>
          </div>
        </section>

        {/* Attractions Showcase */}
        <section className={styles.attractionsDisplay}>
          <div className={styles.sectionContainer}>
            <h2>Major Attractions</h2>
            <div className={styles.attractionsLayout}>
              {southSikkimAttractions.map((attraction, index) => (
                <div key={index} className={styles.attractionPanel}>
                  <h3>{attraction.location}</h3>
                  <p>{attraction.description}</p>
                  <div className={styles.highlightsSection}>
                    <h4>Key Highlights:</h4>
                    <ul>
                      {attraction.highlights.map((highlight, idx) => (
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
        <section className={styles.activitiesShowcase}>
          <div className={styles.sectionContainer}>
            <h2>Adventure Activities</h2>
            <div className={styles.activitiesLayout}>
              {adventureActivities.map((adventure, index) => (
                <div key={index} className={styles.activityPanel}>
                  <div className={styles.activityHeader}>
                    <h3>{adventure.activity}</h3>
                    <span className={styles.difficultyBadge}>{adventure.difficulty}</span>
                  </div>
                  <p className={styles.activityLocation}>📍 {adventure.location}</p>
                  <p className={styles.activityDescription}>{adventure.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Guidelines Section */}
        <section className={styles.travelGuidelines}>
          <div className={styles.sectionContainer}>
            <h2>Travel Guidelines</h2>
            <div className={styles.guidelinesLayout}>
              <div className={styles.guidelineCard}>
                <h3>🗓️ Best Time to Visit</h3>
                <p>March to June and September to December offer the best weather conditions. Avoid monsoon season (July-August) for better road accessibility and clear mountain views.</p>
              </div>
              <div className={styles.guidelineCard}>
                <h3>🚗 Getting Around</h3>
                <p>Well-connected by road from Gangtok and Siliguri. Local taxis and shared vehicles available. Most attractions accessible by road with good connectivity.</p>
              </div>
              <div className={styles.guidelineCard}>
                <h3>🏠 Accommodation</h3>
                <p>Range from budget guesthouses to luxury resorts in Namchi and Ravangla. Homestays available in villages for authentic cultural experiences.</p>
              </div>
              <div className={styles.guidelineCard}>
                <h3>🍽️ Local Cuisine</h3>
                <p>Experience authentic Sikkimese cuisine including gundruk, sinki, and traditional beverages. Tea tasting available at Temi Tea Garden.</p>
              </div>
              <div className={styles.guidelineCard}>
                <h3>📸 Photography Tips</h3>
                <p>Best shots during golden hours at Buddha Park and Char Dham. Tea gardens offer excellent landscape photography opportunities throughout the day.</p>
              </div>
              <div className={styles.guidelineCard}>
                <h3>⚠️ Travel Tips</h3>
                <p>Respect religious customs at monasteries and temples. Carry sufficient cash as ATM facilities are limited in remote areas. Pack layers for changing weather conditions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SouthSikkim;