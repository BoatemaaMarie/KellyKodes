import React from 'react'
import { Button } from 'react-bootstrap'
import './Resume.css'

export default function Resume() {
  return (
    <>
      <div className="resume-container">

        <div className="resume">

          <h4 className="resume-name">RESUME</h4>

          {/* <div className="line"></div> */}
          <br></br>

          <p className="resume-para">View my resume and get to know a little about me.</p>
          
          <div className="resume-buttons">
      
            <Button className="resume-buttons" variant="outline-light" block>VIEW</Button>
          </div>
        </div>
      </div>
    </>
  )
}
