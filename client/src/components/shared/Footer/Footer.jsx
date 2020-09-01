import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import './Footer.css'


export default function Footer() {
  return (
    <div>

      <div>

        <div className="form-div">
          <div className="footer-title">
            <h3>Let's Get in Touch</h3>
          </div>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="First and Last Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Name of Company"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">Company</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <label htmlFor="basic-url"></label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">
                Email
      </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>


          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Leave a Message</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
          <div className='form-button'>
          <Button variant="outline-light" size="lg" block>
            Submit
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
