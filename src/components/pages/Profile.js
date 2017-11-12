import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import firebase from 'firebase';
import history from '../routes/History';

import UserHeader from '../UserHeader';
import Navigation from '../common/Navigation';
import UpdateProfile from '../UpdateProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

 componentWillMount(){
   if(!this.props.user)
    history.push('/');
 }

 componentDidUpdate(){
   if(!this.props.user)
    history.push('/');
 }



  render() {
    return (
      <div style={{height: "100%"}}>
        <UserHeader />
        <Grid style={{height: "100%"}} fluid>
          <Row style={{height: "100%"}}>
            <Col style={{
              background: "#f9f9f9",
              paddingTop: "17px",
              position: "fixed",
              top: "51px",
              bottom: 0,
              left: 0,
              zIndex: 1000,
              display: "block",
              padding: "20px",
              overflowX: "hidden",
              overflowY: "auto",
              borderRight: "1px solid #eee"
            }}
            lg={2} md={2} sm={3}>
              <Navigation />
            </Col>
            <Col style={{ paddingTop: "48px", paddingLeft: "48px"}} lg={6} lgOffset={2} md={6} mdOffset={2} smOffset={3} >
              <UpdateProfile />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth;

  return { user };
}


export default connect(mapStateToProps, null)(Profile);
