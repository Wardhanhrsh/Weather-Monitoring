import React, { useState } from "react";
import axios from 'axios'
import './index.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [threshold, setThreshold] = useState('');  // Default threshold of 31°C
  const [consecutiveUpdates, setConsecutiveUpdates] = useState(2); // Default 2 consecutive updates
  const [breachCount, setBreachCount] = useState(0); // Track the number of breached updates
  const [unit, setUnit] = useState('Celsius')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid={Your API Key}`


const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      let temp = response.data.main.temp;
      
      // For manual checking
      // const temp = 40;   

      if( unit === 'kelvin'){
        temp = temp + 273.15;
      }


      setData(response.data)

      console.log(`Current Temperature: ${temp}°${unit === 'Celsius' ? 'C' : 'K'}`);
      console.log(`Threshold: ${threshold}°C`);

      if(temp > threshold){
        setBreachCount(prevCount => prevCount +1);

        if(breachCount + 1 >= consecutiveUpdates) {
          alert(`Alert: Temperature ecxeeded ${threshold}°C for ${consecutiveUpdates} updates.`)
          setBreachCount(0);
        }

      } else{
        setBreachCount(0)
      }
      console.log(`Breach count: ${breachCount}`)
    });
    setLocation('')
  }
  
}


  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
         type="text"/>
      </div>

      <div className="unit-selection">
        <p> Select Temperature Unit:</p>
        <select value={unit} onChange={e => setUnit(e.target.value)}>
          <option value="Celsius">Celsius (°C)</option>
          <option value="Kelvin">Kelvin (k)</option>
        </select>
      </div>
      
      <div className="threshold">
        <p>Set Temperature Threshold:</p>
        <input
        type="number"
        value={threshold}
        onChange={e => setThreshold(e.target.value)}
        placeholder="Threshold (°C)"
        />

        {/* <p> Set consecutive updates:</p>
        <input
        type="number"
        value={consecutiveUpdates}
        onChange={e => setConsecutiveUpdates(e.target.value)}
        placeholder="Consecutive Updates"
        /> */}
      </div>

      <div className="container">
        
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>Curr-Temp: </h1>
            {data.main ? <h1>{unit === 'Celsius' ? data.main.temp.toFixed() + '°C' : (data.main.temp + 273.15).toFixed() + 'K'}</h1> : null}
          </div>
          <div className="temp_min">
            <h1>Min-temp: </h1>
            {data.main ? <h1>{unit === 'Celsius' ? data.main.temp_min.toFixed() + '°C' : (data.main.temp_min + 273.15).toFixed() + 'K' }</h1> : null}
          </div>
          <div className="temp_max">
            <h1>Max-temp: </h1>
            {data.main ? <h1>{unit === 'Celsius' ? data.main.temp_max.toFixed() + '°C' : (data.main.temp_max + 273.15).toFixed() + 'K'}</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        
        </div>
      

        {data.name !== undefined && 
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className="bold">{unit === 'Celsius' ? data.main.feels_like.toFixed() + '°C' : (data.main.feels_like + 273.15).toFixed() + 'K'}</p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH </p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
        }
        
      </div>
    </div>
      
  );
}

export default App;
