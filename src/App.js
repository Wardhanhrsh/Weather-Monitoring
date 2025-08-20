// src/App.js
import React, { useState } from "react";
import axios from "axios";
import Search from "./components/search";
import CurrentWeather from "./components/currentWeather";
import WeatherDetails from "./components/weatherDetails";
import WeatherMap from "./components/WeatherMap";
import TemperatureChart from "./components/TemperatureChart";
import DailyForecast from "./components/DailyForecast";
import StatusIndicator from "./components/StatusIndicator";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const fetchData = (url1, url2) => {
    setLoading(true);
    setError(null);
    setCurrentWeather({});
    setHourlyForecast([]);
    setDailyForecast([]);

    Promise.all([axios.get(url1), axios.get(url2)])
      .then(([weatherResponse, forecastResponse]) => {
        setCurrentWeather(weatherResponse.data);
        setHourlyForecast(forecastResponse.data.list.slice(0, 8));
        const dailyData = forecastResponse.data.list.filter(item =>
          item.dt_txt.includes("12:00:00")
        );
        setDailyForecast(dailyData);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError("Location not found. Please check the spelling and try again.");
      })
      .finally(() => {
        setLoading(false);
        setLocation("");
      });
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
      fetchData(weatherUrl, forecastUrl);
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
          const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
          fetchData(weatherUrl, forecastUrl);
        },
        () => {
          setError("Unable to retrieve your location. Please enable location services in your browser.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="w-full h-auto min-h-screen text-white">
      {/* Background component can be added here if you wish */}
      <div className="text-center p-4">
        <Search
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
          handleGeolocation={handleGeolocation}
        />
      </div>

      <div className="max-w-[500px] w-full mx-auto p-4">
        {/* The Status Indicator will display loading or error messages */}
        <StatusIndicator loading={loading} error={error} />

        {/* This fragment renders all the weather data only if not loading and no error */}
        {!loading && !error && currentWeather.name && (
          <>
            <CurrentWeather data={currentWeather} />
            <WeatherDetails data={currentWeather} />
            <WeatherMap location={currentWeather.coord} />
            <TemperatureChart forecast={hourlyForecast} />
            <DailyForecast forecast={dailyForecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
