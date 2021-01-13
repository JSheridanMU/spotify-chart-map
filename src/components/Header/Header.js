import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import hash from "./hash";

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = process.env.REACT_APP_CLIENT_ID
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
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

export default function Header(props) {
  let _token = hash.access_token;

  if(_token){
    props.tokenChange(_token)
  }
  
  return (
    <Navbar className="color-nav" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Spotify Chart Map
      </Navbar.Brand>
      {!_token && (
            <a
              className="btn btn--loginApp-link ml-auto"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
    </Navbar>
  );
}
