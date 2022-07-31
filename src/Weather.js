import React, { useState } from "react";
import "./Weather.css";

import axios from "axios";
import Api from "./Api";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let url = `${Api.url}/data/2.5/weather?q=${city}&appid=${Api.key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  const searchCurrentLocation = (position) => {
    let url = `${Api.url}/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${Api.key}&units=metric`;
    axios.get(url).then(handleResponse);
  };

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  const getLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  };

  if (weatherData.ready) {
    //

    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-2">
              <button className="geolocation">
                <FontAwesomeIcon icon={faMapMarkerAlt} onClick={getLocation} />
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        Searching... <em> please wait </em>{" "}
      </div>
    );
  }
}
