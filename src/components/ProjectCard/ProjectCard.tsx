import React from "react"
import "./ProjectCard.sass"

interface ProjectCardProps {
  title: string,
  description: string,
  imgURL: string,
  github: string,
  link: string
}

const ProjectCard: React.SFC<ProjectCardProps> = (props) => {

  return (
    <div 
      className="project-card"
      data-sal="slide-up"
      data-sal-duration="1700"
      data-sal-delay="200"
      data-sal-easing="easeOutCirc"
    >
      <div className="project-img">
        <a href={props.link} target="_blank">
          <img src={props.imgURL} alt="project-screenshot" />
        </a>
      </div>
      <div className="project-details">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <nav>
          <a href={props.github} target="_blank">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github-logo" width="30px" />
          </a>
          <a href={props.link} target="_blank">
            <img src="https://cdn1.iconfinder.com/data/icons/essential-21/128/External_Link-512.png" alt="external-link-icon" width="22px" />
          </a>
        </nav>
      </div>
    </div>
  )
}

ProjectCard.defaultProps = {
  title: "<project title>",
  description: "<a short description>",
  imgURL: "<image url of project screenshot>",
  github: "",
  link: ""
}

export default ProjectCard