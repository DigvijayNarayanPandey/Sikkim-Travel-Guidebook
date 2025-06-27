import React from 'react';
import styles from './WestSikkim.module.css';
import Pelling1 from "../../assets/West Sikkim/Pelling.jpg";
import Yuksom from "../../assets/West Sikkim/Yuksom.webp";

const WestSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Pelling",
      description: "Pelling, a scenic hill town in West Sikkim, is renowned for its stunning views of Mount Kanchenjunga. This tranquil destination blends natural beauty, rich history, and thrilling adventure. Visitors flock to explore its picturesque landscapes, ancient monasteries, cascading waterfalls, and enjoy activities like trekking and paragliding.",
      image1: Pelling1,
      image2: "https://glacialtravels.com/Travel/westsikkim/pelling%20(1).png"
    },
    {
      id: 2,
      name: "Yuksum",
      description: "Yuksom is known as the \"Gateway to Kanchenjunga\", as it is the starting point for the famous Goecha La Trek. It was also the first capital of Sikkim and has deep historical significance. The Coronation Throne of Norbugang, where the first Chogyal (King) of Sikkim was crowned, is an important historical site.",
      image1: "	https://glacialtravels.com/Travel/westsikkim/Yuksum2.png",
      image2: Yuksom,
    },
    {
      id: 3,
      name: "Singhshore Bridge",
      description: "Singhshore Bridge is one of the highest suspension bridges in Sikkim, offering stunning views of deep valleys, waterfalls, and forests. Located near Uttarey, this bridge is around 200 meters long and is a great spot for adventure lovers and photographers. Walking on the bridge while enjoying the cool mountain air is an unforgettable experience.",
      image1: "https://glacialtravels.com/Travel/westsikkim/Singshore2.jpg",
      image2: "	https://glacialtravels.com/Travel/westsikkim/Singshore.jpg"
    },
    {
      id: 4,
      name: "Robdentse Ruins",
      description: "Rabdentse was the second capital of Sikkim (1670–1814) and now stands as a historic ruin surrounded by lush greenery. It offers a glimpse into the royal past of Sikkim, with stone chortens, palace remains, and meditation spots. To reach the site, visitors have to walk through a forested trail, making the journey peaceful and scenic.",
      image1: "https://glacialtravels.com/Travel/westsikkim/Rabdents2.jpg",
      image2: "https://glacialtravels.com/Travel/westsikkim/Rabdents.jpg"
    },
    {
      id: 5,
      name: "Kanchanjunga Falls",
      description: "One of the most famous waterfalls in Sikkim, Kanchenjunga Falls is a massive, multi-tiered waterfall surrounded by dense forests. The water originates from the glaciers of Mount Kanchenjunga, which gives it a powerful and mesmerizing flow. Located near Pelling, it is a popular tourist spot where visitors can take photos, enjoy the sound of cascading water, and even dip their feet in the cold mountain stream.",
      image1: "https://glacialtravels.com/Travel/westsikkim/KanchanFalls2.jpg",
      image2: "https://glacialtravels.com/Travel/westsikkim/KanchanFalls.jpg"
    },
    {
      id: 6,
      name: "Chenrezig Statue",
      description: "The Chenrezig Statue is one of the largest statues of Chenrezig (Avalokiteshvara), the Buddha of Compassion. It stands atop a hill in Pelling, offering panoramic views of the mountains. The glass Sky Walk, built alongside the statue, is the first of its kind in India.",
      image1: "https://glacialtravels.com/Travel/westsikkim/ChenzStatue.jpg",
      image2: "https://glacialtravels.com/Travel/westsikkim/ChenzStatue2.jpg"
    },
    {
      id: 7,
      name: "Varsey Rhododendron Sanctuary",
      description: "This sanctuary is a paradise for nature lovers, famous for its colorful rhododendron forests. During spring (March–May), the entire region turns into a vibrant mix of red, pink, and white rhododendron flowers. It is also home to Red Pandas, Himalayan Black Bears, and exotic bird species. Trekkers and photographers love this place for its serene atmosphere and breathtaking views of the Kanchenjunga range.",
      image1: "https://glacialtravels.com/Travel/westsikkim/RhodePark.jpg",
      image2: "	https://glacialtravels.com/Travel/westsikkim/RhodePark2.jpg"
    },
    {
      id: 8,
      name: "Pamayangtse Gompa",
      description: "One of the oldest and most important monasteries in Sikkim, Pemayangtse Gompa was founded in the 17th century and belongs to the Nyingma sect of Tibetan Buddhism. The monastery is beautifully decorated with ancient Buddhist murals, sculptures, and thangkas. A major attraction inside is the seven-tiered wooden structure called \"Zangdok Palri,\" which depicts Guru Padmasambhava’s heavenly palace.",
      image1: "https://glacialtravels.com/Travel/westsikkim/PemagystaGompa.jpg",
      image2: "https://glacialtravels.com/Travel/westsikkim/PemagystaGompa2.jpg"
    },
    {
      id: 9,
      name: "Sky Walk",
      description: "The Sky Walk in Pelling is the first glass skywalk in India. Built near the Chenrezig Statue, this attraction offers an exciting experience of walking on a transparent floor while enjoying stunning views of the mountains and valleys below. Tourists love taking photos here, as the backdrop includes snow-capped peaks and a giant golden Buddha statue. It’s a must-visit for adventure seekers and photographers",
      image1: "https://glacialtravels.com/Travel/westsikkim/SkyWalk2.jpg",
      image2: "https://glacialtravels.com/Travel/westsikkim/Sky%20walk.jpg"
    },
    {
      id: 10,
      name: "Dzongri La",
      description: "Dzongri La is a high-altitude mountain pass and a dream destination for trekkers and adventure lovers. Located at around 4,200 meters above sea level, it offers breathtaking views of Mount Kanchenjunga and other Himalayan peaks. The trek to Dzongri is challenging but rewarding, passing through lush forests, rhododendron trails, and alpine meadows.",
      image1: "https://glacialtravels.com/Travel/westsikkim/Dzongri.jpg",
      image2: "	https://glacialtravels.com/Travel/westsikkim/Dzongri2.jpg"
    },
    {
      id: 11,
      name: "Kirateshwar Mahadev Temple",
      description: "This is a sacred Hindu temple dedicated to Lord Shiva, located on the banks of the Rangit River. The temple is believed to be a powerful spiritual site, attracting devotees from across Sikkim and nearby regions. It is especially crowded during the Shivratri festival. The peaceful riverside location makes it a great place for prayers and meditation.",
      image1: "https://glacialtravels.com/Travel/westsikkim/Mahadev%20temple.jpg",
      image2: "	https://glacialtravels.com/Travel/westsikkim/Mahadev%20temple.png"
    },
    {
      id: 12,
      name: "Yangthang Farms",
      description: "Yangthang Farms is a quiet countryside retreat where visitors can experience organic farming and traditional Sikkimese village life. The farm is known for its fresh dairy products, fruits, and vegetables. Tourists can take a relaxing walk, learn about organic farming, and taste homemade Sikkimese food. It’s a great spot for nature lovers and those looking for a peaceful rural experience.",
      image1: "https://glacialtravels.com/Travel/westsikkim/Yangthang.jpg",
      image2: "	https://glacialtravels.com/Travel/westsikkim/Yangthang2.jpg"
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
            <source src="https://media.istockphoto.com/id/2216220084/video/breathtaking-landscapes-of-the-everest-region-with-snow-capped-peaks-glacial-rivers-and.mp4?s=mp4-640x640-is&k=20&c=OqiD7F0Y4KSeKAw4wPulhWx4MO7g2MF9yNM2TjkMdgU=" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>West Sikkim</h1>
          <p className={styles.heroCaption}>Discover the breathtaking beauty of Eastern Himalayas</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <h2 className={styles.overviewTitle}>West Sikkim Overview</h2>
        <p className={styles.overviewText}>
          West Sikkim enchants visitors with its stunning natural landscapes, vibrant culture, and peaceful spiritual atmosphere. Discover the picturesque hill station of Pelling, famed for its spectacular views of the Kanchenjunga range.
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

export default WestSikkim;