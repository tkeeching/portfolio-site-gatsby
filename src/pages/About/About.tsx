import React from "react"
import "./About.sass"

import ProfileImg from "../../components/ProfileImg/ProfileImg"

const About: React.FC = () => (
  <div className="section-about">
    <a className="anchor" id="about"></a>
    <h1
      data-sal="fade"
      data-sal-duration="1700"
      data-sal-delay="100"
      data-sal-easing="easeOutCirc"
    >
      About Kee
    </h1>
    <div 
      className="profile-grid-container"
    >
      <div>
        <p
          data-sal="slide-right"
          data-sal-duration="1100"
          data-sal-delay="200"
          data-sal-easing="easeOutCirc"        
        >A self-motivated bootcamp graduate who is passionate about growth and continuous learning.</p>
        <p
          data-sal="slide-right"
          data-sal-duration="1300"
          data-sal-delay="200"
          data-sal-easing="easeOutCirc"         
        >My mission as a software developer is to create beautiful and functional applications that empower and improve lives.</p>
        <p
          data-sal="slide-right"
          data-sal-duration="1500"
          data-sal-delay="200"
          data-sal-easing="easeOutCirc"         
        >
          I am always curious about how things works and figuring out why they stopped working.
          The problem-solving aspect of coding challenges me to learn new things and constantly improving 
          my skill sets which I find deeply satisfying.
        </p>
        <p
          data-sal="slide-right"
          data-sal-duration="1700"
          data-sal-delay="200"
          data-sal-easing="easeOutCirc"         
        >
          With a desire in creating a positive and lasting impact on people’s lives, I firmly believe in 
          continuous improvement and strive to apply my software engineering knowledge in creating tools 
          that empower people to live better, work better and dream bigger.
        </p>
        <p
          data-sal="slide-right"
          data-sal-duration="1900"
          data-sal-delay="200"
          data-sal-easing="easeOutCirc"         
        >
          When I am not in front of the screen, you can find me out on the mountain ranges taking in all the 
          goodness that mother nature has to offer while contemplating my existence in it. I am also an avid badminton
          player who enjoy a healthy competition in the fastest racquet sport on earth. 🏸
        </p>
      </div>
      <div 
        className="profile-img"
        data-sal="slide-up"
        data-sal-duration="2000"
        data-sal-delay="500"
        data-sal-easing="easeOutCirc"
      >
        <ProfileImg />
      </div>
    </div>

    <div className="skill-grid-container">
      <div
        data-sal="slide-left"
        data-sal-duration="1300"
        data-sal-delay="300"
        data-sal-easing="easeOutCirc"
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
        data-sal-duration="1500"
        data-sal-delay="400"
        data-sal-easing="easeOutCirc"
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
        data-sal-duration="1700"
        data-sal-delay="500"
        data-sal-easing="easeOutCirc"
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