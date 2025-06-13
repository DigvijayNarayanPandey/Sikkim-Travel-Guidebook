import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Heart, Share2, MapPin, Calendar, Camera, Mountain, TreePine, Snowflake } from 'lucide-react';
import './Vlog.css';
import { useNavigate } from 'react-router-dom';

const Vlog = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [likes, setLikes] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const videoRefs = useRef({});
  const navigate = useNavigate();

  const vlogData = [
    {
      id: 2,
      title: "Gangtok - The Capital's Charm",
      location: "East Sikkim",
      duration: "5 sec",
      description: "Discover the vibrant streets of Gangtok, where traditional monasteries meet modern cafes. The perfect blend of culture and urban life in the mountains.",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop",
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
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1464822759844-d150baec0f70?w=500&h=300&fit=crop",
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
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
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
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
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
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.unsplash.com/photo-1544967882-1026d6aec3fa?w=500&h=300&fit=crop",
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
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      tags: ["Culture", "Spirituality", "Tea Garden"],
      likes: 123,
      date: "Dec 18, 2024",
      rating: 4.4
    }
  ];

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('travelWishlist') || '[]');
    setWishlist(savedWishlist);

    // Initialize likes based on wishlist
    const initialLikes = {};
    savedWishlist.forEach(item => {
      initialLikes[item.id] = true;
    });
    setLikes(initialLikes);
  }, []);

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

    const isCurrentlyLiked = likes[id];

    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));

    // Update wishlist
    let updatedWishlist;
    if (isCurrentlyLiked) {
      // Remove from wishlist
      updatedWishlist = wishlist.filter(item => item.id !== id);
    } else {
      // Add to wishlist
      const wishlistItem = {
        id: vlog.id,
        title: vlog.title,
        location: vlog.location,
        description: vlog.description,
        thumbnail: vlog.thumbnail,
        tags: vlog.tags,
        price: vlog.price,
        rating: vlog.rating,
        addedDate: new Date().toISOString()
      };
      updatedWishlist = [...wishlist, wishlistItem];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem('travelWishlist', JSON.stringify(updatedWishlist));
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
    navigate('/plan-trip', { state: { wishlist } });
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
          <h1 className="hero-title">Sikkim Travel Vlogs</h1>
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
          <h2 className="section-title">Latest Vlog Episodes</h2>
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

              {/* Duration Badge */}
              <div className="duration-badge">
                {vlog.duration}
              </div>

              {/* Location Badge */}
              <div className="location-badge">
                <MapPin className="location-icon" />
                {vlog.location}
              </div>

              {/* Price Badge */}
              <div className="price-badge">
                {vlog.price}
              </div>

              {/* Content */}
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">
                    {vlog.title}
                  </h3>
                  <div className="rating">
                    ⭐ {vlog.rating}
                  </div>
                </div>

                <p className="card-description">
                  {vlog.description}
                </p>

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
                      title={likes[vlog.id] ? 'Remove from wishlist' : 'Add to wishlist'}
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

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Ready to Explore Sikkim?</h3>
            <p className="cta-description">
              Let these vlogs inspire your next adventure to the mystical Himalayas
              {wishlist.length > 0 && ` • ${wishlist.length} destination${wishlist.length > 1 ? 's' : ''} in your wishlist`}
            </p>
            <button className="cta-button" onClick={handlePlanTrip}>
              Plan Your Trip
              {wishlist.length > 0 && <span className="wishlist-count">{wishlist.length}</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vlog;