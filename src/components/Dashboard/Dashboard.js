import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import MapView from "../MapView/MapView";
import GetCountry from "../GetCountry/GetCountry";
import ChartsData from "../ChartsData/ChartsData"
import "./Dashboard.css";
import moment from "moment";
import Header from "../Header/Header";
import Player from "../Player/Player";
import { db } from "../../utils/Firebase";

const initialCountry = {
  name: "Ireland",
  code: "ie",
};

export default function Dashboard() {
  let dateArray = [];
  let minDate = "01/01/2016";
  //let maxDate = moment().subtract(1, "days").format("DD/MM/YYYY");
  let maxDate = "29/11/2020";

  while (
    moment(minDate, "DD/MM/YYYY").valueOf() <=
    moment(maxDate, "DD/MM/YYYY").valueOf()
  ) {
    dateArray.push(moment(minDate, "DD/MM/YYYY").format("DD/MM/YYYY"));
    minDate = moment(minDate, "DD/MM/YYYY").add(1, "days").format("DD/MM/YYYY");
  }

  const { country, handleInputChange } = GetCountry(initialCountry);
  const [tempDate, setTempDate] = useState(maxDate);
  const [finalDate, setFinalDate] = useState(tempDate);
  const [_token, setToken] = useState(null);

  const handleTokenChange = (e) => {
    setToken(e)
  }

  return (
    <React.Fragment>
      <Header tokenChange={handleTokenChange}/>
      <Container fluid={true}>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <RangeSlider
              value={tempDate}
              variant={"success"}
              onChange={(changeEvent) => setTempDate(changeEvent.target.value)}
              onAfterChange={(changeEvent) =>
                setFinalDate(changeEvent.target.value)
              }
              min={0}
              max={dateArray.length - 1}
              tooltip={"auto"}
              tooltipLabel={(currentValue) => dateArray[tempDate]}
            />
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={3}>
            <h3 style={{ color: "#1DB954" }}>
              Global Charts{" "}
              {dateArray[finalDate] ? dateArray[finalDate] : maxDate}
            </h3>
            <div className = "GlobalChartTable">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Song</th>
                    <th>Streams</th>
                  </tr>
                </thead>
                <tbody>
                  {ChartsData("gData")}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={6}>
            <MapView handleInputChange={handleInputChange} />
          </Col>
          <Col xs={3}>
            <h3 style={{ color: "#1DB954" }}>
              {country.name} Charts{" "}
              {dateArray[finalDate] ? dateArray[finalDate] : maxDate}
            </h3>
            <div class = "CountryChartTable">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Song</th>
                    <th>Streams</th>
                  </tr>
                </thead>
                <tbody>
                  {ChartsData("cData")}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>{_token && <Player token={_token} />}</Row>
      </Container>
    </React.Fragment>
  );
}
