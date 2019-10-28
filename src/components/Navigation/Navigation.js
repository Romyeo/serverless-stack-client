import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect fluid>
      <Navbar.Brand>
        <Link to="/">Scratch</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <LinkContainer to="/signup" exact>
            <Nav.Link>Sign up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login" exact>
            <Nav.Link>Sign in</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
