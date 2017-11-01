import React from 'react';

import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  Grid,
  Row,
  Well
} from 'react-bootstrap'

const SearchForm = () => {
  return (
    <Grid  fluid>
      <Well>
        <Row>
          <Form inline>
            <Col lg={5}>
              <FormGroup style={{width: "100%"}} controlId="formInlineName">
                <FormControl style={{ width: "100%"}} type="text" placeholder="Job,Position,Title"/>
              </FormGroup>
            </Col>
            {' '}
            <Col lg={5}>
              <FormGroup style={{width: "100%"}} controlId="formInlineEmail">
                <FormControl style={{width: "100%"}} type="email" placeholder="City/State/Zip"/>
              </FormGroup>
            </Col>
            {' '}
            <Col lg={2}>
              <Button bsStyle="primary" type="Submit">
                SEARCH
              </Button>
            </Col>
          </Form>
        </Row>
      </Well>
    </Grid>
  );
}

export default SearchForm;
