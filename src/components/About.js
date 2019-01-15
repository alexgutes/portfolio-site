import React from 'react'
import './styles/About.css'
import profile from '../images/profile.jpg'

export default function About() {
  return (
    <div className="about-container">
      <img className="image" src={profile} id="profile" />
      <div className="text-container">
        <p>
          Hello, I'm <b>Alex</b>. I'm a Full stack developer experienced with
          modern frameworks and libraries and an appreciation for good UI/UX
          design. I'm familiar with working in a team environment and I'm able
          to learn and adapt to new technologies quickly.
        </p>
        <p>
          Outside of development, I enjoy cooking, watching sports and listening to music. 
        </p>
      </div>
    </div>
  )
}
