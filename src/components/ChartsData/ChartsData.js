import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Table } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import MapView from "../MapView/MapView";
import GetCountry from "../GetCountry/GetCountry";
import GetCharts from "../GetCharts/GetCharts"
import './Dashboard.css';


export default function ChartsData(props) {
  con

  const getThisYear = () => {
    return new Date().getFullYear();
  }

  const { country, handleInputChange } = GetCountry(initialCountry);

  const [date, setDate] = useState(2020);

  const { chart, handleDataChange } = GetCharts(initialChart, value, country.name);
  useEffect(() => handleDataChange, [country, value]);


  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}