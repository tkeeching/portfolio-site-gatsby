import React from "react"
import "./Projects.sass"
import ProjectCard from "../../components/ProjectCard/ProjectCard"

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Paper",
      description: "A simple note-taking app built with React and Firebase.",
      imgURL: "https://github.com/tkeeching/paper/raw/master/screenshot.png",
      github: "https://github.com/tkeeching/paper",
      link: "https://paper-1fe4c.web.app/"
    },
    {
      title: "Tetris",
      description: "A classic tile-matching game built with built with vanilla JavaScript",
      imgURL: "https://github.com/tkeeching/tetris/raw/master/screenshot.png",
      github: "https://github.com/tkeeching/tetris",
      link: "https://tkeeching.github.io/tetris/" 
    },
    {
      title: "Tic Tac Toe",
      description: "A classic game of noughts and crosses built with React.",
      imgURL: "https://github.com/tkeeching/tic-tac-toe-react/raw/master/screenshot.png",
      github: "https://github.com/tkeeching/tic-tac-toe-react",
      link: "https://tkeeching.github.io/tic-tac-toe-react/" 
    },
    {
      title: "Burger",
      description: "A fun and interactive way to have your burger. Users can build a burger with their preferred toppings as well as selecting a ready-made burger from the menu. Users can remove individual toppings by clicking on them.",
      imgURL: "https://github.com/tkeeching/burger/raw/master/screenshot.png",
      github: "https://github.com/tkeeching/burger",
      link: "https://tkeeching.github.io/burger/" 
    },
    {
      title: "Tiny",
      description: "A lightweight, responsive CRUD app that promotes positive sharing. User can share and heart posts while having the ability to delete their own posts.",
      imgURL: "https://github.com/tkeeching/tiny/raw/master/screenshot.png",
      github: "https://github.com/tkeeching/tiny",
      link: "https://secure-wildwood-53101.herokuapp.com/" 
    },
    {
      title: "Magic Melbourne Moment",
      description: "An interactive trip planner for tourists visiting Melbourne. Users can search for attractions by categories. They can star an attraction to save it to their personalized itinerary.",
      imgURL: "https://github.com/tkeeching/Magic-melbourne/raw/master/screenshot.png",
      github: "https://github.com/tkeeching/Magic-melbourne",
      link: "https://magic-melbourne-moments.herokuapp.com/" 
    },
  ]

  return (
    <div className="section-projects">
      <a className="anchor" id="projects"></a>
      <h1>Projects</h1>
      <div className="projects-card-container">
        {
          projects.map(project => (
            <ProjectCard 
              title={project.title}
              description={project.description}
              imgURL={project.imgURL}
              github={project.github}
              link={project.link} />
          ))
        }
      </div>
    </div>  
  )
}

export default Projects