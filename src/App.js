import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

function App() {
  document.body.style = "background: #181717;";
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
