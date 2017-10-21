import React, {Component} from 'react';

import LoginForm from './common/LoginForm';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
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

    console.log('Form Submitted');
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

export default Login;
