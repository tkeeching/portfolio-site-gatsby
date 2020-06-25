import React from "react"
import { Link } from "gatsby"
import "./Hero.sass"

const Hero: React.FC = () => (
  <div className="hero-grid-container">
    <nav>
      <ul>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
    <h1>Hi, I'm Kee</h1>
    <h1>\/</h1>
  </div>
)

export default Hero
