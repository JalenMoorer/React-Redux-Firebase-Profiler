import React, {Component} from 'react';

import Header from '../common/Header';
import Login from '../Login';
import SignUp from '../SignUp';

import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signUp: false
    }
  }

  render() {
    return (
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
                  Lorem ipsum dolor sit amet, et ius nominati intellegat dissentias, erat sale tractatos has ad, cu solum probatus cum. Mei dolores phaedrum in, in omnis detraxit pri, te elitr mollis disputando sed ..
                </h3>
              </Col>
              <Col lg={4} md={4}>
                {this.state.signUp
                  ? <SignUp/>
                  : <Login/>}
                <p style={{
                  paddingTop: '20px'
                }} className="text-center">
                  <a href="#" onClick={() => this.setState({
                    signUp: !this.state.signUp
                  })}>
                    Lorem ipsum dolor
                  </a>
                </p>
              </Col>
            </Row>

          </div>

        </Grid>
      </body>

    );
  }
}

export default Home;
