import React, {Component} from 'react';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component {
    render() {
        return(
            <Navbar className="color-nav" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Spotify Chart Map
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header