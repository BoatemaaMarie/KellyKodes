import React, {useState, useEffect} from 'react'
import './Main.css'
import Home from '../../../screens/Home/Home'
import AboutMe from '../../../screens/AboutMe/AboutMe'
import Skills from '../../../screens/Skills/Skills'
import MyProjects from '../../../screens/MyProjects/MyProjects'
import Resume from '../../../screens/Resume/Resume'
import Footer from '../../shared/Footer/Footer'



export default function Main() {


  return (
    <>
      <Home /> 
      <AboutMe />
      <Skills />
      <MyProjects />
      <div className="resume-footer">
      <Resume /> 
      <Footer />
      </div>
    </>
  )
}
