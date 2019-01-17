import React from 'react'

import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

import '../Skeleton.css'

import favicon from '../images/favicon.svg'

const IndexPage = () => (
  <>
    <Header />
    <div className="container">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  </>
)

export default IndexPage
