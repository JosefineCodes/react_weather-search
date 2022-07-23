import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import Api from "./Api";

export default function WeatherForecast(props) {
  let [forecastready, setForecastready] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setForecastready(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setForecastready(true);
  }

  if (forecastready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let url = `${Api.url}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${Api.key}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
