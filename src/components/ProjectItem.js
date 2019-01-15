import React from 'react'
import './styles/ProjectItem.css'
import Emoji from './Emoji'
import ListSkills from './ListSkills'

export default function ProjectItem(props) {
  let image
  let skillsList

  if (props.symbol) {
    image = <Emoji className="project-img" symbol={props.symbol} />
  } else image = <img className="project-img img-flex-right" src={props.src} />
  if (props.skills) {
    skillsList = props.skills.map(item => <li>{item}</li>)
  }
  return (
    <div className="project-card">
      <div className="flex-row">
        <h5>{props.title}</h5>
        {image}
      </div>
      <p>{props.description}</p>
      <div>
        <img className="screenshot" src={props.screenshot} />
      </div>
      <div>
        <p>Built with:</p>
        <ul className="flex-list-skills">{skillsList}</ul>
      </div>
      <div className="link-container">
        <a href={props.liveLink}>Live</a> | <a href={props.codeLink}>Code</a>
      </div>
    </div>
  )
}
