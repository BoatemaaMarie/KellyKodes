import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../../../screens/Home/Home'
import AboutMe from '../../../screens/AboutMe/AboutMe'
import Skills from '../../../screens/Skills/Skills'
import MyProjects from '../../../screens/MyProjects/MyProjects'
import Resume from '../../../screens/Resume/Resume'



export default function Main() {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Resume />
    </>
  )
}
