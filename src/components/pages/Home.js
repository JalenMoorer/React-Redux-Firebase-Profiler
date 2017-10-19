import React from 'react';

import Header from '../common/Header';
import LoginForm from '../common/LoginForm';

import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';

const Home = () => (
  <body style={{
    background: "url('http://bossfight.co/wp-content/uploads/2017/08/bossfight-free-high-stock-photos-glasses-iphone-computer-mouse-apple-brand-logo.jpg') center center fixed",
    backgroundSize: 'cover',
    height:'100vh'
  }}>
    <Grid >

      <Jumbotron bsClass={''} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh'
      }}>
        <Row >
          <Col lg={8} md={8}>
            <h1>
              <strong>Lorem ipsum dolor sit amet.</strong>
            </h1>
            <h3>
              Lorem ipsum dolor sit amet, sea facete mediocritatem et. Sed nostro hendrerit et, nec ut brute lorem. Porro petentium voluptatum pri in, te postea electram.
            </h3>
          </Col>
          <Col lg={4} md={4}>
            <LoginForm/>
          </Col>
        </Row>

      </Jumbotron>

    </Grid>
  </body>

)

export default Home;
