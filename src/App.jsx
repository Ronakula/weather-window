import { useEffect, useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import { getWeatherBackground, popularCities } from './Utils/weatherUtilis.js';
import SearchBar from './components/SearchBar.jsx';
import PopularCity from './components/PopularCity.jsx';
import WeatherDetails from './components/WeatherDetails.jsx';
import './styles/base.css';

const API_KEY = 'e67c2d58386db5f8a701968885ef5d75'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState('Nairobi');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      if (!city || !city.trim()) {
        throw new Error('Please enter a valid city name');
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
      console.log(`Fetching weather for: ${url}`);

      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} - ${errorText || 'Access forbidden'}`);
      }

      const data = await response.json();
      console.log('Weather API response:', data); // ✅ Added for debugging

      if (!data?.main || !data?.weather) {
        throw new Error('Invalid weather data received');
      }

      setWeatherData(data);
      setError('');
    } catch (err) {
      console.error('Fetch error details:', err.message, err.stack, err); // ✅ Enhanced error logging
      setError(err.message || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(searchCity);
  }, [searchCity]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      fetchWeatherData(searchCity);
    } else {
      setError('Please enter a city name');
    }
  };

  const handleCitySelect = (city) => {
    setSearchCity(city);
    fetchWeatherData(city);
  };

  const currentBackground = weatherData?.weather?.[0]?.main
    ? getWeatherBackground(weatherData.weather[0].main)
    : getWeatherBackground('default');

  return (
    <div
      className="weather-app"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <div className="layout-container">
        <div className="main-weather">
          <div className="app-title">window.weather</div>

          {error && <div className="error">{error}</div>}
          {loading && <LoadingSpinner />}
          {!loading && weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>

        <div className="sidebar">
          <SearchBar
            searchCity={searchCity}
            setSearchCity={setSearchCity}
            handleSearch={handleSearch}
          />
          <PopularCity cities={popularCities} onCitySelect={handleCitySelect} />
          {weatherData && <WeatherDetails weatherData={weatherData} />}
        </div>
      </div>
    </div>
  );
}

export default App;

