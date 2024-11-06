import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import logo from "../../assets/navicon/feastify.png"

export default function Navigation() {
  return (
    <Navbar >
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            width={85}
            height={50}
            alt="feastify"
            className="d-inline-block align-middle"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />     
      </Container>
    </Navbar>
  );
}
