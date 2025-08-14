import rainBg from '../assets/rain-drops-2.png'
import clearBg from '../assets/clear-sunny-2.png'
import cloudBg from '../assets/cloudy-2.png'
import snowBg from '../assets/snowy-2.png'
import thunderstormBg from '../assets/thunderstorm-2.png'
import mistBg from '../assets/mist-2.png'

export const WeatherBackground = {
    rain:rainBg,
    clear: clearBg,
    clouds: cloudBg,
    snow: snowBg,
    thunderstorm: thunderstormBg,
    mist: mistBg,
    drizzle: rainBg,
    default: cloudBg,
}
export const getWeatherBackground = (weatherMain) => {
    const condition = weatherMain.toLowerCase()
    if (condition.includes('rain'))return WeatherBackground.rain
    if (condition.includes('clear'))return WeatherBackground.clear
    if (condition.includes('clouds'))return WeatherBackground.clouds
    if (condition.includes('snow'))return WeatherBackground.snow
    if (condition.includes('thunderstorm'))return WeatherBackground.thunderstorm
    if (condition.includes('mist')||condition.includes('Fog'))return WeatherBackground.mist
    if (condition.includes('drizzle'))return WeatherBackground.drizzle

    return WeatherBackground.default;

}
export const popularCities = [
    'Nairobi',
    'London',
    'New York',
    'Dubai',
    'Shenzhen'
]