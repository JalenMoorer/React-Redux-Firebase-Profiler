import React from 'react';

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

const PostForm = (props) => {

  return (
    <div>
      <PageHeader>Submit a new position  {' '}
        <small>Submit a position that users here can apply for</small>
      </PageHeader>
      <Form onSubmit={props.onHandleSubmit}  horizontal>
        <FormGroup bsSize="large" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Position Name
          </Col>
          <Col sm={10}>
            <FormControl
              onChange={props.onHandleChange}
              value={props.positionName}
              name="positionName"
              type="text"
              placeholder="Position Name"

            />
          </Col>
        </FormGroup>
        <FormGroup bsSize="large" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Company Name
          </Col>
          <Col sm={10}>
            <FormControl
              onChange={props.onHandleChange}
              value={props.companyName}
              name="companyName"
              type="text"
              placeholder="Company Name"

            />
          </Col>
        </FormGroup>

        <FormGroup bsSize="large" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Describe Position
          </Col>
          <Col sm={10}>
            <FormControl
              onChange={props.onHandleChange}
              value={props.describePosition}
              name="describePosition"
              type="text"
              placeholder="Describe Position"
              componentClass="textarea"

            />
          </Col>
        </FormGroup>

        <FormGroup bsSize="large" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Skills
          </Col>
          <Col sm={10}>
            <FormControl
              name="skills"
              onChange={props.onHandleChange}
              value={props.skills}
              componentClass="textarea"
              placeholder="Skills"

            />
          </Col>
        </FormGroup>

        <FormGroup bsSize="large" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Salary Compensation
          </Col>
          <Col sm={10}>
            <FormControl
              name="salaryComp"
              onChange={props.onHandleChange}
              value={props.salaryComp}
              placeholder="Salary Compensation"

            />
          </Col>
        </FormGroup>

        <FormGroup bsSize="large" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Benefits
          </Col>
          <Col sm={10}>
            <FormControl
              onChange={props.onHandleChange}
              value={props.benefits}
              name="benefits"
              componentClass="textarea"
              placeholder="Benefits"

            />
          </Col>
        </FormGroup>




        <FormGroup bsSize="large">
          <Col style={{
            textAlign: "center"
          }} smOffset={3} sm={6}>
            <Button bsStyle="success" bsSize="large" type="submit">
             Submit Job
            </Button>
          </Col>
        </FormGroup>


      </Form>
    </div>
  )
}

export default PostForm;
