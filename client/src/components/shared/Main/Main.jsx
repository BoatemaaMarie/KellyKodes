import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../../../screens/Home/Home'
import AboutMe from '../../../screens/AboutMe/AboutMe'
import Skills from '../../../screens/Skills/Skills'
import MyProjects from '../../../screens/MyProjects/MyProjects'
import Resume from '../../../screens/Resume/Resume'
// import Footer from '../../shared/Footer/Footer'



export default function Main() {


  return (
    <>
      <Route>

      <Home component="/aboutme" exact/> 
      </Route>
      <AboutMe />
      <Skills />
      <MyProjects />
      <Resume /> 
      {/* <Footer /> */}
    </>
  )
}
