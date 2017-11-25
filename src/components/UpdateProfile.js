import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile, getProfileInfo } from '../actions';

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
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getProfileInfo();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstName: nextProps.profileData.firstName,
      lastName: nextProps.profileData.lastName,
      email: nextProps.profileData.email,
      city: nextProps.profileData.city,
      stateProvince: nextProps.profileData.stateProvince,
      zipPostalCode: nextProps.profileData.zipPostalCode,
      topSkills: nextProps.profileData.topSkills,
      describeYourself: nextProps.profileData.describeYourself,
    });
  }

  handleChange(e) {
    if(e.target.name == 'resume') {
      this.setState({[e.target.name]: e.target.files[0]});
    }
    else{
      this.setState({[e.target.name]: e.target.value});
    }
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

const mapStateToProps = ({profile}) => {
  const {profileData} = profile;

  console.log({profileData});

  return {profileData};
}

export default connect(mapStateToProps, {updateProfile, getProfileInfo })(UpdateProfile);
