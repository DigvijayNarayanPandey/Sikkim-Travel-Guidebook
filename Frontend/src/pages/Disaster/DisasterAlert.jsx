// DisasterAlert.jsx
import React, { useEffect, useState } from "react";
import "./DisasterAlert.css";
import { ShieldAlert, ArrowRight } from "lucide-react";

const touristPlaces = [
  {
    name: "Gangtok",
    tag: "Capital City",
    altitude: "1650m",
    risk: "Low",
    lat: 27.3389,
    lng: 88.6065,
    region: "East Sikkim",
  },
  {
    name: "Tsomgo Lake",
    tag: "Sacred Lake",
    altitude: "3753m",
    risk: "Medium",
    lat: 27.3759,
    lng: 88.7534,
    region: "East Sikkim",
  },
  {
    name: "Nathula Pass",
    tag: "Border Pass",
    altitude: "4310m",
    risk: "High",
    lat: 27.4006,
    lng: 88.713,
    region: "East Sikkim",
  },
  {
    name: "Pelling",
    tag: "Scenic Town",
    altitude: "2150m",
    risk: "Low",
    lat: 27.3077,
    lng: 88.2333,
    region: "West Sikkim",
  },
  {
    name: "Ravangla",
    tag: "Hill Station",
    altitude: "2100m",
    risk: "Medium",
    lat: 27.2485,
    lng: 88.3926,
    region: "South Sikkim",
  },
  {
    name: "Namchi",
    tag: "Pilgrimage Town",
    altitude: "1315m",
    risk: "Low",
    lat: 27.1735,
    lng: 88.3639,
    region: "South Sikkim",
  },
  {
    name: "Yuksom",
    tag: "Historic Village",
    altitude: "1780m",
    risk: "Low",
    lat: 27.3778,
    lng: 88.2233,
    region: "West Sikkim",
  },
  {
    name: "Lachen",
    tag: "Mountain Village",
    altitude: "2750m",
    risk: "High",
    lat: 27.7167,
    lng: 88.556,
    region: "North Sikkim",
  },
  {
    name: "Lachung",
    tag: "Valley Hamlet",
    altitude: "2700m",
    risk: "Medium",
    lat: 27.6833,
    lng: 88.7418,
    region: "North Sikkim",
  },
  {
    name: "Zuluk",
    tag: "Serpentine Hamlet",
    altitude: "2800m",
    risk: "Medium",
    lat: 27.216,
    lng: 88.7333,
    region: "East Sikkim",
  },
];

const DisasterAlert = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await Promise.all(
        touristPlaces.map(async (place) => {
          try {
            const resp = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=${
                import.meta.env.VITE_WEATHER_API_KEY
              }&q=${place.lat},${place.lng}`
            );
            const data = await resp.json();
            return { ...place, weather: data };
          } catch (err) {
            return { ...place, weather: null };
          }
        })
      );
      const formatted = {};
      res.forEach((entry) => {
        formatted[entry.name] = entry;
      });
      setWeatherData(formatted);
    };
    fetchData();
  }, []);

  const groupedByRegion = touristPlaces.reduce((acc, place) => {
    if (!acc[place.region]) acc[place.region] = [];
    acc[place.region].push(place.name);
    return acc;
  }, {});

  return (
    <div className="disaster-container">
      <h2>🌤️ Sikkim Tourism - Weather & Safety</h2>

      <div className="imd-safety-contacts">
        <div className="imd-card card">
          <h3>IMD Weather Update</h3>
          <div className="imd-summary">
            <p>
              <strong>Gangtok, Sikkim</strong> <span>18°C</span> Heavy Rain
            </p>
            <p>💨 25 kph | 💧 15 mm</p>
            <p>
              <strong>3-Day Forecast</strong>
            </p>
            <ul>
              <li>Tomorrow: 19°C 🌧️</li>
              <li>Day After: 20°C ⛅</li>
            </ul>
          </div>
          <a
            href="https://mausam.imd.gov.in/gangtok/"
            className="imd-button"
            target="_blank"
          >
            View Official IMD Sikkim Website <ArrowRight size={16} />
          </a>
        </div>

        <div className="guidelines card">
          <h3>Safety Guidelines</h3>
          <div className="guideline-block">
            <h4>Heavy Rain</h4>
            <ul>
              <li>• Avoid trekking and riverside activities.</li>
              <li>• Check road status before traveling.</li>
              <li>• Be aware of potential landslides.</li>
            </ul>
          </div>

          <div className="guideline-block">
            <h4>Landslide</h4>
            <ul>
              <li>• Move to higher ground if you are in a risk area.</li>
              <li>• Listen for unusual sounds like rumbling or cracking.</li>
              <li>• If you see a landslide, move away quickly.</li>
            </ul>
          </div>
        </div>

        <div className="contacts card">
          <h3>Emergency Contacts</h3>
          <div className="contact-box">
            <p>
              State Emergency Operation Centre <a href="tel:1077">📞 1077</a>
            </p>
          </div>
          <div className="contact-box">
            <p>
              District Control Room (Gangtok){" "}
              <a href="tel:03592-202042">📞 03592-202042</a>
            </p>
          </div>
          <div className="contact-box">
            <p>
              Police <a href="tel:100">📞 100</a>
            </p>
          </div>
          <div className="contact-box">
            <p>
              Tourist Police <a href="tel:12345-67890">📞 12345-67890</a>
            </p>
          </div>
        </div>
      </div>

      {Object.keys(groupedByRegion).map((region) => (
        <div key={region} className="region-block">
          <h3 className="region-title">📍 {region}</h3>
          <div className="card-grid">
            {groupedByRegion[region].map((placeName) => {
              const place = weatherData[placeName];
              if (!place) return null;
              return (
                <div
                  key={place.name}
                  className={`weather-card risk-${place.risk.toLowerCase()}`}
                >
                  <div className="card-header">
                    <div>
                      <h3>{place.name}</h3>
                      <p className="tag">{place.tag}</p>
                      <p className="altitude">{place.altitude} altitude</p>
                    </div>
                    <span className={`risk-badge ${place.risk.toLowerCase()}`}>
                      {place.risk} Risk
                    </span>
                  </div>
                  {place.weather ? (
                    <>
                      <div className="temp-block">
                        <img
                          src={place.weather.current.condition.icon}
                          alt=""
                        />
                        <h1>{place.weather.current.temp_c}&deg;C</h1>
                      </div>
                      <p className="desc">
                        {place.weather.current.condition.text}
                      </p>
                      <div className="stats">
                        <span>💧 {place.weather.current.humidity}%</span>
                        <span>💨 {place.weather.current.wind_kph} km/h</span>
                        <span>👁 {place.weather.current.vis_km}km</span>
                      </div>
                    </>
                  ) : (
                    <p>Loading...</p>
                  )}
                  <div className="safety-tips">
                    <ShieldAlert size={16} /> <strong>Safety Tips</strong>
                    {place.risk === "High" && (
                      <p className="tip red">
                        🚫 Avoid travel to this location
                      </p>
                    )}
                    <p className="tip blue">🗻 Acclimatization recommended</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <p className="disclaimer">
            ⚠️ The data displayed is for general guidance only and may not
            always reflect real-time updates. Please refer to the official IMD
            Sikkim website for accurate information.
          </p>
    </div>
  );
};

export default DisasterAlert;
