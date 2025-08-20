// src/components/WeatherMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const WeatherMap = ({ location }) => {
  if (!location || !location.lat || !location.lon) {
    return null; 
  }

  const position = [location.lat, location.lon];

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">WEATHER MAP</h2>
      <div className="h-80 w-full rounded-xl overflow-hidden">
        <MapContainer 
          key={`${location.lat}_${location.lon}`} 
          center={position} 
          zoom={9} 
          scrollWheelZoom={false} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`}
            attribution='&copy; OpenWeatherMap'
          />
          <Marker position={position}>
            <Popup>Your selected location.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;
