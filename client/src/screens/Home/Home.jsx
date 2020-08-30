import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Resume from '../Resume/Resume'


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

          <div className="button-container">
            <Button onClick={handleClick} className="links" variant="outline-light" block>ABOUT ME</Button>
            <button className="links"> <a href="/aboutme" >  ABOUT ME</a> </button>
            <Button className="links" variant="outline-light" block>SKILLS</Button>
            <Button className="links" variant="outline-light" block>PROJECTS</Button>
            <button className="links"> <a href="/projects" >PROJECTS</a> </button>
            <Button className="links" variant="outline-light" block>  <a target="_blank" href="www.google.com"> resume</a> </Button>
            <a href="#resume">  <Button className="links" variant="outline-light" block>  RESUME  </Button> </a>

          </div>

        </div>
      </div>
    </>
  )
} 
