import React, {Component} from 'react';
import {MapContainer, GeoJSON, ImageOverlay} from 'react-leaflet'
import mapData from '../../data/countries.json'
import 'leaflet/dist/leaflet.css'
import './MapView.css'
import Container from 'react-bootstrap/Container'

const mapStyle = {
    height: '70vh',
    width: '35vw',
};

const bounds = mapData.features[16].geometry.coordinates

class MapView extends Component {
    state = {}

    onEachCountry = (country, layer) => {
        layer.on({
            click: (e) => {
                this.props.handleInputChange(e.target.feature.properties)
            }
        })
    }

    render() {
        return(
            <Container className="map-container">
                <MapContainer style={mapStyle} center={[55,20]} zoom={4}>
                    <GeoJSON data={mapData.features} onEachFeature={this.onEachCountry}>
                        <ImageOverlay 
                            url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
                            bounds={bounds}
                        />
                    </GeoJSON>
                </MapContainer>
            </Container>
        )
    }
}

export default MapView