import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import LoginForm from './common/LoginForm';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      //change state to redux
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
    const { email, password } = this.state;

    this.props.loginUser({ email, password});

  }


  render(){
    return (
      <LoginForm
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

export default connect(mapStateToProps, {loginUser})(Login);
