import React from 'react'
import './styles/ProjectItem.css'
import Emoji from './Emoji'

export default function ProjectItem(props) {
  let image

  if (props.symbol) {
    image = <Emoji symbol={props.symbol} />
  } else image = <img className="project-img img-flex-right" src={props.src} />

  return (
    <div className="flex-row project-card">
      <div className="text-card">
        <h5>{props.title}</h5>
        <a href={props.liveLink}>Live</a> | <a href={props.codeLink}>Code</a>
      </div>
      <div className="project-img-container">{image}</div>
    </div>
  )
}
