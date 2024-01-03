import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Link class="navbar-brand" href="/">iNotebook</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          <Link class="nav-link active" aria-current="page" to="/About">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;