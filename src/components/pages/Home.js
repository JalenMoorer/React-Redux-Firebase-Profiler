import React from 'react';

import Header from '../common/Header';
import Login from '../Login';

import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';

const Home = () => (
  <body style={{
    background: "url('http://bossfight.co/wp-content/uploads/2017/08/bossfight-free-high-stock-photos-glasses-iphone-computer-mouse-apple-brand-logo.jpg') center center fixed",
    backgroundSize: 'cover',
    height: '100vh'
  }}>
    <Header/>
    <Grid >

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '65vh'
      }}>
        <Row >
          <Col lg={8} md={8}>
            <h1>
              <strong>Lorem ipsum dolor sit amet.</strong>
            </h1>
            <h3>
              Lorem ipsum dolor sit amet, et ius nominati intellegat dissentias, erat sale tractatos has ad, cu solum probatus cum. Mei dolores phaedrum in, in omnis detraxit pri, te elitr mollis disputando sed..
            </h3>
          </Col>
          <Col lg={4} md={4}>
            <Login />
          </Col>
        </Row>

      </div>

    </Grid>
  </body>

)

export default Home;
