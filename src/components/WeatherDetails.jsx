import '../styles/WeatherDetails.css';

function WeatherDetails({ weatherData }) {
  if (!weatherData) return null;

  // Determine display condition
  const cloudCover = weatherData.clouds?.all;
  const rawCondition = weatherData.weather?.[0]?.main;
  const displayCondition =
    rawCondition === 'Clouds' && cloudCover < 50 ? 'Clear' : rawCondition;

  return (
    <div className="weather-details">
      <h3>Weather Details</h3>

      <div className="detail-item">
        <span>Condition</span>
        <span>{displayCondition}</span>
      </div>

      <div className="detail-item">
        <span>Cloud Cover</span>
        <span>{cloudCover}%</span>
      </div>

      <div className="detail-item">
        <span>Humidity</span>
        <span>{weatherData.main.humidity}%</span>
      </div>

      <div className="detail-item">
        <span>Wind</span>
        <span>{(weatherData.wind.speed * 3.6).toFixed(2)} km/h</span>
      </div>

      <div className="detail-item">
        <span>Feels Like</span>
        <span>{Math.round(weatherData.main.feels_like)}°</span>
      </div>

      <div className="detail-item">
        <span>Pressure</span>
        <span>{weatherData.main.pressure} hPa</span>
      </div>

      <div className="detail-item">
        <span>Visibility</span>
        <span>{(weatherData.visibility / 1000).toFixed(1)} km</span>
      </div>
    </div>
  );
}

export default WeatherDetails;
