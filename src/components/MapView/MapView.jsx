import React, {Component} from 'react';
import {MapContainer, GeoJSON} from 'react-leaflet'
import mapData from './../../data/countries.json'
import 'leaflet/dist/leaflet.css'
import './MapView.css'
import Container from 'react-bootstrap/Container'

const mapStyle = {
    height: '90vh',
    width: '100%',
};

class MapView extends Component {
    state = {}
      
    componentDidMount() {
        console.log(mapData)
    }

    render() {
        return(
            <Container className="map-container">
                <MapContainer style={mapStyle} center={[55,20]} zoom={4}>
                    <GeoJSON data={mapData.features}/>
                </MapContainer>
            </Container>
        )
    }
}

export default MapView