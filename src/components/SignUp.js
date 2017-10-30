import React, {Component} from 'react';

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

    console.log('Form Submitted');
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

export default SignUp;
