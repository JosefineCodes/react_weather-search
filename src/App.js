import "./App.css";
import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

export default App;

function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}
