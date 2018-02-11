import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = (props) => (

  <Navbar
      inverse
      fluid
      collapseOnSelect
      fixedTop
      onToggle={props.didToggle}
    >
    <Navbar.Header>
      <Navbar.Brand>
        <a>Lorem Ipsum</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav style={{display: props.isExpanded}}>
        <NavItem eventKey={1}>Current Page</NavItem>
            <NavItem eventKey={2} href="/home">Lorem ipsum</NavItem>
            <NavItem eventKey={3} title="Item">Lorem ipsum</NavItem>
            <NavItem eventKey={4} >Lorem ipsum</NavItem>
            <NavItem eventKey={5}>Lorem ipsum</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}>{props.username}</NavItem>
        <NavItem onClick={props.logout} href="#">Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  logout: PropTypes.func,
  username: PropTypes.string,
  didToggle: PropTypes.func,
  isExpanded: PropTypes.string
};

export default Header;
