import React, { useState, useEffect } from "react"
import "./Header.sass"
import { Link } from "gatsby"

const Header: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const handleScroll = () => {
    const pos = window.pageYOffset
    setScrollPos(pos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={scrollPos > 600 ? "scrolled" : "" }>
      <h1 onClick={() => window.scrollTo(0,0)}>
        KT
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
}

export default Header