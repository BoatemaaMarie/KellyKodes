import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import './Footer.css'


export default function Footer() {
  return (
    <div >

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
        <div className="footer-icons">
          <div className="footer-icon-div" > <a target="_blank" href="https://linkedin.com/KellyAppiah">  <img className="each-footer-icon" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" /> </a> </div>
          <div className="footer-icon-div" > <a target="_blank" href="https://twitter.com/KellyKodes">  <img className="each-footer-icon" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-12-512.png" /> </a> </div>
          <div className="footer-icon-div" > <a target="_blank" href="https://github.com/KellyAppiah"> <img className="each-footer-icon" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png" /> </a> </div>
          <div className="footer-icon-div" > <a target="_blank" href="KellyKodes@gmail.com"> <img className="each-footer-icon" src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/mail-256.png" /> </a> </div>

        </div>
<p>Kelly Appiah Designs</p>

      </div>
    </div>
  )
}
