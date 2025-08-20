# Aura Weather: An Interactive Forecast Dashboard

Aura Weather is a beautifully designed, modern weather application that provides real-time weather data, multi-day forecasts, and an interactive map interface. Built with React and a suite of powerful data visualization libraries, this project transforms raw API data from OpenWeatherMap into an intuitive and user-friendly experience. It serves as a comprehensive portfolio piece demonstrating professional frontend development architecture, robust API integration, and a keen focus on user experience.

![Aura Weather Screenshot](image-placeholder.png)

---

## Table of Contents

*   [Features](#features)
*   [Technical Stack](#technical-stack)
*   [Architectural Decisions & Problem-Solving](#architectural-decisions--problem-solving)
*   [Setup and Installation](#setup-and-installation)

---

## Features

Aura Weather is packed with features designed to provide a comprehensive and engaging weather overview:

*   **Real-Time Current Weather:** Instantly view the temperature, "feels like" temperature, humidity, wind speed, and a descriptive weather condition for any searched location.
*   **Interactive Weather Map:** A dynamic map, powered by Leaflet, that centers on the user's location and displays a real-time precipitation radar layer from OpenWeatherMap.
*   **24-Hour Temperature Chart:** A smooth, interactive line graph built with Chart.js that visualizes the temperature trend over the next 24 hours in 3-hour intervals.
*   **5-Day Daily Forecast:** A clean, easy-to-read forecast providing the high and low temperatures and weather conditions for the next five days.
*   **Dynamic UI:** The application features weather-appropriate icons and a dynamic background that changes based on current conditions, creating an immersive user experience.
*   **Geolocation Support:** A "Use My Location" button allows users to instantly get the weather for their current geographical position using the browser's Geolocation API.
*   **Robust User Experience:**
    *   **Loading State:** A loading spinner provides clear feedback to the user while weather data is being fetched.
    *   **Error Handling:** The application gracefully handles invalid location entries or API errors, presenting a user-friendly message instead of crashing or showing a blank screen.

---

## Technical Stack

This project was built using a modern frontend technology stack, focusing on creating a maintainable, scalable, and visually appealing application.

*   **Core Framework:** **React 18**
*   **Styling:** **Tailwind CSS** for a utility-first, responsive design approach.
*   **API Integration:** **Axios** for handling asynchronous HTTP requests to the OpenWeatherMap API.
*   **Data Visualization:**
    *   **Chart.js (`react-chartjs-2`)**: For rendering the beautiful and interactive 24-hour temperature line chart.
    *   **Leaflet (`react-leaflet`)**: For creating the interactive weather map and its data overlays.
*   **Icons:** **React Icons** for a comprehensive library of high-quality SVG icons.
*   **Development Environment:** **Create React App**

---

## Architectural Decisions & Problem-Solving

Building Aura Weather involved several key engineering decisions aimed at creating a professional-grade application.

### 1. Component-Based Architecture

The application was intentionally architected into a modular, component-based structure. We refactored the initial proof-of-concept into distinct, reusable components (`Search`, `CurrentWeather`, `WeatherMap`, `TemperatureChart`, etc.). This separation of concerns was a critical step that improved maintainability and made it significantly easier to manage, debug, and update individual pieces of functionality.

### 2. Centralized State Management

All core application state (e.g., `currentWeather`, `forecast`, `loading`, `error`) is managed within the top-level `App.js` component using React's `useState` hook. This "lifting state up" pattern ensures a single source of truth and a predictable, unidirectional data flow, making the application's behavior easy to reason about and debug.

### 3. Resilient API Handling

We used `Promise.all` to fetch both the current weather and forecast data concurrently, improving the perceived performance of the application. The implementation includes robust `.catch()` error handling to gracefully manage failed API requests (e.g., a 404 for a non-existent city) and a `.finally()` block to ensure loading states are always correctly toggled. The API key is also securely stored in a `.env` file to prevent exposure.

### 4. Adapting to Technical Constraints

The initial plan to use the "One Call" API was pivoted when it was discovered to be behind a paywall. We successfully adapted the application to use the free-tier **"5 Day / 3-Hour Forecast"** endpoint. The daily forecast was then programmatically derived by filtering this data for midday entries, demonstrating the ability to work creatively within real-world technical limitations.

---

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```
    git clone https://github.com/Wardhanhrsh/Weather-Monitoring.git
    cd Weather-Monitoring
    ```
2.  **Install dependencies:**
    ```
    npm install
    ```
3.  **Set up your environment variables:**
    *   Create a file named `.env` in the root of the project.
    *   Add your OpenWeatherMap API key to this file. This is a critical security step to keep your key private.
      ```
      REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
      ```
4.  **Start the development server:**
    ```
    npm start
    ```
    The application should now be running on `http://localhost:3000`.

