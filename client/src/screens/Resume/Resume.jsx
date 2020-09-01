import React from 'react'
import { Button } from 'react-bootstrap'
import './Resume.css'

export default function Resume() {
  return (
    <>
      <div className="resume-container">
        <div className="resume">
          <h3 className="resume-name" id="resume">RESUME</h3>

          <br></br>

          <p className="resume-para">View my resume and get to know a little about me.</p>

          <div className="resume-buttons">

            <a
              target="_blank"
              href="https://drive.google.com/file/d/18bDiTKa5LvUwyu_ILaXt6gonQKZZyH0h/view?usp=sharing"
              style={{textDecoration:'none'}}>
              <Button className="resume-buttons" variant="outline-dark" size="lg" block>VIEW</Button>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}
