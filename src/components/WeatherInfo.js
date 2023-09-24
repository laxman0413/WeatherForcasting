import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = ({ weather }) => {
  const { main, weather: weatherDetails } = weather;
  const { temp, humidity } = main;
  const { description } = weatherDetails[0];

  return (
    <div className="weather-card">
      <h2 className="weather-title">Weather Information</h2>
      <p className="weather-info">Temperature: {temp}°C</p>
      <p className="weather-info">Humidity: {humidity}%</p>
      <p className="weather-info">Description: {description}</p>
    </div>
  );
};

export default WeatherInfo;
