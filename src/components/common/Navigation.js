import React from 'react';

import {Nav, NavItem} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav bsStyle="pills" stacked>
      <NavItem eventKey={1} href="/home">Lorem ipsum</NavItem>
      <NavItem eventKey={2} title="Item">Lorem ipsum</NavItem>
      <NavItem eventKey={3} >Lorem ipsum</NavItem>
      <NavItem eventKey={4}>Lorem ipsum</NavItem>
    </Nav>
  );
}

export default Navigation;
