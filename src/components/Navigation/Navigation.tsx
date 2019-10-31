import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import IProps from 'interfaces/props/navigation';

const Navigation: FC<IProps> = ({ routes }) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Brand>
        <Link to="/">Scratch</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ml-auto">
          {routes.reduce((links: JSX.Element[], route) => {
            if (route.hidden) return links;

            links.push(
              <LinkContainer to={route.path} key={route.path} exact>
                <Nav.Link>{route.name}</Nav.Link>
              </LinkContainer>
            );

            return links;
          }, [])}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
