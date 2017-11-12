import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';

import ProfileForm from './common/ProfileForm';

class UpdateProfile extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      stateProvince: '',
      zipPostalCode: '',
      topSkills: '',
      describeYourself: '',
      resume: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      city,
      stateProvince,
      zipPostalCode,
      topSkills,
      describeYourself,
      resume
    } = this.state;

    this.props.updateProfile({firstName,
          lastName,
          email,
          city,
          stateProvince,
          zipPostalCode,
          topSkills,
          describeYourself,
          resume});
  }

  render(){
    return(
      <ProfileForm
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        city={this.state.city}
        stateProvince={this.state.stateProvince}
        zipPostalCode={this.state.zipPostalCode}
        topSkills={this.state.topSkills}
        describeYourself={this.state.describeYourself}
        resume={this.state.resume}
        onHandleChange={this.handleChange}
        onHandleSubmit={this.handleSubmit}
      />
    );
  }
}


export default connect(null, {updateProfile})(UpdateProfile);
