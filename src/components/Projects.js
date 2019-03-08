import React from 'react';
import ProjectItem from './ProjectItem';
import icon from '../images/so-icon.png';
import truck from '../images/truckdLogo.png';


import wackSS from '../images/wackoverflow-screenshot.jpg';
import emojifulSS from '../images/emojiful-screenshot.png';
import truckdSS from '../images/truckd-screenshot.png';
import hackerSS from '../images/hacker-screenshot.png';



export default class Projects extends React.Component {
  render() {
    return (
      <div className="project-outer-container">
      <h3 className="sub-heading section-heading">Projects</h3>
      <div className="project-flex-container">
        <ProjectItem
          title="Hacker News: React Native"
          description="
          Hacker News: React Native is a barebones mobile client for browsing the popular tech news site Hacker News. Powered by Algolia HN Search API."
          skills={['React Native']}
          icon='faHackerNews'
          codeLink="https://github.com/alexgutes/Hacker-News-React-Native"
          liveLink="https://emojiful.herokuapp.com/"
          screenshot={hackerSS}
          />
        <ProjectItem
          title="Emojiful"
          description="
          Emojiful is a spaced-repetiton app for learning the Emoji language that features a custom linked list data structure on the back end."
          skills={['React', 'Redux', 'Node', 'Express', 'MongoDB']}
          symbol="😜"
          codeLink="https://github.com/alexgutes/Emojiful"
          liveLink="https://emojiful.herokuapp.com/"
          screenshot={emojifulSS}
          />
        <ProjectItem
          title="Wack Overflow"
          description="Wack Overflow is a clone of the popular programming community Stack Overflow where users can post questions and answers to any programming related issues"
          skills={['React', 'Redux', 'Node', 'Express', 'MongoDB']}
          src={icon}
          liveLink="https://wackoverflow.herokuapp.com/"
          codeLink="https://github.com/alexgutes/Wack-Overflow"
          screenshot={wackSS}
          />
        <ProjectItem
          title="Truck'd"
          description="Truck'd is a full stack application for connecting people who own trucks with people who need to move. This application was developed during as part of a 3 week long capstone project for Thinkful where I served as UX and Marketing lead on a team of 5 developers"
          skills={['React', 'Redux', 'Node', 'Express', 'MongoDB']}
          src={truck}
          liveLink="https://mountain-men-truckd.herokuapp.com/"
          codeLink="https://github.com/alexgutes/Truckd"
          screenshot={truckdSS}
          />
      </div>
    </div>
  );
    }
      }
