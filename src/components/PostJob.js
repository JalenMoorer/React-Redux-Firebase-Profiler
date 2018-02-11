import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile, getProfileInfo } from '../actions';

import PostForm from './common/PostForm';

class PostJob extends Component {
  constructor(props){
    super(props)

    this.state = {
      positionName: '',
      companyName: '',
      describePosition: '',
      skills: '',
      salaryComp: '',
      benefits: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount() {
  //   this.props.getProfileInfo();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.profileData) {
  //     this.setState({
  //       firstName: nextProps.profileData.firstName,
  //       lastName: nextProps.profileData.lastName,
  //       email: nextProps.profileData.email,
  //       city: nextProps.profileData.city,
  //       stateProvince: nextProps.profileData.stateProvince,
  //       zipPostalCode: nextProps.profileData.zipPostalCode,
  //       topSkills: nextProps.profileData.topSkills,
  //       describeYourself: nextProps.profileData.describeYourself,
  //     });
  //   }
  //   if(nextProps.resumeURL) {
  //     console.log(nextProps.resumeURL);
  //     this.setState({resume: nextProps.resumeURL})
  //   }
  // }

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
      positionName,
      companyName,
      describePosition,
      skills,
      salaryComp,
      benefits
    } = this.state;

    // this.props.updateProfile({firstName,
    //   lastName,
    //   email,
    //   city,
    //   stateProvince,
    //   zipPostalCode,
    //   topSkills,
    //   describeYourself,
    //   resume});
  }

  render(){
    return(
      <PostForm
        positionName={this.state.firstName}
        companyName={this.state.lastName}
        describePosition={this.state.email}
        skills={this.state.city}
        salaryComp={this.state.stateProvince}
        benefits={this.state.topSkills}
        onHandleChange={this.handleChange}
        onHandleSubmit={this.handleSubmit}
      />
    );
  }
}

// const mapStateToProps = () => {
//   // const {profileData, resumeURL } = profile;
//   //
//   //
//   // return {profileData, resumeURL };
// }

export default connect(null, {updateProfile, getProfileInfo })(PostJob);
