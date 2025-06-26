import React, { useState, useEffect } from "react";
import styles from "./NorthSikkim.module.css";

import North1 from "../../assets/North1.jpg";
import North2 from "../../assets/North2.jpg";
import North3 from "../../assets/North3.jpg";
import North4 from "../../assets/North4.jpg";

import GurudongmarLake from "../../assets/North Sikkim/Gurudongmar Lake.jpg";
import YumthangValley from "../../assets/North Sikkim/Yumthang Valley.jpg";
import ZeroPoint from "../../assets/North Sikkim/Zero Point.jpg";
import Lachung from "../../assets/North Sikkim/Lachung.jpg";
import Lachen from "../../assets/North Sikkim/Lachen.jpg";
import ThanguValley from "../../assets/North Sikkim/Thangu Valley.jpg";

const NorthSikkim = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const sliderImages = [
    {
      src: North1,
      alt: "Gurudongmar Lake",
      caption: "Gurudongmar Lake - Sacred Waters at 17,800 ft",
    },
    {
      src: North4,
      alt: "Lachung Valley",
      caption: "Lachung - Land of Small Passes",
    },
    {
      src: North3,
      alt: "Phodong Monastery",
      caption:
        "Phodong Monastery - Monastery known for its beautiful architecture",
    },
    {
      src: North2,
      alt: "Yumthang Valley",
      caption: "Yumthang Valley - Nature's Own Paradise",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const touristSpots = [
    {
      name: "Gurudongmar Lake",
      description:
        "One of the highest lakes in the world at 17,800 ft, considered sacred by Buddhists, Sikhs, and Hindus.",
      highlights: [
        "Sacred high-altitude lake",
        "Crystal clear waters",
        "Spectacular mountain views",
        "Religious significance",
      ],
      image: GurudongmarLake,
    },
    {
      name: "Yumthang Valley",
      description:
        "Known as the 'Valley of Flowers', this picturesque valley blooms with rhododendrons and primulas.",
      highlights: [
        "Rhododendron sanctuary",
        "Hot springs",
        "Alpine meadows",
        "Shingba Rhododendron Sanctuary",
      ],
      image: YumthangValley,
    },
    {
      name: "Zero Point",
      description:
        "The last motorable point towards the Indo-China border, offering breathtaking views of snow-capped peaks.",
      highlights: [
        "Border area views",
        "Snow playground",
        "Mountain photography",
        "Adventure destination",
      ],
      image: ZeroPoint,
    },
    {
      name: "Lachung",
      description:
        "A beautiful mountain village known for its apple orchards and traditional Lepcha architecture.",
      highlights: [
        "Apple orchards",
        "Traditional architecture",
        "Monastery visits",
        "Mountain village life",
      ],
      image: Lachung,
    },
    {
      name: "Lachen",
      description:
        "Gateway to Gurudongmar Lake and Chopta Valley, offering pristine mountain beauty.",
      highlights: [
        "Base for Gurudongmar",
        "Lachen Monastery",
        "Chopta Valley access",
        "High altitude acclimatization",
      ],
      image: Lachen,
    },
    {
      name: "Thangu Valley",
      description:
        "A high-altitude valley known for its yak herders and stunning landscape views.",
      highlights: [
        "Yak herding community",
        "High altitude plains",
        "Traditional lifestyle",
        "Mountain vistas",
      ],
      image: ThanguValley,
    },
  ];

  const adventureActivities = [
    {
      activity: "High Altitude Trekking",
      location: "Various trails",
      difficulty: "Challenging",
      description:
        "Experience trekking at extreme altitudes with breathtaking Himalayan views.",
    },
    {
      activity: "Photography Tours",
      location: "Gurudongmar & Yumthang",
      difficulty: "Easy to Moderate",
      description:
        "Capture the pristine beauty of high-altitude landscapes and unique flora.",
    },
    {
      activity: "Yak Safari",
      location: "Thangu Valley",
      difficulty: "Easy",
      description:
        "Experience traditional yak rides through high-altitude meadows.",
    },
    {
      activity: "Monastery Visits",
      location: "Lachen & Lachung",
      difficulty: "Easy",
      description:
        "Explore ancient Buddhist monasteries and experience local spiritual culture.",
    },
    {
      activity: "Hot Springs Therapy",
      location: "Yumthang Valley",
      difficulty: "Easy",
      description:
        "Relax in natural hot springs surrounded by stunning mountain scenery.",
    },
    {
      activity: "Flora Exploration",
      location: "Rhododendron Sanctuary",
      difficulty: "Easy to Moderate",
      description:
        "Discover rare Himalayan flowers and medicinal plants in their natural habitat.",
    },
  ];

  const weatherSeasons = [
    {
      season: "Spring (March-May)",
      description: "Best time for rhododendron blooms and pleasant weather",
      temperature: "5°C to 15°C",
      highlights: ["Flower blooms", "Clear skies", "Moderate temperatures"],
    },
    {
      season: "Summer (June-August)",
      description: "Warm days but roads may close due to monsoon",
      temperature: "10°C to 20°C",
      highlights: ["Warmest period", "Green landscapes", "Monsoon risks"],
    },
    {
      season: "Autumn (September-November)",
      description: "Clear mountain views and stable weather",
      temperature: "0°C to 10°C",
      highlights: [
        "Crystal clear views",
        "Stable weather",
        "Post-monsoon clarity",
      ],
    },
    {
      season: "Winter (December-February)",
      description: "Extreme cold, many areas inaccessible due to snow",
      temperature: "-15°C to 5°C",
      highlights: ["Snow landscapes", "Limited accessibility", "Extreme cold"],
    },
  ];

  return (
    <div className={styles.northSikkim}>
      {/* Vertical Image Slider */}
      <div className={styles.heroSlider}>
        <div className={styles.sliderContainer}>
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ""
                }`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className={styles.slideOverlay}>
                <h2 className={styles.slideCaption}>{image.caption}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className={styles.sliderControls}>
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.controlDot} ${index === currentSlide ? styles.active : ""
                }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Header Overlay */}
        <div className={styles.heroHeader}>
          <h1>North Sikkim</h1>
          <p>Journey to the Roof of the World</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Introduction Section */}
        <section className={`${styles.section} ${styles.introSection}`}>
          <div className={styles.container}>
            <h2>Explore North Sikkim</h2>
            <p>
              North Sikkim is the most pristine and least populated district of
              Sikkim, offering some of the most spectacular high-altitude
              landscapes in the world. Home to sacred lakes at breathtaking
              elevations, the famous Valley of Flowers, and traditional mountain
              communities, this region provides an unforgettable journey into
              the heart of the Himalayas. From the sacred waters of Gurudongmar
              Lake to the colorful blooms of Yumthang Valley, North Sikkim is a
              paradise for nature lovers, adventure seekers, and spiritual
              travelers.
            </p>
          </div>
        </section>

        {/* Tourist Spots Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Sacred Destinations</h2>
            <div className={styles.spotsGrid}>
              {touristSpots.map((spot, index) => (
                <div key={index} className={styles.spotCardContainer}>
                  <div
                    className={`${styles.spotCard} ${flippedCards[index] ? styles.flipped : ""
                      }`}
                    onClick={() => handleCardFlip(index)}
                  >
                    <div className={styles.spotCardFront}>
                      <h3>{spot.name}</h3>
                      <p>{spot.description}</p>
                      <div className={styles.highlights}>
                        <h4>Highlights:</h4>
                        <ul>
                          {spot.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={styles.spotCardBack}
                      data-name={spot.name}>
                      <img src={spot.image} alt={spot.name} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adventure Activities Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>High Altitude Adventures</h2>
            <div className={styles.activitiesGrid}>
              {adventureActivities.map((activity, index) => (
                <div key={index} className={styles.activityCard}>
                  <div className={styles.activityHeader}>
                    <h3>{activity.activity}</h3>
                    <span className={styles.difficultyBadge}>
                      {activity.difficulty}
                    </span>
                  </div>
                  <p className={styles.location}>📍 {activity.location}</p>
                  <p className={styles.description}>{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather & Seasons Section */}
        <section className={`${styles.section} ${styles.weatherSection}`}>
          <div className={styles.container}>
            <h2>Seasonal Guide</h2>
            <div className={styles.weatherGrid}>
              {weatherSeasons.map((season, index) => (
                <div key={index} className={styles.weatherCard}>
                  <div className={styles.seasonHeader}>
                    <h3>{season.season}</h3>
                    <span className={styles.temperatureBadge}>
                      {season.temperature}
                    </span>
                  </div>
                  <p className={styles.seasonDescription}>
                    {season.description}
                  </p>
                  <div className={styles.seasonHighlights}>
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
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Essential Travel Information</h2>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.permit}><span role="img" aria-label="Permit">🛂</span></div>
                <h3>Special Permits</h3>
                <p>
                  Protected Area Permit (PAP) required for all tourists. Inner
                  Line Permit needed for certain areas. Book through registered
                  tour operators only.
                </p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.altitude}><span role="img" aria-label="Altitude">🩺</span></div>
                <h3>Altitude Sickness</h3>
                <p>
                  Acclimatization essential. Areas above 14,000 ft. Carry oxygen
                  cylinders, avoid alcohol, and consult doctors for pre-existing
                  conditions.
                </p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.transport}><span role="img" aria-label="Transport">🚕</span></div>
                <h3>Transportation</h3>
                <p>
                  Only shared taxis and tourist vehicles allowed. Book through
                  tour operators. Roads may close due to weather conditions.
                </p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.accommodation}><span role="img" aria-label="Accommodation">🏡</span></div>
                <h3>Accommodation</h3>
                <p>
                  Limited homestays and guesthouses. Book in advance. Basic
                  facilities available. Carry sleeping bags for comfort.
                </p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.essentials}><span role="img" aria-label="Essentials">🎒</span></div>
                <h3>Essential Items</h3>
                <p>
                  Warm clothing, sunscreen, sunglasses, first aid kit, energy
                  bars, and water bottles. Weather can change rapidly.
                </p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.connectivity}><span role="img" aria-label="Connectivity">📶</span></div>
                <h3>Connectivity</h3>
                <p>
                  Limited mobile network. BSNL works best. Inform family about
                  communication gaps. Carry power banks.
                </p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.health}><span role="img" aria-label="Health">💊</span></div>
                <h3>Health Precautions</h3>
                <p>
                  Carry medicines for altitude sickness, cold, and stomach
                  issues. Stay hydrated and avoid heavy meals.
                </p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.iconCircle + ' ' + styles.environment}><span role="img" aria-label="Environment">🌱</span></div>
                <h3>Environmental Care</h3>
                <p>
                  Maintain cleanliness, don't litter, respect local customs, and
                  preserve the pristine environment for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NorthSikkim;
