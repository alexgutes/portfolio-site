import React from 'react';
import './styles/ProjectItem.css';
import Emoji from './Emoji';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHackerNews } from '@fortawesome/free-brands-svg-icons';

export default function ProjectItem(props) {
  let image;
  let skillsList;
  const {
    symbol,
    src,
    skills,
    title,
    description,
    screenshot,
    liveLink,
    codeLink,
    icon
  } = props;

  if (symbol) {
    image = <Emoji className="project-img" symbol={symbol} />;
  } else if (icon) {
    image = <FontAwesomeIcon className="project-img" icon={faHackerNews} size="lg" color="#ff5b01"></FontAwesomeIcon>;
  }
  else
    image = <img className="project-img img-flex-right" src={src} alt="" />;
  if (skills) {
    skillsList = skills.map(item => <li>{item}</li>);
  }


  return (
    <div className="project-card">
      <div className="flex-row">
        <h5>{title}</h5>
        {image}
      </div>
      <p>{description}</p>
      <div>
        <img className="screenshot" src={screenshot} alt="" />
      </div>
      <div>
        <p>Built with:</p>
        <ul className="flex-list-skills">{skillsList}</ul>
      </div>
      <div className="link-container">
        <a href={liveLink}>
          <button type="button" className="live-button button-primary">
            Live
          </button>
        </a>
        <a href={codeLink}>
          <button type="button">Code</button>
        </a>
      </div>
    </div>
  );
}
