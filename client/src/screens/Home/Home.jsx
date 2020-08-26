import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { Phone } from 'react-bootstrap-icons'

export default function Home() {
  return (
    <>
      <div className="home-body">
        <div className="contact-info">
          <div className="line"></div>
          <br></br>
          <h1 className="contact-name">KELLY APPIAH </h1>
          <p className="contact">Full-Stack Software Engineer</p>
          <p className="contact">Phone: 347-335-9069</p>
          <p className="contact-city">City: New York</p>
        </div>

        <div className="contain">

          <div className="button-container">
            <Button className="links" variant="outline-light" block>ABOUT ME</Button>
            <Button className="links" variant="outline-light" block>SKILLS</Button>
            <Button className="links" variant="outline-light" block>PROJECTS</Button>
            <Button className="links" variant="outline-light" block>RESUME</Button>
          </div>

        </div>
      </div>
    </>
  )
} 
