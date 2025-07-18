 import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Heart, Share2, MapPin, Calendar, Camera, Mountain, TreePine, Snowflake } from 'lucide-react';
import './Vlog.css';
import { useNavigate } from 'react-router-dom';

const Vlog = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [likes, setLikes] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const videoRefs = useRef({});
  const navigate = useNavigate();

  const vlogData = [
    {
      id: 2,
      title: "Gangtok - The Capital's Charm",
      location: "East Sikkim",
      duration: "5 sec",
      description: "Discover the vibrant streets of Gangtok, where traditional monasteries meet modern cafes. The perfect blend of culture and urban life in the mountains.",
      videoUrl: "https://www.shutterstock.com/shutterstock/videos/3425071967/preview/stock-footage-aerial-view-of-the-cloudy-day-in-gangtok-city-capital-of-sikkim-state-a-cable-car-riding-towards.webm",
      thumbnail: "https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuZ3Rva3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Capital City", "Culture", "Urban"],
      likes: 189,
      date: "Dec 12, 2024",
      rating: 4.8
    },
    {
      id: 3,
      title: "Nathula Pass - Indo-China Border",
      location: "East Sikkim",
      duration: "5 sec",
      description: "Stand at one of the highest motorable passes in the world at 14,140 feet. Witness the historic trade route between India and China with breathtaking Himalayan views.",
      videoUrl: "https://www.shutterstock.com/shutterstock/videos/3838745423/preview/stock-footage-view-of-nathula-pass-china-boarder-sikkim.webm",
      thumbnail: "https://i.ytimg.com/vi/ZjUubdv_AO8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBaWgChHT5Q0m8jzXbdYx7SM3mMOA",
      tags: ["Border", "High Altitude", "Historic"],
      likes: 312,
      date: "Dec 10, 2024",
      rating: 4.9
    },
    {
      id: 4,
      title: "Yumthang Valley - Valley of Flowers",
      location: "North Sikkim",
      duration: "5 sec",
      description: "Immerse yourself in the spectacular Yumthang Valley, known as the 'Valley of Flowers'. During spring, it transforms into a carpet of rhododendrons and alpine flowers.",
      videoUrl: "https://www.shutterstock.com/shutterstock/videos/3821821551/preview/stock-footage-drone-footage-gliding-over-the-serene-summer-landscape-of-yumthang-valley-s-flower-covered.webm",
      thumbnail: "https://media.istockphoto.com/id/962097250/photo/purple-flowers-or-himalayan-primrose-at-yumthang-valley-sikkim-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=fkps1aVqsNJZxVM1TYg8lkyq4CfJfkhg-KYO9ofM77g=",
      tags: ["Flowers", "Valley", "Spring"],
      likes: 456,
      date: "Dec 8, 2024",
      rating: 4.7
    },
    {
      id: 5,
      title: "Pelling - Kanchenjunga Views",
      location: "West Sikkim",
      duration: "5 sec",
      description: "Wake up to the majestic views of Kanchenjunga, the world's third-highest peak. Pelling offers some of the most spectacular sunrise views over the Himalayas.",
      videoUrl: "https://www.shutterstock.com/shutterstock/videos/3798158303/preview/stock-footage-sky-walk-at-giant-statue-chenrezing-pelling-sikkim-india.webm",
      thumbnail: "https://images.unsplash.com/photo-1724600457405-a7eeabcff6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Kanchenjunga", "Sunrise", "Himalayas"],
      likes: 378,
      date: "Dec 5, 2024",
      rating: 4.6
    },
    {
      id: 6,
      title: "Rumtek Monastery",
      location: "East Sikkim",
      duration: "5 sec",
      description: "Experience peace and spirituality at Rumtek Monastery, one of the most significant monasteries in Sikkim. Marvel at the intricate architecture and peaceful ambiance.",
      videoUrl: "https://www.shutterstock.com/shutterstock/videos/3422962181/preview/stock-footage-gangtok-sikkim-india-april-ranka-monastery-or-lingdum-or-pal-zurmang-kagyud-monastery-in.webm",
      thumbnail: "https://media.istockphoto.com/id/2158470905/photo/a-majestic-buddhist-monastery-with-a-golden-roof-and-grand-staircase-sikkim-india.jpg?s=612x612&w=0&k=20&c=KILIYcDogr5bkpjzjiFQW8OsDRqEl5G_Jx5TsCrs62A=",
      tags: ["Monastery", "Buddhism", "Architecture"],
      likes: 267,
      date: "Dec 3, 2024",
      rating: 4.5
    },
    {
      id: 7,
      title: "Namchi - Heart of South Sikkim",
      location: "South Sikkim",
      duration: "5 sec",
      description: "Explore Namchi, the cultural and spiritual hub of South Sikkim, famous for its giant statues, monasteries, and tea gardens.",
      videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL39prVkpd0EbZsxu39bmDBlq2Nn1xbLfcT3yKAwU85Wm&s",
      thumbnail: "https://media.istockphoto.com/id/1136859823/photo/the-huge-statue-of-shiva-in-namchi-chardham-in-the-state-of-sikkim-india.jpg?s=612x612&w=0&k=20&c=0CVDrfRwnf-N5jHRtQDXKt3_6I0XbTaPhCShUmJE5Z0=",
      tags: ["Culture", "Spirituality", "Tea Garden"],
      likes: 123,
      date: "Dec 18, 2024",
      rating: 4.4
    }
  ];

  const toggleVideo = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      if (activeVideo === id) {
        video.pause();
        setActiveVideo(null);
      } else {
        // Pause all other videos
        Object.values(videoRefs.current).forEach(v => {
          if (v && v !== video) {
            v.pause();
            v.currentTime = 0;
          }
        });

        // Play the selected video
        video.play().catch(error => {
          console.log('Video play failed:', error);
        });
        setActiveVideo(id);
      }
    }
  };

  const toggleLike = (id) => {
    const vlog = vlogData.find(v => v.id === id);
    if (!vlog) return;

    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShare = (vlog) => {
    if (navigator.share) {
      navigator.share({
        title: vlog.title,
        text: vlog.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handlePlanTrip = () => {
    navigate('/articles');
  };

  // Article content mapping (for demo)
  const articleContent = {
    "Gangtok - The Capital's Charm": `Gangtok, the capital of Sikkim, is a vibrant city nestled in the Eastern Himalayas. Known for its clean streets, friendly locals, and a unique blend of tradition and modernity, Gangtok offers visitors a chance to explore monasteries, bustling markets, and scenic viewpoints. Don't miss the MG Marg, Rumtek Monastery, and the cable car ride for panoramic views of the city.`,
    "Nathula Pass - Indo-China Border": `Nathula Pass, located at 14,140 feet, is a historic mountain pass on the Indo-China border. Once part of the ancient Silk Route, it now offers travelers a glimpse into the high-altitude landscapes and the border gates between India and China. The journey to Nathula is filled with breathtaking views and a sense of adventure.`,
    "Yumthang Valley - Valley of Flowers": `Yumthang Valley, often called the 'Valley of Flowers', is a paradise for nature lovers. In spring, the valley is carpeted with rhododendrons and alpine flowers. The Shingba Rhododendron Sanctuary and the hot springs are must-visit spots in this serene valley.`,
    "Pelling - Kanchenjunga Views": `Pelling is famous for its stunning views of Mount Kanchenjunga, the world's third-highest peak. The town is a base for exploring monasteries, waterfalls, and the Sky Walk. Early mornings offer the best chance to witness the golden sunrise over the Himalayas.`,
    "Rumtek Monastery": `Rumtek Monastery is one of the most important centers of Tibetan Buddhism in Sikkim. The monastery's architecture, murals, and peaceful ambiance attract visitors seeking spirituality and tranquility. Attend the prayer sessions for a truly immersive experience.`,
    "Namchi - Heart of South Sikkim": `Namchi, meaning 'Sky High', is the cultural and spiritual heart of South Sikkim. The town is known for its giant statues, including the 135-feet tall Guru Padmasambhava, and the Char Dham complex. The surrounding tea gardens and monasteries add to its charm.`
  };

  // Add article points for each topic
  const articlePoints = {
    "Gangtok - The Capital's Charm": [
      "Stroll along MG Marg, the heart of Gangtok's social life.",
      "Visit Enchey Monastery for a spiritual experience.",
      "Enjoy panoramic views from the Gangtok Ropeway.",
      "Sample local Sikkimese cuisine at authentic cafes.",
      "Shop for handicrafts and souvenirs at Lal Bazaar."
    ],
    "Nathula Pass - Indo-China Border": [
      "Carry valid permits and warm clothing due to high altitude.",
      "Spot the Indo-China border gates and army posts.",
      "Visit Baba Harbhajan Singh Temple en route.",
      "Experience snow and dramatic Himalayan landscapes.",
      "Photography is restricted in certain areas—follow guidelines."
    ],
    "Yumthang Valley - Valley of Flowers": [
      "Best visited during spring for blooming rhododendrons.",
      "Relax in the natural Yumthang hot springs.",
      "Explore the Shingba Rhododendron Sanctuary.",
      "Ideal for nature walks and landscape photography.",
      "Spot grazing yaks and serene riverside meadows."
    ],
    "Pelling - Kanchenjunga Views": [
      "Wake up early for sunrise views of Kanchenjunga.",
      "Walk the glass Sky Walk for a thrilling experience.",
      "Visit Pemayangtse Monastery, one of Sikkim's oldest.",
      "Explore Rabdentse Ruins for a glimpse of Sikkim's history.",
      "Enjoy local hospitality at boutique mountain resorts."
    ],
    "Rumtek Monastery": [
      "Attend the morning prayer session for a peaceful start.",
      "Admire the monastery's intricate murals and architecture.",
      "Learn about Tibetan Buddhism at the monastery museum.",
      "Walk the tranquil paths around the monastery complex.",
      "Respect the customs and maintain silence inside prayer halls."
    ],
    "Namchi - Heart of South Sikkim": [
      "Visit the towering Guru Padmasambhava statue at Samdruptse.",
      "Explore the Char Dham complex with replicas of India's holy shrines.",
      "Stroll through lush tea gardens and sample local teas.",
      "Discover the peaceful Ngadak and Tendong Hill monasteries.",
      "Enjoy panoramic views of the Himalayas and valleys."
    ]
  };

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="vlog-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-icon">
            <Camera className="camera-icon animated-camera" />
          </div>
          <h1 className="hero-title">Sikkim Travel Blogs</h1>
          <p className="hero-description">
            Journey through the mystical lands of Sikkim with our immersive video blogs.
            Experience the breathtaking beauty, rich culture, and serene spirituality of the Himalayas.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <Mountain className="feature-icon animated-feature" />
              <span>High Altitude Adventures</span>
            </div>
            <div className="feature-item">
              <TreePine className="feature-icon animated-feature" />
              <span>Natural Wonders</span>
            </div>
            <div className="feature-item">
              <Snowflake className="feature-icon animated-feature" />
              <span>Alpine Experiences</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vlog Grid */}
      <div className="vlog-content">
        <div className="section-header">
          <h2 className="section-title"> Latest Blog Episodes</h2>
          <p className="section-description">
            Explore Sikkim through our curated collection of short video stories,
            each capturing the essence of this magical Himalayan state.
          </p>
        </div>

        <div className="vlog-grid">
          {vlogData.map((vlog) => (
            <div
              key={vlog.id}
              className="vlog-card"
              onMouseEnter={() => setHoveredCard(vlog.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Video Container */}
              <div className="video-container">
                <img
                  src={vlog.thumbnail}
                  alt={vlog.title}
                  className="thumbnail-image"
                  style={{ display: activeVideo === vlog.id ? 'none' : 'block' }}
                />

                {/* Video Element */}
                <video
                  ref={el => videoRefs.current[vlog.id] = el}
                  src={vlog.videoUrl}
                  className="video-element"
                  style={{ display: activeVideo === vlog.id ? 'block' : 'none' }}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />

                <button
                  onClick={() => toggleVideo(vlog.id)}
                  className={`play-button ${hoveredCard === vlog.id ? 'hovered' : ''}`}
                >
                  {activeVideo === vlog.id ? (
                    <Pause className="play-icon" />
                  ) : (
                    <Play className="play-icon play-icon-offset" />
                  )}
                </button>

                {/* Hover overlay for video preview */}
                {hoveredCard === vlog.id && activeVideo !== vlog.id && (
                  <div className="hover-overlay">
                    <div className="hover-text">Click to play</div>
                  </div>
                )}
              </div>

              {/* Location Badge */}
              <div className="location-badge">
                <MapPin className="location-icon" />
                {vlog.location}
              </div>

              {/* Content */}
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">
                    {vlog.title}
                  </h3>
                  <div className="card-header-actions">
                    <div className="rating">
                      ⭐ {vlog.rating}
                    </div>
                    <button
                      className="readmore-btn"
                      onClick={() => toggleExpand(vlog.id)}
                    >
                      {expandedCards[vlog.id] ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </div>

                <p className="card-description">
                  {vlog.description}
                </p>
                {/* Expanded Article Content */}
                {expandedCards[vlog.id] && (
                  <div className="article-description" style={{ marginTop: '1rem', background: '#f9fafb', padding: '1rem', borderRadius: '8px', color: '#000000' }}>
                    {articleContent[vlog.title] || 'No detailed article available.'}
                    {articlePoints[vlog.title] && (
                      <ul style={{ marginTop: '1.2rem', paddingLeft: '1.2rem', color: '#000000', fontSize: '1.05em', lineHeight: '1.7', listStyle: 'disc inside' }}>
                        {articlePoints[vlog.title].map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="tags-container">
                  {vlog.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="card-actions">
                  <div className="date-info">
                    <Calendar className="date-icon" />
                    {vlog.date}
                  </div>

                  <div className="action-buttons">
                    <button
                      onClick={() => toggleLike(vlog.id)}
                      className={`like-button ${likes[vlog.id] ? 'liked' : ''}`}
                      title={likes[vlog.id]}
                    >
                      <Heart className={`heart-icon ${likes[vlog.id] ? 'filled' : ''}`} />
                      <span className="like-count">
                        {vlog.likes + (likes[vlog.id] ? 1 : 0)}
                      </span>
                    </button>

                    <button
                      onClick={() => handleShare(vlog)}
                      className="share-button"
                      title="Share this destination"
                    >
                      <Share2 className="share-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button navigate to Article page */}
      <div className="cta-section">
        <button
          className="cta-button"
          onClick={() => navigate('/article')}
        >
          Read All Articles
        </button>
      </div>
    </div>
  );
};

export default Vlog;