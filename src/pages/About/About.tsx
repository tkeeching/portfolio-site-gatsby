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
        <p>My mission as a software developer is to create beautiful and functional apllications that empower and improve lives.</p>
        <p>
          I recently graduated from the Software Engineering Immersive 
          cooding bootcamp with General Assembly where I learned about computer science fundamental,
          collaboration tools and full stack programming languages and frameworks.
          I have also completed a number of projects from Front End to Full Stack which you
          can find in the Projects section.
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