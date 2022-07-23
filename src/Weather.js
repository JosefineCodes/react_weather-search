import React from "react";
import "./Weather.css";

//import axios from "axios";
//import Api from "./Api";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  // let [city, setCity] = useState(props.defaultCity);
  // let [weatherData, setWeatherData] = useState({ ready: false });
  // function handleResponse(response) {
  //  setWeatherData({
  //    ready: true,
  //     coordinates: response.data.coord,
  //    temperature: response.data.main.temp,
  //    humidity: response.data.main.humidity,
  //     wind: Math.round(response.data.wind.speed),
  //   city: response.data.name,
  //     date: new Date(response.data.dt * 1000),
  //     description: response.data.weather[0].description,
  //     icon: response.data.weather[0].icon,
  //   });
  // }

  //function search() {
  //  let url = `${Api.url}/data/2.5/weather?q=${city}&appid=${Api.key}&units=metric`;
  //  axios.get(url).then(handleResponse);
  // }

  //function handleSubmit(event) {
  //event.preventDefault();
  //  search();
  /// }

  // function handleCityChange(event) {
  //   setCity(event.target.value);
  //////// }

  //if (weatherData.ready) {//

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <WeatherInfo />
      <WeatherForecast />
    </div>
  );
  //  } else {
  //search();
  // return (
  //   <div>
  ////    Searching... <em> please wait </em>{" "}
  //   </div>
  //  );
}
//}
