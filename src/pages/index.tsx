import React from "react"
import { Link } from "gatsby"
import "./index.sass"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard/ProjectCard"

import About from "./About/About"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-cards-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
    <div id="contact">
      <h1>Get in touch</h1>
    </div>
  </Layout>
)

export default IndexPage
