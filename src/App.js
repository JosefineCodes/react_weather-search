import "./App.css";
import React from "react";
import Weather from "./Weather";

export default App;

function App() {
  return (
    <div className="App">
      <Weather />
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
