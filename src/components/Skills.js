import React from 'react'
import './styles/Skills.css'

export default function Skills() {
  return (
    <div>
      <div>
        <p>Skills</p>
        <i>Front End</i>
        <ul className="flex-list-skills">
          <li>JavaScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>jQuery</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Styled Components</li>
          <li>Responsive Design</li>
          <li>Accesibility</li>
        </ul>
      </div>
      <div>
        <i>Back End</i>
        <ul className="flex-list-skills">
          <li>Node</li>
          <li>Express</li>
          <li>Passport</li>
          <li>JWT</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </div>
  )
}
