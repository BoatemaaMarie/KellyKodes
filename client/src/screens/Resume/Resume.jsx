import React from 'react'
import { Button } from 'react-bootstrap'
import './Resume.css'

export default function Resume() {
  return (
    <>
      <div className="resume-container">

        <div className="resume">

          <h4 className="resume-name" id="resume">RESUME</h4>

          {/* <div className="line"></div> */}
          <br></br>

          <p className="resume-para">View my resume and get to know a little about me.</p>
          
          <div className="resume-buttons">
      
            <a target="_blank" href="https://drive.google.com/file/d/18bDiTKa5LvUwyu_ILaXt6gonQKZZyH0h/view?usp=sharing"> < Button className="resume-buttons" variant="outline-light" block>VIEW</Button> </a>
          </div>
        </div>
      </div>
    </>
  )
}
