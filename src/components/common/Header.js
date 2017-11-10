import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => (

  <Navbar fluid  style={{marginBottom: '0px'}}  >
    <Navbar.Header>
      <Navbar.Brand>
        <a onClick={props.onUserLogout}>Lorem Ipsum</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav >
      <NavItem eventKey={1}>Current Page</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1}>{props.username}</NavItem>
      <NavItem onClick={props.logout} href="#">Logout</NavItem>
    </Nav>
  </Navbar>
)

Header.propTypes = {
 logout: PropTypes.func,
 username: PropTypes.string
};

export default Header;
