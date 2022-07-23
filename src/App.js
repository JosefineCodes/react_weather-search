import "./App.css";
import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default App;

function App() {
  return (
    <div className="App">
      <div className="AppWeather">
        <Weather defaultCity="Berlin" />
      </div>
      <footer>
        This project was coded by Josefine and is{" "}
        <a
          href="https://github.com/JosefineCodes/react_weather-search"
          target="_blank"
          rel="noreferrer"
        >
          open-source on GitHub
        </a>
      </footer>
    </div>
  );
}
