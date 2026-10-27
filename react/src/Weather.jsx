import React, { useState } from 'react';
import './Weather.css';   // Import the CSS file

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea02a85814c4cebe1bb869db5d512ed7&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className="weather-container">
      <h2 className="weather-title">🌤 Weather App</h2>
      <div className="weather-input">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {weather && weather.main ? (
        <div className="weather-card">
          <h3>{weather.name}</h3>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>☁ Condition: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
