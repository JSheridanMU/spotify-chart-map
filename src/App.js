import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

function App() {
  document.body.style = "background: #181717;";
  return (
    <div className="App">
      <Header />
      <Dashboard/>
    </div>
  );
}

export default App;
