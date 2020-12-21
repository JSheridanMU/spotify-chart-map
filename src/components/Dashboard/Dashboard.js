import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Table } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import MapView from "../MapView/MapView";
import GetDate from "../GetDate/GetDate"
import GetCountry from "../GetCountry/GetCountry";
//import GetCharts from "../GetCharts/GetCharts"
//import ChartsData from "../ChartsData/ChartsData"
import './Dashboard.css';

const initialCountry = {
  name: "Ireland",
  code: "ie",
};

export default function Dashboard() {
  const getThisYear = () => {
    return new Date().getFullYear();
  }
  const { date, handleDateChange } = GetDate(2020);
  const { country, handleInputChange } = GetCountry(initialCountry);

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <RangeSlider
              value={date}
              variant={"success"}
              onChange={changeEvent => handleDateChange(changeEvent.target.date)}
              min={2006}
              max={getThisYear()}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h3 style={{color: "#1DB954"}}>Global Charts {date}</h3>
            <Table className="GlobalChartTable">
            
            </Table>
          </Col>
          <Col xs={6}>
            <MapView handleInputChange={handleInputChange}/>
          </Col>
          <Col xs={3}>
            <h3 style={{color: "#1DB954"}}>{country.name} Charts {date}</h3>
            <Table className="CountryChartTable">
            
            </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}