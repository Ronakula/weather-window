import React from 'react';
import '../styles/WeatherDisplay.css';

function WeatherDisplay({ weatherData }) {
  const formatDateTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });
    const date = now.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: '2-digit'
    });
    return `${time} - ${date}`;
  };

  return (
    <div className="weather-display">
      <div className="temperature">
        {Math.round(weatherData.main.temp)}°
      </div>
      <div className="location-info">
        <h2 className="city-name">{weatherData.name}</h2>
        <div className="date-time">{formatDateTime()}</div>
        <div className="weather-condition">{weatherData.weather[0].main}</div>
      </div>
      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
        />
      </div>
    </div>
  );
}

export default WeatherDisplay;