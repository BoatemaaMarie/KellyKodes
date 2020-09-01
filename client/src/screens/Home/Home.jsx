import React, { useState } from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'


export default function Home() {


  return (
    <>
      <div className="home-body">
        <div className="contact-info">
          <br></br>
          <h1 className="contact-name">KELLY APPIAH </h1>
          <p className="contact">Full-Stack Software Engineer</p>
          <p className="contact">Phone: 347-335-9069</p>
          <p className="contact-city">City: New York City</p>
        </div>

        <div className="contain">

          <div className="button-container">
            <a
              style={{ textDecoration: 'none' }}
              className="button-aesthetic" href="#about-me">
              <Button className="links" variant="outline-light" block>ABOUT ME</Button>
            </a>

            <a
              style={{ textDecoration: 'none' }}
              className="button-aesthetic" href="#skills">
              <Button className="links" variant="outline-light" block>SKILLS</Button>
            </a>

            <a
              style={{ textDecoration: 'none' }}
              className="button-aesthetic" href="#projects">
              <Button className="links" variant="outline-light" block>PROJECTS</Button>
            </a>

            <a
              style={{ textDecoration: 'none' }}
              className="button-aesthetic" href="#resume">
              <Button className="links" variant="outline-light" block>RESUME</Button>
            </a>

          </div>

        </div>
      </div>
    </>
  )
} 
