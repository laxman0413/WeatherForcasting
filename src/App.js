import React, { useState } from 'react';
import './App.css'
import axios from 'axios';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const [weather, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?location=${location}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  return (
    <div>
      <h1 className='header'>Weather Forcasting Application</h1>
      <SearchForm className="search-form" onSearch={fetchWeatherData} />
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default App;
