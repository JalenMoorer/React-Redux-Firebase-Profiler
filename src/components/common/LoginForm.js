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


const LoginForm = (props) => (
  <div>
  <h3 style={{marginBottom: '20px'}}>Lorem ipsum dolor sit amet, cum.</h3>
    <form onSubmit={props.formSubmit}>
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
      Sign in
      </Button>
    </form>

    <p style={{paddingTop: '20px'}} className="text-center">Lorem ipsum <a href="#">dolor</a> sit amet, cum. </p>
  </div>
);

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  formUpdate: PropTypes.func,
  formSubmit: PropTypes.func
};

export default LoginForm;
