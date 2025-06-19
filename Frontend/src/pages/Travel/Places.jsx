import React, { useEffect,useState } from 'react';
import "./Places.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import TravelBg from '../../assets/TravelBg.jpg';
// North Images
import North1 from '../../assets/North1.jpg';
import North2 from '../../assets/North2.jpg';
import North3 from '../../assets/North3.jpg';
import North4 from '../../assets/North4.jpg';

// East Images
import East1 from '../../assets/East1.jpg';
import East2 from '../../assets/East2.jpg';
import East3 from '../../assets/East3.jpg';
import East4 from '../../assets/East4.jpg';

// West Images
import West1 from '../../assets/West1.jpg';
import West2 from '../../assets/West2.jpg';
import West3 from '../../assets/West3.png';
import West4 from '../../assets/West4.avif';

// South Images
import South1 from '../../assets/South1.jpg';
import South2 from '../../assets/South2.jpg';
import South3 from '../../assets/South3.jpeg';
import South4 from '../../assets/South4.jpg';

const Places = () => {
  useEffect(() => {
    const imageUrls = [North1, North2, North3, North4,  East1, East2, East3, East4, West1, West2, West3, South1, South2, South3, South4];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  //SCROLL
  useEffect(() => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        target.classList.add("animate-in");
        target.classList.remove("animate-out");
      } else {
        target.classList.remove("animate-in");
        target.classList.add("animate-out");
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach((section) => observer.observe(section));

  return () => sections.forEach((section) => observer.unobserve(section));
}, []);

  const [northIndex, setNorthIndex] = useState(0);
  const [eastIndex, setEastIndex] = useState(0);
  const [westIndex, setWestIndex] = useState(0);
  const [southIndex, setSouthIndex] = useState(0);

  const northCaptions = [
    'Gurudongmar Lake: One of the highest lakes in the world and India, located at an altitude of 17,800ft.',
    'Yumthang Valley: The "Valley of Flowers", Yumthang is a stunning valley with hot springs and rhododendron forests.',
    'Phodong Monastery: In Sikkim is a significant Buddhist monastery known for its beautiful architecture, intricate paintings.',
    'Lachung: A picturesque village in North Sikkim, is a serene escape nestled in the Himalayas'
  ];

  const eastCaptions = [
    'Gangtok: The capital city, a major tourist hub with MG Marg and various monasteries. ',
    'Tsomgo Lake: A high-altitude lake, famous for its stunning views and yak rides.',
    'Nathula Pass: A high-altitude pass with panoramic views of snow-capped mountains and a historic trade route.',
    'Zuluk: A small village on the old Silk Route, offering scenic views and adventure tourism.'
  ];

  const westCaptions = [
    'Pelling: Known for its views of Mount Kanchenjunga and Pemayangtse Monastery. ',
    'Pemayangtse Monastery: Historic Buddhist site',
    'Skywalk: Transparent glass walkway that offers stunning views of the Himalayas and the surrounding landscape',
    'Dubdi Monastery: Also known as Yuksom Monastery, is the oldest monastery in Sikkim, established in 1701.'
  ];

  const southCaptions = [
    'Ravangla: A small, scenic town known for its stunning views and the annual Pang Lhabsol festival with Buddha Park',
    'Namchi: The district capital, Namchi, is a significant religious center with numerous temples and monasteries.',
    'Teami tea Garden: It is the only tea garden in Sikkim and is considered one of the best in India and the world',
    'Char Dham: Featuring replicas of the four sacred Hindu shrines: Badrinath, Jagannath, Dwarka, and Rameshwar.'
  ];

  return (
    <div className='Travel'>
      <div className="travel-page-top">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="travel-heading">"Discover the Four Faces of Sikkim"</h1>
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="regions-container">
            <div className="region-card north-card">
                <div className="card-icon">🏔️</div>
                <h2>North Sikkim</h2>
                <p>Known for Gurudongmar Lake, Yumthang Valley, and rugged beauty. Perfect for adventurous travel.</p>
                <div className="card-shine"></div>
            </div>
            <div className="region-card east-card">
                <div className="card-icon">🏛️</div>
                <h2>East Sikkim</h2>
                <p>Home to Gangtok, monasteries, and cable car rides with stunning Himalayan views.</p>
                <div className="card-shine"></div>
            </div>
            <div className="region-card west-card">
                <div className="card-icon">🌊</div>
                <h2>West Sikkim</h2>
                <p>Famous for Pelling, waterfalls, ancient monasteries and views of Kanchenjunga.</p>
                <div className="card-shine"></div>
            </div>
            <div className="region-card south-card">
                <div className="card-icon">🧘</div>
                <h2>South Sikkim</h2>
                <p>Serene landscapes, Buddha Park, and Ravangla - ideal for peaceful retreats.</p>
                <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </div>

       {/* Sliders */}
      <div className="section north-section">
        <div className="section-header">
          <h2 className="section-title">"North Sikkim"</h2>
          <div className="underline"></div>
          <div className="title-decoration">❄️</div>
        </div>
        <p className='section-p'>North Sikkim offers a variety of areas to explore, each with unique natural beauty and attractions. Key areas include Mangan, the district capital, and the villages of Lachen and Lachung, which serve as gateways to Yumthang Valley and Zero Point. Other notable areas include Chungthang, Dzongu (a Lepcha region), and Phodong. </p>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            onChange={(index) => setNorthIndex(index)}
            transitionTime={800}
          >
            <div className="slide-item">
              <img src={North1} alt="Gurudongmar Lake" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={North2} alt="Yumthang Valley" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={North3} alt="Phodong Monastery" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={North4} alt="Lachen&Lachung" />
              <div className="image-overlay"></div>
            </div>
          </Carousel>
          </div>
        </div>
        
        <div className="caption-container">
          <p className="caption-text">{northCaptions[northIndex]}</p>
        </div>
      </div>

      <div className="section east-section">
        <div className="section-header">
          <h2 className="section-title">"East Sikkim"</h2>
          <div className="underline"></div>
          <div className="title-decoration">🏮</div>
        </div>
        <p className='section-p'>East Sikkim encompasses the southern and eastern regions of Sikkim, including the state capital, Gangtok. This area is known for its administrative hub, popular tourist attractions, and proximity to the border with China. Key parts of East Sikkim include Gangtok, Tsomgo Lake, Aritar, Zuluk, and Nathula Pass. </p>
        <div className="carousel-wrapper">
          <div className="carousel-container">
              <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            onChange={(index) => setEastIndex(index)}
            transitionTime={800}
          >
            <div className="slide-item">
              <img src={TravelBg} alt="Gangtok" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={East2} alt="Rumtek Monastery" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={East3} alt="Nathula Pass" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={East4} alt="Zuluk" />
              <div className="image-overlay"></div>
            </div>
          </Carousel>
          </div>
        </div>
        
        <div className="caption-container">
          <p className="caption-text">{eastCaptions[eastIndex]}</p>
        </div>
      </div>

      <div className="section west-section">
        <div className="section-header">
          <h2 className="section-title">"West Sikkim"</h2>
          <div className="underline"></div>
          <div className="title-decoration">🌸</div>
        </div>
        <p className='section-p'>West Sikkim district in Sikkim is now divided into two districts: Gyalshing and Soreng. Important towns and areas within West Sikkim include Yuksom, Gyalshing, Dentam, Kaluk, Soreng, Daramdin, Pelling, Jorethang, and Singtam. The district is known for its monasteries, trekking trails, and scenic beauty. </p>
         <div className="carousel-wrapper">
          <div className="carousel-container">
              <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            onChange={(index) => setWestIndex(index)}
            transitionTime={800}
          >
            <div className="slide-item">
              <img src={West1} alt="Pelling" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={West2} alt="Pemayangtse Monastery" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={West3} alt="Skywalk" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={West4} alt="Dubdi Monastery" />
              <div className="image-overlay"></div>
            </div>
          </Carousel>
           </div>
         </div>
        
        <div className="caption-container">
          <p className="caption-text">{westCaptions[westIndex]}</p>
        </div>
      </div>

      <div className="section south-section">
        <div className="section-header">
          <h2 className="section-title">"South Sikkim"</h2>
          <div className="underline"></div>
          <div className="title-decoration">🌺</div>
        </div>
        <p className='section-p'>South Sikkim encompasses several towns and attractions, offering a variety of experiences. Key areas include the district capital of Namchi, the small town of Ravangla, and Jorethang, a flourishing business center. Other notable locations include Temi Tea Garden, Buddha Park, and Tendong Hill. </p>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            onChange={(index) => setSouthIndex(index)}
            transitionTime={800}
          >
            <div className="slide-item">
              <img src={South1} alt="Ravangla" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={South2} alt="Namchi" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={South3} alt="Temi Tea Garden" />
              <div className="image-overlay"></div>
            </div>
            <div className="slide-item">
              <img src={South4} alt="Char Dham" />
              <div className="image-overlay"></div>
            </div>
          </Carousel>
          </div>
        </div>
        
        <div className="caption-container">
          <p className="caption-text">{southCaptions[southIndex]}</p>
        </div>
      </div>
     
    </div>
  );
};

export default Places;