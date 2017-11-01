import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (

  <Navbar fluid  style={{marginBottom: '0px'}}  >
    <Navbar.Header>
      <Navbar.Brand>
        <a>Lorem Ipsum</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav >
      <NavItem eventKey={1}>Current Page</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1}>Username</NavItem>
      <NavItem eventKey={2} href="#">Logout</NavItem>
    </Nav>
  </Navbar>
)

export default Header;
