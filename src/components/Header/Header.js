import React, { useState } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
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
    </Navbar>
  );
}
