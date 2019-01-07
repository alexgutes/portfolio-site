import React from 'react'
import './styles/ProjectItem.css'

export default function ProjectItem(props) {
  return (
    <div className="row project-card">
      <div className="one-third column img-container">
        <img className="img-card" src={props.src} />
      </div>
      <div className="two-thirds column text-card">
        <h5>{props.title}</h5>
        <a src={props.liveLink}>Live</a> | <a src={props.codeLink}>Code</a>
      </div>
    </div>
  )
}
