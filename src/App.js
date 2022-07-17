import axios from "axios";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather
        date="Tuesday"
        time="10:20"
        city="Perth"
        condition="cloudy"
        temp={19}
        humidity={80}
        windspeed={10}
      />
    </div>
  );
}

export default App;
