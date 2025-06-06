import React, { useEffect } from 'react';
import './Home.css';

// Feature images
import SikkimImage from '../../assets/SikkimImage.jpg';
import HomestayImage from '../../assets/Homestays.jpg';
import BikeImage from '../../assets/BikeRents.jpg';
import PlacesImage from '../../assets/Places.jpg';

// Carousel images (5 slides)
import Slide1 from '../../assets/Slide1.jpg';
import Slide2 from '../../assets/Slide2.jpg';
import Slide3 from '../../assets/Slide3.jpg';
import Slide4 from '../../assets/Slide4.jpg';
import Slide5 from '../../assets/Slide5.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  // Preload images
  useEffect(() => {
    const imageUrls = [Slide1, Slide2, Slide3, Slide4, Slide5];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <div className='Home'>
      {/* Hero Section */}
      <div className='top'>
        <img src={Slide2} alt='Sikkim' />
        <div className="hero-text">
          <h1>Discover the Beauty of Sikkim</h1>
          <p>Your Ultimate Guide to the Hidden Gem of the Himalayas</p>
          <button>Explore Now</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <img src={HomestayImage} alt="Homestays" />
          <h3>Comfortable Homestays</h3>
          <p>Book cozy stays with locals and experience true Sikkimese hospitality.</p>
        </div>

        <div className="feature-card">
          <img src={BikeImage} alt="Bike Rentals" />
          <h3>Bike Rentals</h3>
          <p>Rent bikes easily and explore the mountains at your own pace.</p>
        </div>

        <div className="feature-card">
          <img src={PlacesImage} alt="Places to Visit" />
          <h3>Must Visit Places</h3>
          <p>Get curated guides to top tourist spots in Sikkim.</p>
        </div>
      </div>

      {/* Carousel Section with 5 images */}
      <div className="carousel-section">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={1000}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          centerMode={true}
          centerSlidePercentage={100}
          useKeyboardArrows={true}
          stopOnHover={true}
          animationHandler="slide"
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
        > 
          <div className="carousel-slide">
            <img src={Slide1} alt="Slide 1" loading="eager" width="100%" height="400" />
          </div>
          <div className="carousel-slide">
            <img src={Slide2} alt="Slide 2" loading="eager" width="100%" height="400" />
          </div>
          <div className="carousel-slide">
            <img src={Slide3} alt="Slide 3" width="100%" height="400" />
          </div>
          <div className="carousel-slide">
            <img src={Slide4} alt="Slide 4" width="100%" height="400" />
          </div>
          <div className="carousel-slide">
            <img src={Slide5} alt="Slide 5" width="100%" height="400" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
