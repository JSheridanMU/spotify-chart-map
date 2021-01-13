import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import MapView from "../MapView/MapView";
import GetCountry from "../GetCountry/GetCountry";
import GetTrack from "../GetTrack/GetTrack";
import ChartsData from "../ChartsData/ChartsData"
import "./Dashboard.css";
import moment from "moment";
import Header from "../Header/Header";
import Player from "../Player/Player";
import { db } from "../../utils/Firebase";

const makeArray = (snapshot) => {
  const output = []

  snapshot.forEach((child) => {
    let item = child.val()
    item.key = child.key
    output.push(item)
  })
  
  return output
}

export default function Dashboard() {
  let dateArray = [];
  let minDate = "01/01/2017";
  let maxDate = "11/12/2020";

  while (
    moment(minDate, "DD/MM/YYYY").valueOf() <=
    moment(maxDate, "DD/MM/YYYY").valueOf()
  ) {
    dateArray.push(moment(minDate, "DD/MM/YYYY").format("DD/MM/YYYY"));
    minDate = moment(minDate, "DD/MM/YYYY").add(1, "days").format("DD/MM/YYYY");
  }

  const initialCountry = { name: "Ireland", code: "ie"};
  const { country, handleInputChange } = GetCountry(initialCountry);
  const { track, handleTrackChange } = GetTrack();
  const [tempDate, setTempDate] = useState(null);
  const [finalDate, setFinalDate] = useState(tempDate);
  const [global, setGlobal] = useState(null);
  const [regional, setRegional] = useState(null);
  const [_token, setToken] = useState(null);

  const handleTokenChange = (e) => {
    setToken(e)
  }

  useEffect(() => {
    const ref = db.ref();
    const date = dateArray[finalDate] ? dateArray[finalDate] : maxDate;
    const altDate = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
    const region = country ? country : initialCountry;

    ref.orderByChild("date").equalTo(date).on("value", (snapshot) => {
        let data = makeArray(snapshot)
        let countryTemp = []
        let globalTemp = []
        
        ref.orderByChild("date").equalTo(altDate).on("value", (snapshot) => {
            data = data.concat(makeArray(snapshot))

            data.forEach(entry => {
              if(entry.region === region.code)
                countryTemp.push(entry)
              if(entry.region === "global")
                globalTemp.push(entry)
            })
            setGlobal(globalTemp)
            setRegional(countryTemp)
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, finalDate]);

  return (
    <React.Fragment>
      <Header tokenChange={handleTokenChange}/>
      <Container fluid={true}>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <div data-testid='slider'>
              <RangeSlider
                value={tempDate ? tempDate : dateArray.length - 1}
                variant={"success"}
                onChange={(changeEvent) => setTempDate(changeEvent.target.value)}
                onAfterChange={(changeEvent) =>
                  setFinalDate(changeEvent.target.value)
                }
                min={0}
                max={dateArray.length - 1}
                tooltip={"auto"}
                tooltipLabel={() => tempDate ? dateArray[tempDate] : dateArray[dateArray.length-1]}
              />
            </div>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={3}>
            <h4 style={{ color: "#fff" }}>
              Global Charts{" "}
              {dateArray[finalDate] ? dateArray[finalDate] : maxDate}
            </h4>
            <div className = "GlobalChartTable">
              <Table hover>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Song</th>
                    <th>Streams</th>
                  </tr>
                </thead>
                <tbody>
                  {ChartsData(global, handleTrackChange, _token)}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={6}>
            <MapView handleInputChange={handleInputChange} />
          </Col>
          <Col xs={3}>
            <h4 style={{ color: "#fff" }}>
              {country.name} Charts{" "}
              {dateArray[finalDate] ? dateArray[finalDate] : maxDate}
            </h4>
            <div className = "CountryChartTable">
              <Table hover>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Track</th>
                    <th>Streams</th>
                  </tr>
                </thead>
                <tbody>
                  {ChartsData(regional, handleTrackChange, _token)}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>{_token && track && <Player token={_token} track={track} />}</Row>
      </Container>
    </React.Fragment>
  );
}
