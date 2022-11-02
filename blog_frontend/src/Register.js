import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Register = () => {
  return (
    <div>
        <br />
          <Form.Select aria-label="Default select example">
              <option>TITLE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </Form.Select>

          <br />
          <br />

          <InputGroup className="mb-3">
              <InputGroup.Text>First and last name</InputGroup.Text>
              <Form.Control aria-label="First name" />
              <Form.Control aria-label="Last name" />
          </InputGroup>

          <>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
              >
                  <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
          </>
    </div>
  )
}

export default Register