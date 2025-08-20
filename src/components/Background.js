// src/components/Background.js
import React from 'react';

const Background = ({ weather }) => {
  let backgroundClass = 'clear'; // Default class

  if (weather) {
    const main = weather.toLowerCase();
    if (main.includes('rain') || main.includes('drizzle')) {
      backgroundClass = 'rain';
    } else if (main.includes('snow')) {
      backgroundClass = 'snow';
    }
  }

  // This component is now just a div with dynamic classes.
  return <div className={`background ${backgroundClass}`}></div>;
};

export default Background;
