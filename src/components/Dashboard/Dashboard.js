import React from "react";
import { Col, Container, Row, Form, Table } from "react-bootstrap";
import MapView from "../MapView/MapView";
import GetCountry from "../GetCountry/GetCountry";

const initialCountry = {
  name: "Ireland",
  code: "ie",
};

export default function Dashboard() {
  const { country, handleInputChange } = GetCountry(initialCountry);

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Form>
              <Form.Group controlId="formBasicRange">
                <Form.Label>Temp Slider</Form.Label>
                <Form.Control type="range" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h3>Temp Global</h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song</th>
                  <th>Streams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Song1</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Song2</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Song3</td>
                  <td>54645</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={6}>
            <MapView handleInputChange={handleInputChange}/>
          </Col>
          <Col xs={3}>
            <h3>Temp {country.name}</h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song</th>
                  <th>Streams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Song1</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Song2</td>
                  <td>54645</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Song3</td>
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
