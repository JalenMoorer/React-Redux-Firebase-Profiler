import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../actions';

import Header from './common/Header';

class UserHeader extends Component {
  constructor(props) {
    super(props);

    this.onUserLogout = this.onUserLogout.bind(this);
  }

  onUserLogout(e) {
    this.props.logoutUser();
  }

  render() {
    if (this.props.user) {
      return (<Header username={this.props.user.displayName} logout={this.onUserLogout}/>);
    } else {
      return (<Header username="" logout={this.onUserLogout}/>);
    }
  }
}

const mapStateToProps = ({auth}) => {
  const {user} = auth;

  return {user};
}

export default connect(mapStateToProps, {logoutUser})(UserHeader);
