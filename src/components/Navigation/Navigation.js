import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = ({ routes }) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Brand>
        <Link to="/">Scratch</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ml-auto">
          {routes.map(route => (
            <LinkContainer to={route.path} key={route.name} exact>
              <Nav.Link>{route.name}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
