import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(props.city);
  const [currentWeather, setcurrentWeather] = useState({
    city: props.city,
    condition: props.condition,
    temp: props.temp,
    humidity: props.humidity,
    windspeed: props.windspeed,
    date: props.date,
    time: props.time,
    icon: null,
  });

  // Save input city name
  function updateCity(event) {
    setCity(event.target.value);
  }

  // Get info from openweather API
  function displayCurrentWeather(response) {
    let current = new Date();
    setcurrentWeather({
      city: response.data.name,
      condition: response.data.weather[0].description,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      windspeed: Math.round(response.data.wind.speed),
      date: `${current.getDate()}/${current.getMonth()}`,
      time: `${current.getHours()}:${current.getMinutes()}`,
      icon: response.data.weather[0].icon,
    });
    setLoaded(true);
  }

  // Acceess to openweather API
  function getWeather(event) {
    event.preventDefault();
    const apiKey = `49e735c03709a6e5740d57ba7f72eb96`;
    const apiUnit = `metric`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnit}`;

    console.log(apiUrl);
    axios.get(apiUrl).then(displayCurrentWeather);
  }

  return (
    <div className="Weather">
      <form onSubmit={getWeather}>
        <input
          id="search-input"
          type="text"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <div className="top-row">
        <div className="col">
          <h2>{currentWeather.city}</h2>
          <p>
            Last updated: {currentWeather.date} {currentWeather.time}
          </p>
          <p>{currentWeather.condition}</p>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
          <h1 className="temp">{currentWeather.temp}</h1>
          <div className="col">
            <a href="/">°C</a>|<a href="/">°F</a>
            <p>{currentWeather.condition}</p>
          </div>
        </div>
        <div className="other-info">
          <p>Humidity: {currentWeather.humidity}%</p>
          <p>Wind: {currentWeather.windspeed} km/h</p>
        </div>
      </div>
      <div className="row forecast">
        <WeatherForecast date="Wed" temp="18" condition="rain" />
        <WeatherForecast date="Thu" temp="20" condition="rain" />
        <WeatherForecast date="Fri" temp="17" condition="rain" />
        <WeatherForecast date="Sat" temp="15" condition="rain" />
        <WeatherForecast date="Sun" temp="22" condition="rain" />
      </div>
    </div>
  );
}
