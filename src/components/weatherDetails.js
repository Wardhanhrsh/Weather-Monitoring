// src/components/WeatherDetails.js
import React from 'react';

const WeatherDetails = ({ data }) => {
  return (
    <div className="flex justify-between text-center p-6 mt-8 rounded-xl text-white bg-white/20">
      <div className="flex flex-col items-center">
        {data.main ? <p className="font-bold text-2xl">{data.main.feels_like.toFixed()}°C</p> : null}
        <p>Feels Like</p>
      </div>
      <div className="flex flex-col items-center">
        {data.main ? <p className="font-bold text-2xl">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div className="flex flex-col items-center">
        {data.wind ? <p className="font-bold text-2xl">{data.wind.speed.toFixed()} MPH</p> : null}
        <p>Wind Speed</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
