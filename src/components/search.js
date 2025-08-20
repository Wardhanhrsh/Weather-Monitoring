// src/components/Search.js
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'; // Using react-icons

const Search = ({ location, setLocation, searchLocation, handleGeolocation }) => {
  return (
    <div className="relative w-full md:w-[500px] mx-auto">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
        className="py-3 px-6 w-full text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white/100 shadow-md"
      />
      <button 
        onClick={handleGeolocation} 
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full text-gray-500 hover:bg-gray-200"
        title="Use my location"
      >
        <FaLocationArrow />
      </button>
    </div>
  );
};

export default Search;
