import React, { useState, useEffect } from 'react';
import styles from './WestSikkim.module.css';

// Import your images - you'll need to add these to your assets folder
import West1 from '../../assets/West1.jpg';
import West2 from '../../assets/West2.jpg';
import West3 from '../../assets/West3.png';
import West4 from '../../assets/West4.avif';

// Import destination images from West Sikkim folder
import KhecheopalriLake from '../../assets/West Sikkim/Khecheopalri Lake.jpg';
import DarapVillage from '../../assets/West Sikkim/DarapVillage.jpg';
import Pelling from '../../assets/West Sikkim/Pelling.jpg';
import RabdentseRuins from '../../assets/West Sikkim/Rabdentse Ruins.jpg';
import RimbiWaterfall from '../../assets/West Sikkim/RimbiWaterfall.jpg';
import Yuksom from '../../assets/West Sikkim/Yuksom.webp';

const WestSikkim = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);

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
      attractions: ["Kanchenjunga Views", "Pemayangtse Monastery", "Skywalk", "Sangachoeling Monastery"],
      image: Pelling
    },
    {
      place: "Khecheopalri Lake",
      description: "Sacred lake revered by both Buddhists and Hindus, believed to fulfill wishes of devotees.",
      attractions: ["Sacred significance", "Crystal clear waters", "Bird watching", "Prayer flags"],
      image: KhecheopalriLake
    },
    {
      place: "Yuksom",
      description: "Historic village and the first capital of Sikkim, base camp for Kanchenjunga trek.",
      attractions: ["Historical importance", "Trekking base", "Norbugang Coronation Throne", "Kathok Lake"],
      image: Yuksom
    },
    {
      place: "Rabdentse Ruins",
      description: "Archaeological remains of the second capital of Sikkim kingdom with panoramic mountain views.",
      attractions: ["Royal heritage", "Archaeological site", "Mountain panorama", "Historical significance"],
      image: RabdentseRuins
    },
    {
      place: "Darap Village",
      description: "Traditional Limbu village offering authentic rural experience and organic farming practices.",
      attractions: ["Cultural immersion", "Organic farming", "Village walks", "Traditional lifestyle"],
      image: DarapVillage
    },
    {
      place: "Rimbi Waterfall",
      description: "Picturesque waterfall cascading down rocky cliffs, perfect for nature photography.",
      attractions: ["Natural beauty", "Photography spot", "Scenic surroundings", "Peaceful environment"],
      image: RimbiWaterfall
    }
  ];

  // Debug: Log image imports to console
  useEffect(() => {
    console.log('West Sikkim Images loaded successfully');
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleCardFlip = (index) => {
    setFlippedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.westSikkimContainer}>
      {/* Hero Image Carousel */}
      <div className={styles.heroCarouselSection}>
        <div className={styles.carouselWrapper}>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselSlide} ${index === activeSlideIndex ? styles.slideActive : ''}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className={styles.carouselOverlay}>
                <h2 className={styles.carouselTitle}>{image.caption}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className={styles.carouselNavigation}>
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.navIndicator} ${index === activeSlideIndex ? styles.indicatorActive : ''}`}
              onClick={() => handleSlideNavigation(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Header Overlay */}
        <div className={styles.heroTitleOverlay}>
          <h1>West Sikkim</h1>
          <p>Explore Ancient Heritage & Majestic Peaks</p>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className={styles.contentWrapper}>
        {/* About West Sikkim Section */}
        <section className={`${styles.section} ${styles.aboutWestSection}`}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>Discover West Sikkim</h2>
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
        <section className={styles.section}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>Premier Destinations</h2>
            <div className={styles.destinationsGrid}>
              {westSikkimDestinations.map((destination, index) => (
                <div key={index} className={styles.destinationCardContainer}>
                  <div
                    className={`${styles.destinationCard} ${flippedCards.includes(index) ? styles.flipped : ''}`}
                    onClick={() => handleCardFlip(index)}
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCardFlip(index); }}
                  >
                    <div className={styles.cardFront}>
                      <h3>{destination.place}</h3>
                      <p>{destination.description}</p>
                      <div className={styles.attractionsList}>
                        <h4>Key Attractions:</h4>
                        <ul>
                          {destination.attractions.map((attraction, idx) => (
                            <li key={idx}>{attraction}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={styles.cardBack}>
                      <img
                        src={destination.image}
                        alt={destination.place}
                        className={styles.cardBackImg}
                        onError={(e) => {
                          console.error('Failed to load image for:', destination.place);
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className={styles.cardBackTitle}>
                        <h3>{destination.place}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adventure Experiences Section */}
        <section className={styles.section}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>Adventure Experiences</h2>
            <div className={styles.experiencesGrid}>
              {adventureExperiences.map((adventure, index) => (
                <div key={index} className={styles.experienceCard}>
                  <div className={styles.experienceHeader}>
                    <h3>{adventure.experience}</h3>
                    <span className={styles.difficultyLevel}>{adventure.level}</span>
                  </div>
                  <p className={styles.experienceLocation}>🏔️ {adventure.region}</p>
                  <p className={styles.experienceInfo}>{adventure.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Information Section */}
        <section className={styles.section}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>Essential Travel Information</h2>
            <div className={styles.infoCardsGrid}>
              <div className={styles.infoCard}>
                <h3>🗓️ Best Time to Visit</h3>
                <p>March to June offers clear mountain views and pleasant weather. September to December provides crisp air and stunning autumn colors. Avoid monsoon (July-August) for better accessibility and photography opportunities.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>🌤️ Weather & Climate</h3>
                <p>Experience four distinct seasons with temperatures ranging from 5°C to 25°C. Winter brings snow to higher altitudes, while spring showcases blooming rhododendrons. Pack layers for changing weather conditions.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>🚌 Getting There & Around</h3>
                <p>Well-connected by road from Gangtok (4-5 hours) and Siliguri (6-7 hours). Shared taxis and private vehicles available. Some remote areas require 4WD vehicles. Book reliable transport in advance.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>🏨 Accommodation Options</h3>
                <p>Pelling offers luxury resorts with mountain views. Yuksom has cozy guesthouses and homestays. Darap Village provides authentic rural experiences. Advance booking recommended, especially during peak seasons.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>🍜 Local Cuisine & Culture</h3>
                <p>Savor traditional Sikkimese dishes like momos, thukpa, and chhurpi. Experience Buddhist culture through monastery visits and local festivals. Don't miss the organic tea from Temi Tea Garden.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>📸 Photography & Activities</h3>
                <p>Capture stunning landscapes at sunrise/sunset. Visit monasteries for spiritual photography. Trek to viewpoints for panoramic shots. Respect local customs and seek permission before photographing people.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>⚠️ Important Travel Tips</h3>
                <p>Carry sufficient cash as ATMs are limited in remote areas. Respect religious customs at monasteries and temples. Pack warm clothes for higher altitudes. Carry essential medications and travel insurance.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>🎒 What to Pack</h3>
                <p>Warm clothing, comfortable walking shoes, rain gear, power bank, camera, and essential documents. Pack light but include layers for temperature changes. Don't forget your permits and identification.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WestSikkim;