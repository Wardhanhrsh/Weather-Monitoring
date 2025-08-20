// src/components/DailyForecast.js
import React from 'react';
import WeatherIcon from './WeatherIcon';

const DailyForecast = ({ forecast }) => {
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">DAILY FORECAST</h2>
      <div className="flex flex-col space-y-2 text-white">
        {forecast.map((day, index) => (
          <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-white/20">
            <p className="w-1/3">{getDayOfWeek(day.dt_txt)}</p>
            <div className="w-1/3 flex justify-center">
              <WeatherIcon weather={day.weather[0].main} className="text-3xl" />
            </div>
            <p className="w-1/3 text-right font-semibold">{day.main.temp_max.toFixed()}° / {day.main.temp_min.toFixed()}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
