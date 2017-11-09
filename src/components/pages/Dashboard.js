import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from 'firebase';
import history from '../routes/History';

import Header from '../common/Header';
import Navigation from '../common/Navigation';
import Search from '../Search';

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

 componentWillMount(){

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

export default connect(null, null)(Dashboard);
