import React from "react"
import "./About.sass"

import ProfileImg from "../../components/ProfileImg/ProfileImg"

const About: React.FC = () => (
  <div className="section-about">
    <a className="anchor" id="about"></a>
    <h1>About me</h1>
    <div className="profile-grid-container">
      <div>
        <p>A self-motivated bootcamp graduate looking for a role in Front End or Full Stack development</p>
        <p>My mission as a software developer is to create beautiful and functional applications that empower and improve lives.</p>
        <p>
          With a desire in creating a positive and lasting impact on people’s lives, I firmly believe in 
          continuous improvement and strive to apply my software engineering knowledge in creating tools 
          that empower people and businesses to reach their potential.
        </p>
      </div>
      <div className="profile-img">
        <ProfileImg />
      </div>
    </div>

    <div className="skill-grid-container">
      <div>
        <h3>Current Stack</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Ruby</li>
          <li>Sinatra</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div>
        <h3>Toolbox</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Chrome Dev Tool</li>
          <li>VS Code</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>Firebase</li>
          <li>Slack</li>
          <li>Trello</li>
        </ul>
      </div>
      <div>
        <h3>Learning</h3>
        <ul>
          <li>Currently:</li>
            <ul>
              <li>TypeScript</li>
              <li>PHP</li>
            </ul>
          <li>On the radar:</li>
            <ul>
              <li>GraphQL</li>
              <li>Ionic</li>
            </ul>
        </ul>
      </div>
    </div>
  </div>
)

export default About