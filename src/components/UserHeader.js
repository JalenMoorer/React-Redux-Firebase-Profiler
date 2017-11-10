import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

import Header from './common/Header';

class UserHeader extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: ''
    }

    this.onUserLogout = this.onUserLogout.bind(this);
  }

  onUserLogout(e){
    this.props.logoutUser();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user)
      this.setState({user: this.props.user.displayName})
    else {
        this.setState({user: ''});
    }
  }

  render(){
    return(
      <Header
        username={this.state.user}
        logout={this.onUserLogout}/>
    );
  }
}



const mapStateToProps = ({ auth }) => {
  const { user } = auth;

  return { user };
}

export default connect(mapStateToProps, {logoutUser})(UserHeader);
