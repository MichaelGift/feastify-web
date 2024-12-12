import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import logo from "../../assets/navicon/feastify.png";
import LandingPage from "../../pages/landingpage/landingpage";

export default function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="bg-white shadow-sm py-3">
                <Container>
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img
                            src={logo}
                            width={88}
                            height={55}
                            alt="Feastify"
                            style={{objectFit: "cover"}}
                        />
                        <p className="text-dark fs-5 fw-bold"> The Feastify</p>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/" className="nav-link text-dark fw-semibold me-3">Home</Link>
                            <Link to="/chef-hire" className="nav-link text-dark fw-semibold me-3">Hire A Private
                                Chef</Link>
                            <Link to="/bookings" className="nav-link text-dark fw-semibold me-3">Group
                                Experiences</Link>
                            <Link to="/contact-us" className="nav-link text-dark fw-semibold me-3">Contact Us</Link>
                        </Nav>

                        <Link to="/chef-register">
                            <Button className="btn-warning text-white fw-semibold px-4 py-2">
                                Chefs Register
                            </Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LandingPage/>
        </>
    );
}
