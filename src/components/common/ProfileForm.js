import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  Button,
  ControlLabel,
  FormControl,
  HelpBlock,
  Row,
  Col,
  Form,
  Checkbox,
  PageHeader
} from 'react-bootstrap';

const ProfileForm = (props) => (

  <div>
    <PageHeader>Update Profile {' '}
      <small>Update your profile to be used for job applications</small>
    </PageHeader>
    <Form onSubmit={props.onHandleSubmit} horizontal>
      <FormGroup bsSize="large" controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          First Name
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="firstName" type="text" placeholder="First Name" value={props.firstName}/>
        </Col>
      </FormGroup>
      <FormGroup bsSize="large" controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Last Name
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="lastName" type="text" placeholder="Last Name" value={props.lastName}/>
        </Col>
      </FormGroup>

      <FormGroup bsSize="large" controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="email" type="text" placeholder="Email" value={props.email} readOnly/>
        </Col>
      </FormGroup>

      <FormGroup bsSize="large" controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          City
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="city" type="text" placeholder="City" value={props.city}/>
        </Col>
      </FormGroup>

      <FormGroup bsSize="large" controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          State/Province
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="stateProvince" type="text" placeholder="State/Province" value={props.stateProvince}/>
        </Col>
      </FormGroup>

      <FormGroup bsSize="large" controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Zip/Postal Code
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="zipPostalCode" type="text" placeholder="Zip/Postal Code" value={props.zipPostalCode}/>
        </Col>
      </FormGroup>

      <FormGroup bsSize="large" controlId="formControlsTextarea">
        <Col componentClass={ControlLabel} sm={2}>
          List your top skills
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="topSkills" componentClass="textarea" placeholder="List your top skills" value={props.topSkills}/>
        </Col>
      </FormGroup>

      <FormGroup bsSize="large" controlId="formControlsTextarea">
        <Col componentClass={ControlLabel} sm={2}>
          Describe Yourself
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.onHandleChange} name="describeYourself" componentClass="textarea" placeholder="Describe yourself" value={props.describeYourself}/>
        </Col>
      </FormGroup>

      <FormGroup bsSize="large" controlId="formControlsTextarea">
        <Col componentClass={ControlLabel} sm={2}>
          Resume
        </Col>
        <Col sm={10}>
          {props.resume ?
              <Button bsStyle="link" target="_blank" bsSize="large" href={props.resume}>Click here to view resume</Button>
            :
            <FormControl onChange={props.onHandleChange} name="resume" type="file" accept='application/msword,application/pdf' style={{
              fontSize: "large"
            }} placeholder="Upload file"/>
          }
        </Col>
      </FormGroup>

      <FormGroup bsSize="large">
        <Col style={{
          textAlign: "center"
        }} smOffset={3} sm={6}>
          <Button bsStyle="success" bsSize="large" type="submit">
            Update Profile
          </Button>
        </Col>
      </FormGroup>


    </Form>
  </div>
);

// ProfileForm.propTypes = {
//   email: PropTypes.string,
//   password: PropTypes.string,
//   formUpdate: PropTypes.func,
//   formSubmit: PropTypes.func
// };

export default ProfileForm;
