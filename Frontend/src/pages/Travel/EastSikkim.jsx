import React from 'react';
import styles from './EastSikkim.module.css';
import Zuluk1 from "../../assets/East4.jpg"
import Gangtok1 from "../../assets/East Sikkim/Gangtok.jpg"

const EastSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Nathula Pass",
      description: "Nathu La is a high-altitude mountain pass in the Himalayas connecting India's Sikkim with Tibet, China. A historically significant part of the ancient Silk Road, it now serves as a key border trading post. Located at over 4,300 meters, it offers stunning Himalayan views but requires permits for Indian citizens to visit, typically best done during the summer months.",
      image1: "	https://glacialtravels.com/Travel/eastsikkim/Nathula.jpg",
      image2: "	https://glacialtravels.com/Travel/eastsikkim/Nathula2.png"
    },
    {
      id: 2,
      name: "Changu Lake",
      description: "Tsomgo Lake, also known as Changu Lake, is a glacial lake in Sikkim, India, located at an altitude of 3,753 m (12,313 ft). The lake remains frozen during the winter season and is surrounded by snow-capped mountains. It is a popular tourist destination and is considered sacred by the local Sikkimese people.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/1.png",
      image2: "https://glacialtravels.com/Travel/eastsikkim/2.png"
    },
    {
      id: 3,
      name: "Reshikhola",
      description: "Reshikhola is a peaceful place on the border of Sikkim and West Bengal. It is named after the Reshi River, which flows through it. Surrounded by green hills, it is a perfect spot for nature lovers. People come here to relax, enjoy the fresh air, and listen to the sound of the river. You can also go for short walks, watch birds, or camp by the riverside.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/ReshiKhola.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/Reshikhola.png"
    },
    {
      id: 4,
      name: "Zuluk",
      description: "Zuluk is a small hamlet located at an altitude of around 10,000 feet on the rugged terrain of the lower Himalayas in East Sikkim. This offbeat destination is famous for its zigzag roads and breathtaking sunrise views over the Kanchenjunga peak. The winding roads with hairpin bends offer an adventurous drive and spectacular mountain views throughout the journey.",
      image1: Zuluk1,
      image2: "https://glacialtravels.com/Travel/eastsikkim/Zaluk2.jpg"
    },
    {
      id: 5,
      name: "Kupup Lake",
      description: "Kupup Lake, also known as Elephant Lake due to its shape, is a pristine high-altitude lake located at about 13,000 feet above sea level. This beautiful lake is surrounded by barren mountains and offers stunning reflections of the sky. The lake is often frozen during winter months and presents a mesmerizing landscape for photographers and nature enthusiasts.",
      image1: "	https://glacialtravels.com/Travel/eastsikkim/Elephant%20Lake.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/kupup_valley.jpg"
    },
    {
      id: 6,
      name: "Baba Mandir",
      description: "Baba Harbhajan Singh Temple, commonly known as Baba Mandir, is dedicated to an Indian Army soldier who died in 1968. Located at an altitude of 13,123 feet, this sacred shrine is believed to protect the soldiers stationed in the area. The temple attracts thousands of devotees and tourists who come to pay their respects and seek blessings from Baba Harbhajan Singh.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/BabaHarbajan.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/baba-harbhajan-singh2.jpg"
    },
    {
      id: 7,
      name: "Nathang Valley",
      description: "Nathang Valley, often called the \"Ladakh of the East,\" is a high-altitude valley in East Sikkim, India. Situated at over 13,000 feet above sea level, it's known for its vast, treeless landscape resembling the Tibetan plateau. This stark yet beautiful terrain offers breathtaking panoramic views of the surrounding snow-capped Himalayan peaks. It is a popular destination for tourists seeking adventure and stunning scenery, and serves as a base for exploring",
      image1: "	https://glacialtravels.com/Travel/eastsikkim/Nathang2.png",
      image2: "https://glacialtravels.com/Travel/eastsikkim/Nathang.png"
    },
    {
      id: 8,
      name: "Mandakini falls",
      description: "Mandakini Falls is a beautiful waterfall in Sikkim, located on the way to Changu Lake (Tsomgo Lake) and Nathula Pass. The waterfall cascades down from a great height, creating a stunning view surrounded by lush greenery and rocky cliffs. The sound of the flowing water and the cool mist make it a refreshing stop for travelers.It is a great place to take a break, click pictures, and enjoy the beauty of nature. ",
      image1: "https://glacialtravels.com/Travel/eastsikkim/mandakini-water-falls-1360325.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/Mandakini.png"
    },
    {
      id: 9,
      name: "Kali khola falls",
      description: "Kali Khola Falls, also known as Kuikhola Falls, is a beautiful waterfall located on the way to Rongli in East Sikkim. The water cascades down from a great height, creating a stunning view and a refreshing atmosphere. Surrounded by lush green hills, it is a perfect spot to take a break and enjoy nature while traveling.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/kali-khola-falls.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/Kalikhola.png"
    },
    {
      id: 10,
      name: "Hanuman Tok",
      description: "Hanuman Tok is a famous temple in Gangtok, Sikkim, dedicated to Lord Hanuman. It is located at an altitude of around 7,200 feet and offers a breathtaking view of Mount Kanchenjunga and the surrounding valleys. The temple is well-maintained by the Indian Army and has a peaceful atmosphere, making it a great place for meditation and prayers.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/Hanumantok.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/Hanuman_tok2.jpg"
    },
    {
      id: 11,
      name: "Menmecho Lake",
      description: "Menmecho Lake is a sacred high-altitude lake situated at around 12,000 feet above sea level. This pristine lake is surrounded by rugged mountains and offers a spiritual experience for visitors. The lake is considered holy by the local Buddhist community and provides a serene environment for meditation and reflection amidst the stunning Himalayan landscape.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/menmecholake.jpg",
      image2: "https://glacialtravels.com/Travel/eastsikkim/menmechoLake2.jpg"
    },
    {
      id: 12,
      name: "Gangtok Ropeway",
      description: "The Gangtok Ropeway is a popular cable car ride that offers a breathtaking aerial view of Gangtok city, the surrounding valleys, and the snow-capped Himalayas. The ropeway has three stations: Deorali (lower station), Namnang (middle station), and Tashiling (upper station). The ride covers a distance of about 1 km and takes around 7 minutes, giving visitors a stunning bird’s-eye view of the landscape.",
      image1: "https://glacialtravels.com/Travel/eastsikkim/Ropeway2.jpg",
      image2: Gangtok1
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.videoContainer}>
          <video 
            className={styles.heroVideo} 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://media.istockphoto.com/id/2150271703/video/aerial-view-of-solomons-temple-in-aizawl-the-capital-city-of-mizoram-this-architectural.mp4?s=mp4-640x640-is&k=20&c=dz2m_3Cz0b64bKHDVufOon-1f4SeH6WSJIs6S3vOwts=" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>East Sikkim</h1>
          <p className={styles.heroCaption}>Discover the breathtaking beauty of Eastern Himalayas</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <h2 className={styles.overviewTitle}>East Sikkim Overview</h2>
        <p className={styles.overviewText}>
          East Sikkim, home to the vibrant capital Gangtok, offers a captivating blend of natural beauty, cultural richness, and adventure. Explore the majestic 
          Kanchenjunga, the third-highest peak in the world, and witness breathtaking sunrises over the snow-capped Himalayas. Immerse yourself in the spiritual 
          ambiance of ancient monasteries like Rumtek and Enchey, and delve into the local culture at vibrant markets and handicraft centers. For adventure seekers, 
          East Sikkim offers thrilling opportunities for trekking, hiking, and exploring the scenic landscapes.
        </p>
      </section>

      {/* Destinations Section */}
      <section className={styles.destinationsSection}>
        {destinations.map((destination) => (
          <div key={destination.id} className={styles.destinationCard}>
            <h3 className={styles.destinationTitle}>{destination.name}</h3>
            <p className={styles.destinationDescription}>{destination.description}</p>
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
    </div>
  );
};

export default EastSikkim;