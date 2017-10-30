import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, Button, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


const SignUpForm = (props) => (
  <div>
  <h3 style={{marginBottom: '20px'}}>Lorem ipsum dolor sit amet, cum.</h3>
    <form onSubmit={props.formSubmit}>
      <FieldGroup
        id="formControlsEmail"
        type="name"
        name="name"
        label="Name"
        placeholder="Enter username"
        onChange={props.formUpdate}
      />
      <FieldGroup
        id="formControlsEmail"
        type="email"
        name="email"
        label="Email address"
        placeholder="Enter email"
        onChange={props.formUpdate}
      />
      <FieldGroup
        id="formControlsPassword"
        label="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={props.formUpdate}
      />

    <Button
      type="submit"
      bsStyle="info"
      bsSize="large"
      block
      >
      SIgn Up
      </Button>
    </form>
  </div>
);

SignUpForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  formUpdate: PropTypes.func,
  formSubmit: PropTypes.func
};

export default SignUpForm;
