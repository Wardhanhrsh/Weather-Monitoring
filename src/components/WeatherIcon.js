// src/components/WeatherIcon.js
import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const WeatherIcon = ({ weather, className }) => {
  const selectIcon = () => {
    if (!weather) return null;

    const main = weather.toLowerCase();
    if (main.includes('clear')) return <WiDaySunny className={className} />;
    if (main.includes('clouds')) return <WiCloudy className={className} />;
    if (main.includes('rain')) return <WiRain className={className} />;
    if (main.includes('drizzle')) return <WiRain className={className} />;
    if (main.includes('snow')) return <WiSnow className={className} />;
    if (main.includes('thunderstorm')) return <WiThunderstorm className={className} />;
    if (main.includes('fog') || main.includes('mist')) return <WiFog className={className} />;
    
    return <WiDaySunny className={className} />; // Default icon
  };

  return <div>{selectIcon()}</div>;
};

export default WeatherIcon;
