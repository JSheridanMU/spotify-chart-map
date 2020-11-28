import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import Container from "react-bootstrap/Container";

const mapStyle = {
  height: "70vh",
  width: "35vw",
};

class MapView extends Component {
  onEachCountry = (country, layer) => {
    layer.on({
      click: (e) => {
        this.props.handleInputChange(e.target.feature.properties);
      },
    });
  };

  countryStyle = {
    fillColor: "#1DB954",
    fillOpacity: "0.5",
    color: "#1DB954",
    weight: "1",
  };

  render() {
    return (
      <Container className="map-container">
        <MapContainer style={mapStyle} center={[55, 20]} zoom={4}>
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
      </Container>
    );
  }
}

export default MapView;
