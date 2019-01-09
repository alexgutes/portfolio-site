import React from 'react'
import ProjectItem from './ProjectItem'
import icon from '../images/so-icon.png'
import truck from '../images/truckdLogo.png'

export default function Projects() {
  return (
    <div classnName="project-outer-container">
      <h5 className="sub-heading section-heading">Projects</h5>
      <div className="project-flex-container">
        <ProjectItem
          title="Emojiful"
          symbol="😜"
          codeLink="https://github.com/alexgutes/Emojiful"
          liveLink="https://emojiful.herokuapp.com/"
        />
        <ProjectItem
          title="Wack Overflow"
          src={icon}
          liveLink="https://wackoverflow.herokuapp.com/"
          codeLink="https://github.com/alexgutes/Wack-Overflow"
        />
        <ProjectItem
          title="Truck'd"
          src={truck}
          liveLink="https://mountain-men-truckd.herokuapp.com/"
          codeLink="https://github.com/alexgutes/Truckd"
        />
      </div>
    </div>
  )
}
