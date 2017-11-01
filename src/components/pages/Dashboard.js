import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../common/Header';
import Navigation from '../common/Navigation';

import Search from '../Search';

import { Well } from 'react-bootstrap'

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <Header/>
        <Grid style={{height: "100%"}} fluid>
          <Row style={{height: "100%"}}>
            <Col style={{background: "#f9f9f9", padding: "17px", height: "100%"}} lg={2} md={2}>
              <Navigation />
            </Col>
            <Col style={{ padding: "17px"}} lg={10} md={10}>
              <Search />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
