## Real-Time Weather Monitoring Application

A real-time data processing system to allow users to fetch real-time weather data of metro cities in India using OpenWeatherMap API. 

The app includes a configurable alert system to notify the user if specific weather thresholds, such as temperature, are breached.

## Features
    
- Real-Time Weather Data: Fetch current weather details like temperature, humidity, wind speed and weather description.
![plot](./preview1.png)
- Unit Selection: Allows users to select temperature units between Celsius(°C) and Kelvin(k).
![plot](./preview2.png)
- Temperature Threshold Alert: User can set a temperature threshold and recieve console alerts when the temperature exceeds.
![plot](./preview3.png)

## Technologies Used
        

- React: Frontend framework for building the UI.
- Axios: For making HTTP requests to the OpenWeatherMap API.
- OpenWeatherMap API: Source of weather data.
- CSS: For styling the components.

## Installation & Setup

1. Clone the repository

    - git clone https://github.com/yourusername/weather-monitoring.git
    - cd weather-monitoring

2. Install Dependencies
    
        npm install

3. Get an API Key
    
    - Go to OpenWeatherMap and sign up for a free API key.
    - Replace the {API key} with your API key generated from OpenWeatherMap API in the project in App.js file.
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid={Your API Key}`.

4. Run the Application

        npm start

## How to use 

1. Search for a location:

    - Type the name of any city in the search bar and hit Enter.
    - The app will display current weather data for that location, including:
        - Current temperature
        - Minimum and maximum temperatures
        - Weather description (e.g., clear, cloudy)
        - Feels-like temperature
        - Humidity and wind speed

2. Set Temperature Threshold:

    - In the UI, set a custom temperature threshold (in °C).
    - If the temperature exceeds the threshold for the
    specified number of consecutive updates, an alert message will be logged in the console.

3. Console Alerts:

    - If the current temperature exceeds the set threshold, the app will display a console alert message like:

        "ALERT: Temperature exceeds 35°C."

## UI Preview
- Weather Data
    - Displays city name, current average temperature, and other weather details.

## API Used
    
- OpenWeatherMap API: Provides real-time weather data for metro cities in India.
