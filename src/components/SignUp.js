import React, {Component} from 'react';
import { createUser } from '../actions';
import { connect } from 'react-redux';
import SignUpForm from './common/SignUpForm';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;

    this.props.createUser({ name, email, password});
  }

  render(){
    return (
      <SignUpForm
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        formUpdate={this.handleChange}
        formSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { user, loading, error } = auth;
  return { user, loading, error };
}

export default connect(mapStateToProps, {createUser})(SignUp);
