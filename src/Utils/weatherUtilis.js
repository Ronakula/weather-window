// Background image imports
import rainBg from '../assets/rain-drops-2.png';
import clearBg from '../assets/clear-sunny-2.png';
import cloudBg from '../assets/cloudy-1.png';
import snowBg from '../assets/snowy-2.png';
import thunderstormBg from '../assets/thunderstorm-2.png';
import mistBg from '../assets/mist-2.png';

// Weather condition to background mapping
export const WeatherBackground = {
    rain: rainBg,
    clear: clearBg,
    clouds: cloudBg,
    snow: snowBg,
    thunderstorm: thunderstormBg,
    mist: mistBg,
    drizzle: rainBg,
    default: cloudBg,
};

// Enhanced function with cloud cover logic
export const getWeatherBackground = (weatherMain, cloudCover = null) => {
    const condition = weatherMain.toLowerCase();

    // ✅ If cloud cover is low, treat it as clear
    if (cloudCover !== null && cloudCover < 50) {
        return WeatherBackground.clear;
    }

    // Standard condition matching
    if (condition.includes('rain')) return WeatherBackground.rain;
    if (condition.includes('clear')) return WeatherBackground.clear;
    if (condition.includes('cloud')) return WeatherBackground.clouds;
    if (condition.includes('snow')) return WeatherBackground.snow;
    if (condition.includes('thunderstorm')) return WeatherBackground.thunderstorm;
    if (
        condition.includes('mist') ||
        condition.includes('fog') ||
        condition.includes('haze')
    ) return WeatherBackground.mist;
    if (condition.includes('drizzle')) return WeatherBackground.drizzle;

    // Fallback background
    return WeatherBackground.default;
};

// Popular cities list
export const popularCities = [
    'Nairobi',
    'London',
    'New York',
    'Dubai',
    'Shenzhen'
];
