import React from 'react'
import { Button } from 'react-bootstrap'
import './MyProjects.css'


export default function MyProjects() {
  return (
    <>
      <h4 className="projects-title" id="projects">PROJECTS</h4>


      <div className="all-projects">
       
        <div className="project-container">
          
          <div className="project-image">
            <img className="all-images" src="http://res.cloudinary.com/dc6ncx5wp/image/upload/c_scale,w_933/v1598466992/Subbusterscreenshot_yqsjow.png" />
            <img className="all-images" src="http://res.cloudinary.com/dc6ncx5wp/image/upload/c_scale,w_885/v1598468222/Screen_Shot_2020-08-26_at_2.55.57_PM_in5wiv.png" />

          </div>

          <div className="all-projects-info">
            <h4>SubBusters</h4>
            <br></br>
            <div className="line"></div>
            <br></br>
            <p>SubBusters is an interactive Web Application that allows users to uncover hidden subscriptions they may have forgotten about.
            Users are allowed to view, add and edit subscriptions as well as delete subsciptions.
            I worked with a team of Software Engineers and UX/UI Designers to create a user friendly experience for customers.
            A combination of React and CSS3 was used to generate a multiple-page experience for the user. It uses an API in which we constructed and
            MongoDB for Data Management.
            </p>
            
            <div className="project-buttons">

              <Button variant="outline-light" block>VISIT SITE</Button>

              <Button variant="outline-light" block>REPO</Button>
            </div>

          </div>
        </div>
      </div>


      <div className="all-projects">
        <div className="project-container">

          <div className="all-projects-info">
            <h4>Serenity Skins</h4>
            <br></br>
            <div className="line"></div>
            <br></br>
            <p>Serenity Skin Spa is an already existing local business, who's mission is to enhance beauty and confidence in their clients by using innovating pratices. The website allows users to login and book appointments. Clients will be able to view treatements provided once they log in. They will also be able to view description, duration and price of the treatement selected. This interactive site was made using React, CSS3, Ruby on Rails framework for Data Management and PostgreSQL for the database. </p>
            <div className="project-buttons">

              <Button variant="outline-light" block>VISIT SITE</Button>

              <Button variant="outline-light" block>REPO</Button>
            </div>
          </div>

          <div className="project-image">
            <img className="all-images" src="http://res.cloudinary.com/dc6ncx5wp/image/upload/v1598470258/screenseren_urbxmn.png" />

            <img className="all-images" src="http://res.cloudinary.com/dc6ncx5wp/image/upload/v1598470521/Screen_Shot_2020-08-26_at_3.33.41_PM_db6blf.png" />

          </div>
        </div>
      </div>

    </>

  )
}
