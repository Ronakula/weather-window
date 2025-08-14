
import  '../styles/WeatherDetails.css'
function WeatherDetails({weatherData}) {
    if(!weatherData) return null 
  return (
    <div className="weather-details">
        <h3>Weather Details</h3>
        <div className="detail-item">
           <span>Cloud Cover</span>

            <span>{weatherData.clouds.all}%</span>
        </div>
        <div className="detail-item">
           <span>Humidity</span>

            <span>{weatherData.main.humidity}%</span>
        </div>
        <div className="detail-item">
           <span>Wind</span>

            <span>{weatherData.wind.speed * 3.6}km/h</span>
        </div>
        <div className="detail-item">
           <span>Cloud Cover</span>
            <span>{weatherData.clouds.all}%</span>
        </div>
        <div className="detail-item">
           <span>Feels like</span>
            <span>{Math.round(weatherData.main.feel_like)}°</span>
        </div>
        <div className="detail-item">
           <span>Pressure</span>
            <span>{weatherData.main.pressure}hPa</span>
        </div>
        <div className="detail-item">
           <span>Visibility</span>
            <span>{(weatherData.visibility/1000)}km</span>
        </div>
        
        
    </div>
  )
}

export default WeatherDetails