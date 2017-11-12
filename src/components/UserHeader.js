import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../actions';

import Header from './common/Header';

class UserHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: ''
    }
    this.onUserLogout = this.onUserLogout.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    if(e) {
      console.log(this.state.expanded);
      this.setState({expanded: 'none' });
    }
    else {
      console.log(this.state.expanded);
      this.setState({expanded: 'block' });
    }
  }

  onUserLogout(e) {
    this.props.logoutUser();
  }

  render() {
    if (this.props.user) {
      return (<Header username={this.props.user.displayName} logout={this.onUserLogout} didToggle={this.onToggle} isExpanded={this.state.expanded} />);
    } else {
      return (<Header username="" logout={this.onUserLogout} didToggle={this.onToggle}  isExpanded={this.state.expanded} />);
    }
  }
}

const mapStateToProps = ({auth}) => {
  const {user} = auth;

  return {user};
}

export default connect(mapStateToProps, {logoutUser})(UserHeader);
