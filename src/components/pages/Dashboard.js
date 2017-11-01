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
            <Col style={{height: "100%"}} lg={4} md={4}>
              <Navigation />
            </Col>
            <Col lg={8} md={8}>
              <Search />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
