import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Navbar, Nav, Container, Button, Modal} from 'react-bootstrap';
import logo from "../../assets/navicon/feastify.png";
import LandingPage from "../../pages/landingpage/landingpage";

export default function Navigation() {
    const navigate =  useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("Token");
    setIsLoggedIn(!!token);
  }, []);

  const handleShow = () => setShowModal(true);

  const handleSelection = (path) => {
    setShowModal(false);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
    alert("You have been logged out.");
  };

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

            {isLoggedIn ? (
              <>
                <Link
                  to="/chef-profile"
                  className="btn btn-primary text-white fw-semibold px-4 py-2 me-3"
                >
                  Profile
                </Link>
                <Button
                  className="btn-danger text-white fw-semibold px-4 py-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                className="btn-warning text-white fw-semibold px-4 py-2"
                onClick={handleShow}
              >
                Login / Signup
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
            <LandingPage/>

      <Modal show={showModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Choose Your Role</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Please select your preferred role to proceed:</p>
          <div className="d-flex justify-content-around">
            <Link
              to="/chef-login"
              className="btn btn-primary"
              onClick={() => handleSelection("/chef-login")}
            >
              Chef
            </Link>
            <Link
              to="/login"
              className="btn btn-primary"
              onClick={() => handleSelection("/login")}
            >
              Client
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
