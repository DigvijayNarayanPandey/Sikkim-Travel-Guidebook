import React, { useState, useEffect } from "react";
import styles from "./EastSikkim.module.css";

import East1 from "../../assets/East1.jpg";
import East2 from "../../assets/East2.jpg";
import East3 from "../../assets/East3.jpg";
import East4 from "../../assets/East4.jpg";

import GangtokImage from "../../assets/East Sikkim/Gangtok.jpg";
import TsomgoImage from "../../assets/East Sikkim/Tsomgo Lake.jpg";
import NathulaImage from "../../assets/East Sikkim/Nathula Pass.jpg";
import RumtekImage from "../../assets/East Sikkim/Rumtek Monastery.jpg";
import BabaImage from "../../assets/East Sikkim/Baba Harbhajan Singh.jpg";
import HanumanImage from "../../assets/East Sikkim/Hanuman Tok.jpg";

const EastSikkim = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [flippedCards, setFlippedCards] = useState([]);
  const handleFlip = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sliderImages = [
    {
      src: East1,
      alt: "Gangtok City View",
      caption: "Beautiful Gangtok - The Capital of Sikkim",
    },
    {
      src: East2,
      alt: "Tsomgo Lake",
      caption: "Tsomgo Lake - A winter wonderland",
    },
    {
      src: East4,
      alt: "Zuluk",
      caption: "Zuluk - Where the mountains whisper secrets",
    },
    {
      src: East3,
      alt: "Nathula Pass",
      caption: "Nathula - Historic Nathula Pass",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const touristSpots = [
    {
      name: "Gangtok",
      description:
        "The vibrant capital city offering modern amenities, shopping, and stunning mountain views.",
      highlights: [
        "MG Marg",
        "Enchey Monastery",
        "Flower Exhibition Centre",
        "Cable Car Rides",
      ],
      image: GangtokImage,
    },
    {
      name: "Tsomgo Lake",
      description:
        "A glacial lake at 12,400 ft elevation, sacred to locals and breathtakingly beautiful.",
      highlights: [
        "High altitude lake",
        "Yak rides",
        "Snow activities",
        "Sacred significance",
      ],
      image: TsomgoImage,
    },
    {
      name: "Nathula Pass",
      description:
        "Historic mountain pass on the Indo-China border at 14,140 ft elevation.",
      highlights: [
        "Border trade point",
        "Historical significance",
        "Mountain views",
        "Adventure destination",
      ],
      image: NathulaImage,
    },
    {
      name: "Rumtek Monastery",
      description:
        "One of the largest monasteries in Sikkim, known for its golden stupa and religious significance.",
      highlights: [
        "Tibetan Buddhism",
        "Golden Stupa",
        "Religious ceremonies",
        "Architecture",
      ],
      image: RumtekImage,
    },
    {
      name: "Baba Harbhajan Singh Mandir",
      description:
        "A shrine dedicated to an Indian Army soldier, located near Nathula Pass.",
      highlights: [
        "Military history",
        "Spiritual significance",
        "Mountain location",
        "Unique story",
      ],
      image: BabaImage,
    },
    {
      name: "Hanuman Tok",
      description:
        "A temple dedicated to Lord Hanuman offering panoramic views of Gangtok and surrounding valleys.",
      highlights: [
        "Temple visit",
        "City views",
        "Religious significance",
        "Sunset point",
      ],
      image: HanumanImage,
    },
  ];

  const adventureActivities = [
    {
      activity: "River Rafting",
      location: "Teesta River",
      difficulty: "Moderate to Challenging",
      description:
        "Experience thrilling white water rafting in the mighty Teesta River.",
    },
    {
      activity: "Paragliding",
      location: "Gangtok",
      difficulty: "Beginner to Advanced",
      description:
        "Soar above the beautiful landscapes of East Sikkim with professional instructors.",
    },
    {
      activity: "Cable Car Rides",
      location: "Gangtok Ropeway",
      difficulty: "Easy",
      description:
        "Enjoy breathtaking aerial views of Gangtok and the surrounding mountains.",
    },
    {
      activity: "Trekking",
      location: "Various trails",
      difficulty: "Easy to Challenging",
      description:
        "Explore numerous trekking trails with varying difficulty levels.",
    },
  ];

  return (
    <div className={styles.eastSikkim}>
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
          <h1>East Sikkim</h1>
          <p>Discover the Heart of Himalayan Beauty</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <h2>Welcome to East Sikkim</h2>
            <p>
              East Sikkim is the most developed and accessible region of the
              state, home to the capital city Gangtok. This region perfectly
              blends modern urban life with traditional Himalayan culture,
              offering visitors everything from bustling markets and monasteries
              to pristine high-altitude lakes and adventure sports. Whether
              you're seeking spiritual enlightenment, adrenaline-pumping
              activities, or simply want to soak in the breathtaking mountain
              views, East Sikkim has something for everyone.
            </p>
          </div>
        </section>

        {/* Tourist Spots Section */}
        <section className={styles.touristSpots}>
          <div className={styles.container}>
            <h2>Must-Visit Places</h2>
            <div className={styles.spotsGrid}>
              {touristSpots.map((spot, index) => (
                <div
                  key={index}
                  className={styles.spotCard}
                  onClick={() => handleFlip(index)}
                >
                  <div
                    className={`${styles.cardInner} ${flippedCards.includes(index) ? styles.flipped : ""
                      }`}
                  >
                    {/* Front of the card */}
                    <div className={styles.cardFront}>
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

                    {/* Back of the card */}
                    <div className={styles.cardBack}>
                      <div className={styles.imageContainer}>
                        <img src={spot.image} alt={spot.name} />
                        <div className={styles.imageOverlay}>
                          <h3>{spot.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adventure Activities Section */}
        <section className={styles.adventureSection}>
          <div className={styles.container}>
            <h2>Adventure Activities</h2>
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

        {/* Travel Tips Section */}
        <section className={styles.travelTips}>
          <div className={styles.container}>
            <h2>Travel Tips & Information</h2>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <h3>🎫 Permits Required</h3>
                <p>
                  Indian tourists need Inner Line Permit for Nathula Pass.
                  Foreign tourists require Protected Area Permit.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🌡️ Best Time to Visit</h3>
                <p>
                  March to June and September to December. Avoid monsoon season
                  (July-August) due to landslides.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🚗 Getting Around</h3>
                <p>
                  Shared taxis, private vehicles, and local buses. Book permits
                  and vehicles in advance for Nathula Pass.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🏠 Accommodation</h3>
                <p>
                  Wide range from budget homestays to luxury hotels. Gangtok
                  offers the most options for all budgets.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🍽️ Local Cuisine</h3>
                <p>
                  Try momos, thukpa, gundruk, and local Sikkimese dishes.
                  Gangtok has diverse dining options.
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>📱 Connectivity</h3>
                <p>
                  Good mobile network in Gangtok and main towns. Limited
                  connectivity at high altitude areas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EastSikkim;
