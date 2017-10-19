import React from 'react';

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

const LoginForm = () => (
  <div>
  <h3>Lorem ipsum dolor sit amet, cum.</h3>
    <form>
      <FieldGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      />
      <FieldGroup
        id="formControlsPassword"
        label="Password"
        type="password"
        placeholder="Enter password"
      />

    <Button bsStyle="info" bsSize="large" block>Large button
        Submit
      </Button>
    </form>
  </div>
);

export default LoginForm;
