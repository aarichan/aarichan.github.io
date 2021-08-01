import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Aaric Han</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/#">
            Home
          </Nav.Link>
          <Nav.Link href="/#/about">
            About
          </Nav.Link>
          <Nav.Link href="/#/experience">
            Experience
          </Nav.Link>
          <Nav.Link href="/#/blog">
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;