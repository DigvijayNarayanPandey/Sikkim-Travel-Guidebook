import React from "react";
import styles from "./NorthSikkim.module.css";
import NorthImg from "../../assets/North Sikkim/Gurudongmar Lake.jpg";

const NorthSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Lachen",
      description:
        "Lachen is a beautiful village in North Sikkim, known for its peaceful and natural surroundings. It is surrounded by tall mountains, green forests, and clear lakes. The calm and quiet atmosphere makes it a perfect place for people who love nature or want to relax away from busy city life.",
      image1: "	https://glacialtravels.com/Travel/northsikkim/Lachen2.png",
      image2: "		https://glacialtravels.com/Travel/northsikkim/Lachen.png",
    },
    {
      id: 2,
      name: "Lachung",
      description:
        "Lachung is a lovely village in North Sikkim, surrounded by colorful flowers, waterfalls, and tall mountains. It is known for its beautiful nature, friendly people, and rich culture. With its peaceful environment and stunning views, Lachung is a great place to visit and enjoy the beauty of the Himalayas.-",
      image1: "https://glacialtravels.com/Travel/northsikkim/2.png",
      image2: "https://glacialtravels.com/Travel/northsikkim/lachung.png",
    },
    {
      id: 3,
      name: "Gurudongmar Lake",
      description:
        "Gurudongmar Lake, located in North Sikkim at a height of 17,800 feet, is a stunning and peaceful place. Surrounded by tall mountains, the lake is one of the highest in the world. Its clear blue water and beautiful views make it a truly magical spot that amazes everyone who visits.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/ReshiKhola.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/Reshikhola.png",
    },
    {
      id: 4,
      name: "Yumthang Valley",
      description:
        "Yumthang Valley, located in North Sikkim, is a beautiful place known as the Valley of Flowers. It is surrounded by tall mountains, green forests, and colorful flowers, especially rhododendrons. With its peaceful nature, clear streams, and stunning views, Yumthang Valley is a great place for both relaxation and adventure.",
      image1:
        "https://glacialtravels.com/Travel/northsikkim/YumthangValley.png",
      image2:
        "https://glacialtravels.com/Travel/northsikkim/YumthangValley2.png",
    },
    {
      id: 5,
      name: "Zero Point",
      description:
        "Kupup Lake, also known as Elephant Lake due to its shape, is a pristine high-altitude lake located at about 13,000 feet above sea level. This beautiful lake is surrounded by barren mountains and offers stunning reflections of the sky. The lake is often frozen during winter months and presents a mesmerizing landscape for photographers and nature enthusiasts.",
      image1: "	https://glacialtravels.com/Travel/northsikkim/ZeroPoint.png",
      image2: "	https://glacialtravels.com/Travel/northsikkim/ZeroPoint2.png",
    },
    {
      id: 6,
      name: "Chopta Valley",
      description:
        " Chopta Valley, in North Sikkim, is a beautiful high-altitude valley known for its snowy mountains, flowing rivers, and colorful rhododendron forests. It offers amazing views and is also a starting point for treks to places like Gurudongmar Lake.",
      image1: "	https://glacialtravels.com/Travel/northsikkim/Chopta2.png",
      image2: "https://glacialtravels.com/Travel/northsikkim/ZeroPoint.png",
    },
    {
      id: 7,
      name: "Mangan ",
      description:
        "Mangan, the main town of North Sikkim, is a peaceful and beautiful place. Surrounded by big mountains and green forests, it offers lovely views and a calm atmosphere. Mangan is perfect for people who want to relax and enjoy nature while also experiencing local culture and adventure.",
      image1: "	https://glacialtravels.com/Travel/northsikkim/Mangan1.png",
      image2: "https://glacialtravels.com/images/places/Chungthang.jpg",
    },
    {
      id: 8,
      name: "Thangu Valley",
      description:
        "Thangu Valley, in North Sikkim, is a peaceful and beautiful place often called the Hidden Valley. It is surrounded by tall mountains, green forests, and colorful wildflowers. With its quiet surroundings, clear streams, and scenic views, Thangu Valley is a great spot for nature lovers and adventurers.",
      image1: "https://glacialtravels.com/Travel/northsikkim/Thangu1.png",
      image2: "https://glacialtravels.com/Travel/northsikkim/Thangu2.png",
    },
    {
      id: 9,
      name: "Mangshila View Point",
      description:
        "Mangshila View Point, located in North Sikkim, is a beautiful spot that offers wide views of the mountains and valleys. Surrounded by green forests and tall peaks, it is known for its amazing sunrises, sunsets, and colorful wildflowers. It’s a peaceful and scenic place, perfect for nature lovers and photographers.",
      image1: "	https://glacialtravels.com/Travel/northsikkim/mangshila.png",
      image2: "https://glacialtravels.com/Travel/northsikkim/mangshila2.png",
    },
    {
      id: 10,
      name: "Phodong Monastery",
      description:
        "Phodong Monastery, in North Sikkim, is a peaceful and holy place that reflects the rich culture of the region. Surrounded by mountains and green forests, it is known for its beautiful buildings, colorful paintings, and detailed carvings. The monastery offers a calm and spiritual experience, making it a special place to visit in Sikkim.",
      image1: "	https://glacialtravels.com/Travel/northsikkim/10.png",
      image2: "	https://glacialtravels.com/Travel/northsikkim/9.png",
    },
    {
      id: 11,
      name: "Hot Springs",
      description:
        "The hot springs in Sikkim, located in the Himalayas, are perfect for relaxing and refreshing the body. These natural springs are full of minerals and are believed to help heal and calm the mind. With green forests and tall mountains around, the hot springs offer a peaceful and soothing place to unwind.",
      image1: "	https://glacialtravels.com/Travel/northsikkim/HotSpring1.png",
      image2: "	https://glacialtravels.com/Travel/northsikkim/HotSpring2.png",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.videoContainer}>
          <video className={styles.heroVideo} autoPlay muted loop playsInline>
            <source
              src="https://videos.pexels.com/video-files/15983714/15983714-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>North Sikkim</h1>
          <p className={styles.heroCaption}>
            Discover the breathtaking beauty of Eastern Himalayas
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <h2 className={styles.overviewTitle}>North Sikkim Overview</h2>
        <p className={styles.overviewText}>
          East Sikkim, home to the vibrant capital Gangtok, offers a captivating
          blend of natural beauty, cultural richness, and adventure. Explore the
          majestic Kanchenjunga, the third-highest peak in the world, and
          witness breathtaking sunrises over the snow-capped Himalayas. Immerse
          yourself in the spiritual ambiance of ancient monasteries like Rumtek
          and Enchey, and delve into the local culture at vibrant markets and
          handicraft centers. For adventure seekers, East Sikkim offers
          thrilling opportunities for trekking, hiking, and exploring the scenic
          landscapes.
        </p>
      </section>

      {/* Destinations Section */}
      <section className={styles.destinationsSection}>
        {destinations.map((destination) => (
          <div key={destination.id} className={styles.destinationCard}>
            <h3 className={styles.destinationTitle}>{destination.name}</h3>
            <p className={styles.destinationDescription}>
              {destination.description}
            </p>
            <div className={styles.imageGrid}>
              <div className={styles.imageContainer}>
                <img
                  src={destination.image1}
                  alt={`${destination.name} view 1`}
                  className={styles.destinationImage}
                />
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={destination.image2}
                  alt={`${destination.name} view 2`}
                  className={styles.destinationImage}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Chat Button */}
      <div className={styles.chatButton}>
        <span className={styles.chatIcon}>💬</span>
        <span className={styles.chatText}>CHAT</span>
      </div>
    </div>
  );
};

export default NorthSikkim;
