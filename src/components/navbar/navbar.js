import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button, Container, Modal, Nav, Navbar} from 'react-bootstrap';
import logo from "../../assets/navicon/feastify-logo.png";

export default function Navigation() {
    const navigate = useNavigate()
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
            <Navbar expand="lg" className="bg-white shadow-sm">
                <Container>
                    <Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0">
                        <img
                            src={logo}
                            width={88}
                            height={55}
                            alt="Feastify"
                            style={{objectFit: "cover"}}
                        />
                        <p className="text-dark fs-5 fw-bold m-0"> The Feastify</p>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav border-0"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center">
                            <Link to="/chef-hire" className="nav-link text-dark fw-semibold me-3">Hire A Private
                                Chef</Link>
                            <Link to="/bookings" className="nav-link text-dark fw-semibold me-3">Group
                                Experiences</Link>
                            <Link to="/contact-us" className="nav-link text-dark fw-semibold me-3">Contact Us</Link>
                        </Nav>

                        <Nav className="align-items-center">
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
                                    className="btn-warning text-white fw-semibold px-4 py-2 mx-auto"
                                    onClick={handleShow}
                                >
                                    Login / Signup
                                </Button>
                            )}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={()=> setShowModal(false)} centered className="border-0">
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Choose Your Role</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <p className="fs-6" style={{font:'Nunito'}}>Please select your preferred role to proceed:</p>
                    <div className="d-flex flex-column">
                        <Link
                            to="/chef-login"
                            className="btn btn-primary mb-1"
                            onClick={() => handleSelection("/chef-login")}>
                            Chef
                        </Link>
                        <Link
                            to="/login"
                            className="btn btn-primary mb-1"
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
