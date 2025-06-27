import React from "react";
import styles from "./SouthSikkim.module.css";
import TemiTeaGarden from "../../assets/South Sikkim/TemiTeaGarden.jpg";
import Namchi from "../../assets/South Sikkim/Namchi.jpg";
import South1 from "../../assets/South1.jpg";
import MaenamHill from "../../assets/South Sikkim/MaenamHill.jpg"

const SouthSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Temi Tea Garden",
      description:
        "Temi Tea Garden, the only tea estate in Sikkim located in Namchi, is renowned for its lush organic tea plantations set against a backdrop of the Kanchenjunga range. Established in 1969, it offers scenic walks, tea-tasting, and insight into traditional organic tea processing.",
      image1:
        "https://glacialtravels.com/Travel/southsikkim/Temi2.png",
      image2:
        TemiTeaGarden,
    },
    {
      id: 2,
      name: "Char Dham",
      description:
        "The Char Dham complex in Solophok near Namchi replicates India's four holy shrines, crowned by an imposing Shiva statue atop the hill. It's a major spiritual and cultural attraction offering panoramic views and a serene atmosphere.",
      image1: Namchi,
      image2: "https://glacialtravels.com/Travel/southsikkim/2.png",
    },
    {
      id: 3,
      name: "Buddha Park (Tathagata Tsal)",
      description:
        "Buddha Park near Ravangla, featuring a 130-ft high statue of Buddha set amidst landscaped gardens and Cho-Djo lake, is a tranquil spiritual spot consecrated by the 14th Dalai Lama.",
      image1:
        South1,
      image2:
        "https://glacialtravels.com/Travel/southsikkim/Buddha.png",
    },
    {
      id: 4,
      name: "Samdruptse Hill & Guru Padmasambhava Statue",
      description:
        "Samdruptse Hill in Namchi is home to the towering statue of Guru Padmasambhava (135 ft), offering panoramic views of the region and serving as a key pilgrimage and photo point.",
      image1:
        "https://glacialtravels.com/Travel/southsikkim/Samdruptse2.png",
      image2:
        "https://glacialtravels.com/Travel/southsikkim/Samdruptse.png",
    },
    {
      id: 5,
      name: "Maenam Hill",
      description:
        "Maenam Hill, part of the Maenam Wildlife Sanctuary accessible from Ravangla, is a popular trekking destination offering lush forests, panoramic views, and rich biodiversity.",
      image1:
        "https://glacialtravels.com/Travel/southsikkim/Menaam.png",
      image2: MaenamHill,
    },
    {
      id: 6,
      name: "Ralong Monastery",
      description:
        "Ralong Monastery, an ancient Buddhist monastery near Ravangla, is celebrated for its vivid murals, Tibetan architecture, and serene monastic ambiance amidst pine forests.",
      image1:
        "https://glacialtravels.com/Travel/southsikkim/Ralong.png",
      image2:
        "https://glacialtravels.com/Travel/southsikkim/Ralong22.png",
    },
    {
      id: 7,
      name: "Sai Mandir, Namchi",
      description:
        "Sai Mandir, located in Namchi near Char Dham, is a well-known temple devoted to Sai Baba, attracting devotees for its peaceful setting and spiritual environment.",
      image1: "https://glacialtravels.com/Travel/southsikkim/Sai%20mandir%202.png",
      image2: "https://glacialtravels.com/Travel/southsikkim/Sai%20mandir.png",
    },
    {
      id: 8,
      name: "Namchi Ropeway",
      description:
        "The Namchi Ropeway connects River View Point and Char Dham Complex, offering thrilling aerial views of the Namchi valley, tea gardens, and distant hills.",
      image1: "https://glacialtravels.com/Travel/southsikkim/Rope.png",
      image2:
        "https://glacialtravels.com/Travel/southsikkim/Rope22.png",
    },
    {
      id: 9,
      name: "Ravangla Rose Garden",
      description:
        "Ravangla's Rose Garden is an explosion of rose varieties set in well-maintained gardens, offering vibrant colours against the Himalayan backdrop during the flowering season.",
      image1: "https://glacialtravels.com/Travel/southsikkim/Rose2.png",
      image2:
        "https://glacialtravels.com/Travel/southsikkim/Rose.png",
    },
    {
      id: 10,
      name: "Ngadak Monastery",
      description:
        "Ngadak Monastery, situated close to Ravangla, is a lesser-known but beautiful hilltop monastery known for its peaceful prayer halls and panoramic valley views.",
      image1:
        "https://glacialtravels.com/Travel/southsikkim/Ngadak2.png",
      image2: "https://glacialtravels.com/Travel/southsikkim/Ngadak.png",
    },
    {
      id: 11,
      name: "Tarey Bhir (Cliff Walk)",
      description:
        "Tarey Bhir, located near Ravangla, is a sheer cliff-edge viewpoint offering thrilling cliff walks, adventure paths, and jaw-dropping views of the Ralong Khola valley below.",
      image1:
        "https://glacialtravels.com/Travel/southsikkim/Tarey.png",
      image2: "https://glacialtravels.com/Travel/southsikkim/tarey2.png",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.videoContainer}>
          <video className={styles.heroVideo} autoPlay muted loop playsInline>
            <source
              src="https://videocdn.cdnpk.net/videos/9e2b3f2b-7ee8-4a8b-9f79-cb650156e93b/horizontal/previews/watermarked/large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>South Sikkim</h1>
          <p className={styles.heroCaption}>
            Where serenity meets spirituality
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <h2 className={styles.overviewTitle}>South Sikkim Overview</h2>
        <p className={styles.overviewText}>
          South Sikkim is a serene and picturesque region known for its lush
          greenery, gentle hills, and peaceful ambiance. With its pleasant
          climate and scenic beauty, it offers a perfect blend of spirituality,
          culture, and nature. The district is home to the popular town of
          Namchi, the administrative headquarters, which is a major center for
          religious tourism.
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
    </div>
  );
};

export default SouthSikkim;
