import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Container, Modal, Nav, Navbar} from 'react-bootstrap';
import logo from "../../assets/navicon/feastify-logo.png";

const chefRegister = "https://docs.google.com/forms/d/e/1FAIpQLSc7dq4kQOYNrF9QIdwiV_Hi0_OEBYUenxwxUMJUvcEJXdTGcg/viewform?usp=dialog"
const eventData = "https://docs.google.com/forms/d/e/1FAIpQLScd4TSKuvPKH8dXynOnOT3JTJDDyxd0Ghsy7451PMyqSLCmmw/viewform"
const themeExperience = "https://docs.google.com/forms/d/e/1FAIpQLSdS6-fzfUke4eeyAr1hlaVo3HtgAeQLInbUvQK9uYGfz6DqXg/viewform"

export default function Navigation() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("Token");
        setIsLoggedIn(!!token);
    }, [sessionStorage.getItem("Token")]);

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
            <Navbar expand="lg" className="bg-black shadow-sm" style={{height: '6.125rem'}}>
                <Container>
                    <Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0">
                        <img
                            src={logo}
                            width={88}
                            height={55}
                            alt="Feastify"
                            style={{objectFit: "cover"}}
                        />
                        <p className="text-white fs-5 fw-bold m-0"> The Feastify</p>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav border-0"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center">
                            <Link to={"/"} className="nav-link text-white fw-semibold me-3">Home</Link>
                            <Link to={"/about-us"} className="nav-link text-white fw-semibold me-3">About Us</Link>
                            <Link to={eventData} className="nav-link text-white fw-semibold me-3">Hire A Private
                                Chef</Link>
                            <Link to={themeExperience} className="nav-link text-white fw-semibold me-3">Themed
                                Experiences</Link>
                        </Nav>

                        <Nav className="align-items-center">
                            <Link className="bg-light text-black btn fw-semibold px-4 py-2 mx-auto rounded-5"
                                  to={chefRegister}>
                                Chefs Register
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered className="border-0">
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Choose Your Role</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <p className="fs-6" style={{font: 'Nunito'}}>Please select your preferred role to proceed:</p>
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
