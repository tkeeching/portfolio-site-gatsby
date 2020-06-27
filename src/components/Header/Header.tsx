import React from "react"
import "./Header.sass"
import { Link } from "gatsby"

const Header: React.FC = () => (
  <header>
    <h1 onClick={() => window.scrollTo(0,0)}>
      Kee Tee
    </h1>
    <nav>
      <ul>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header