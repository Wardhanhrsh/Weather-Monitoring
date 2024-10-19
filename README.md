🌤️ Real-Time Weather Monitoring Application

A real-time data processing system to allow users to fetch real-time weather data for metros in India using OpenWeatherMap API. 

The app includes a configurable alert systems to notify the user if specific weather thresholds, such as temperature, are breached.

🚀 Features
    
- Real-Time Weather Data: Fetch current weather details like temperature, humidity, wind speed and weather description.
- Unit Selection: Allows users to select temperature units between Celsius(°C) and Kelvin(k).
- Temperature Threshold Alert: User can set a temperature threshold and recieve console alerts when the temperature exceeds.

🛠️ Technologies Used
        

- React: Frontend framework for building the UI.
- Axios: For making HTTP requests to the OpenWeatherMap API.
- OpenWeatherMap API: Source of weather data.
- CSS: For styling the components.

🖥️ Installation & Setup

1. Clone the repository

    - git colne https://github.com/yourusername/weather-monitering.git
    - cd weather-monitoring

2. Install Dependencies
    
    - npm install

3. Get an API Key
    
    - Go to OpenWeatherMap and sign up for a free API key.
    - Replace the API key in the project at App.js file in "const url = {API} "

4. Run the Application

    - npm start

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

🎨 UI Preview

    - Weather Data

         Displays city name, current average temperature, and other weather details.

🌍 API Used
    
    - OpenWeatherMap API: Provides real-time weather data for metro cities in India.

Author
    - Harshwardhan - https://github.com/Wardhanhrsh