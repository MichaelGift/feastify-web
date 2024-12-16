import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import "./footer.css";

const MultiColumnFooter = () => {
  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col md={4} sm={6} xs={12} className="text-md-start text-center">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/aboutus">About</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12} className="text-md-start text-center">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li className='privacy-footer'><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={12} xs={12} className="text-md-start text-center">
            <h5>Connect with Us</h5>
            <div className="social">
              <a href="#" className='m-3'><InstagramIcon /></a>
              <a href="#" className='m-3'><XIcon /></a>
            </div>
            <p className='footer-email mb-3'>Email: <a href="mailto:info@theFeasitfy.com" className='footer-email'>info@theFeasitfy.com</a></p>
            <p style={{ color: 'white'}}>Phone: (123) 456-7890</p>
          </Col>
        </Row>       
        <Row className="mt-3">
          <Col className="text-center" style={{ color: 'white'}}>
            <p>theFeasitfy © 2024. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MultiColumnFooter;
