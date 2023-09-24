import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location or city"
          className='search-input'
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <p> This is the Application where you can search the weather data you need according to location </p>
    </div>
  );
};

export default SearchForm;
