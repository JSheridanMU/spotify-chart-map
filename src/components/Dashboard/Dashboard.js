import React, { useState } from "react";
import { Col, Container, Row, Form, Table } from "react-bootstrap";
import MapView from "../MapView/MapView";
import GetCountry from "../GetCountry/GetCountry";
import Player from "../Player/Player";
import hash from "./hash";

const initialCountry = {
  name: "Ireland",
  code: "ie",
};

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "b7160102d9c74bf78c0ae7590b3bd441";
const redirectUri = "http://localhost:3000";
const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-library-read",
  "user-library-modify",
  "user-read-currently-playing",
  "user-modify-playback-state",
];

export default function Dashboard() {
  const { country, handleInputChange } = GetCountry(initialCountry);

  let _token = hash.access_token;

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
        <Row>
          {!_token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {_token && (
              <Player
                token={_token}
              />
            )}
        </Row>
      </Container>
    </React.Fragment>
  );
}
