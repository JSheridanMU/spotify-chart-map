import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MapView from './components/MapView/MapView';
import {DateSlider} from './components/Interface/DateSlider';
import {GlobalChartList} from './components/Interface/GlobalChartList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function App() {
  document.body.style = 'background: #181717;';
  return (
    <div className="App">
      <Header/>
      <MapView/>
      <DateSlider/>
      <GlobalChartList/> 
    </div>
  );
}

export default App;