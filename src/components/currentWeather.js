// src/components/CurrentWeather.js
import React from 'react';
import WeatherIcon from './WeatherIcon';

const CurrentWeather = ({ data }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full p-4 text-white">
      <div className="flex justify-between items-start">
        <div className="text-left">
          <p className="text-xl">{data.name}</p>
          {data.weather ? <p className="text-lg capitalize">{data.weather[0].description}</p> : null}
        </div>
        <WeatherIcon weather={data.weather && data.weather[0].main} className="text-5xl" />
      </div>
      {data.main ? (
        <h1 className="text-8xl font-semibold mt-4">{data.main.temp.toFixed()}°C</h1>
      ) : null}
    </div>
  );
};

export default CurrentWeather;
