import React, { useState } from "react";
import { Col, Container, Row, Form, Table } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import MapView from "../MapView/MapView";
import GetCountry from "../GetCountry/GetCountry";
import GetCharts from "../GetCharts/GetCharts"
import './Dashboard.css';

const initialCountry = {
  name: "Ireland",
  code: "ie",
};

export default function Dashboard() {
  const [value, setValue] = useState(2020);
  const getThisYear = () => {
    return new Date().getFullYear();
  }

  const { country, handleInputChange } = GetCountry(initialCountry);

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Form>
              <Form.Group controlId="formBasicRange">
                <RangeSlider
                  value={value}
                  variant={"success"}
                  onChange={changeEvent => setValue(changeEvent.target.value)}
                  min={2006}
                  max={getThisYear()}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h3 style={{color: "#1DB954"}}>Global Charts {value}</h3>
            <Table className="GlobalChartTable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Title</th>
                <th>Streams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>Song1</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#2</td>
                <td>Song2</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#3</td>
                <td>Song3</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#4</td>
                <td>Song4</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#5</td>
                <td>Song5</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#6</td>
                <td>Song6</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#7</td>
                <td>Song7</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#8</td>
                <td>Song8</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#9</td>
                <td>Song9</td>
                <td>54645</td>
              </tr>
              <tr>
                <td>#10</td>
                <td>Song10</td>
                <td>54645</td>
              </tr>
            </tbody>
            </Table>
          </Col>
          <Col xs={6}>
            <MapView handleInputChange={handleInputChange}/>
          </Col>
          <Col xs={3}>
            <h3 style={{color: "#1DB954"}}>{country.name} Charts {value}</h3>
            <Table className="CountryChartTable">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Title</th>
                  <th>Streams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Song1</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td>Song2</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#3</td>
                  <td>Song3</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#4</td>
                  <td>Song4</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#5</td>
                  <td>Song5</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#6</td>
                  <td>Song6</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#7</td>
                  <td>Song7</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#8</td>
                  <td>Song8</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#9</td>
                  <td>Song9</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>#10</td>
                  <td>Song10</td>
                  <td>54645</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

/*
<div className = "DateSlider">
  
</div>
*/
