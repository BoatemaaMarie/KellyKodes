import React, { useState } from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Resume from '../Resume/Resume'
import AboutMe from '../AboutMe/AboutMe'


export default function Home() {
  function handleClick(e) {
    e.preventDefault()
    console.log('go home roger')
  }

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
          {/* <a href="#aboutme">ABOUT ME</a> */}
          <div className="button-container">
            <a href="#about-me" >  <Button className="links" variant="outline-light" block>ABOUT ME</Button></a>
            <a href="#skills" >   <Button className="links" variant="outline-light" block>SKILLS</Button> </a>
            <a href="#projects" > <Button className="links" variant="outline-light" block>PROJECTS</Button></a>
            <a href="#resume" >    <Button className="links" variant="outline-light" block>  RESUME  </Button></a>
          </div>

        </div>
      </div>
    </>
  )
} 
