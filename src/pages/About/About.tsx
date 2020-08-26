import React from "react"
import "./About.sass"

import ProfileImg from "../../components/ProfileImg/ProfileImg"

const About: React.FC = () => (
  <div className="section-about">
    <a className="anchor" id="about"></a>
    <h1
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      About Kee
    </h1>
    <div 
      className="profile-grid-container"
    >
      <div>
        <p
          data-sal="slide-right"
          data-sal-duration="500"
          data-sal-easing="ease"        
        >A self-motivated bootcamp graduate who is passionate about growth and continuous learning.</p>
        <p
          data-sal="slide-right"
          data-sal-duration="700"
          data-sal-easing="ease"         
        >My mission as a software developer is to create beautiful and functional applications that empower and improve lives.</p>
        <p
          data-sal="slide-right"
          data-sal-duration="900"
          data-sal-easing="ease"         
        >
          I have always been curious about how things works and figuring out why they stopped working.
          The problem-solving aspect of coding challenges me to learn new things and constantly improving 
          my skill sets which I find deeply satisfying.
        </p>
        <p
          data-sal="slide-right"
          data-sal-duration="1100"
          data-sal-easing="ease"         
        >
          With a desire in creating a positive and lasting impact on people’s lives, I firmly believe in 
          continuous improvement and strive to apply my software engineering knowledge in creating tools 
          that empower people to live better, work better and dream bigger.
        </p>
        <p
          data-sal="slide-right"
          data-sal-duration="1300"
          data-sal-easing="ease"         
        >
          When I am not in front of the screen, you can find me out on the mountain ranges taking in all the 
          goodness that mother nature has to offer while contemplating my existence in it. I am also an avid badminton
          player who enjoy a healthy competition in the fastest racquet sport on earth. 🏸
        </p>
      </div>
      <div 
        className="profile-img"
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="easeOutCubic"
      >
        <ProfileImg />
      </div>
    </div>

    <div className="skill-grid-container">
      <div
        data-sal="slide-left"
        data-sal-duration="900"
        data-sal-easing="ease"
      >
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
      <div
        data-sal="slide-left"
        data-sal-duration="1100"
        data-sal-easing="ease"
      >
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
      <div
        data-sal="slide-left"
        data-sal-duration="1300"
        data-sal-easing="ease"
      >
        <h3>Learning</h3>
        <ul>
          <li>Currently:</li>
            <ul>
              <li>TypeScript</li>
              <li>Ionic</li>
            </ul>
          <li>On the radar:</li>
            <ul>
              <li>React Native</li>
              <li>GraphQL</li>
            </ul>
        </ul>
      </div>
    </div>
  </div>
)

export default About