import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import './css/Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="white" variant="light" fixed="top">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/product">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/service">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/careers">
            Careers
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
