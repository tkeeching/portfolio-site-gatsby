import React, { useRef, useEffect } from "react"
import "./Hero.sass"
import { Link } from "gatsby"
import { TweenMax, TimelineLite, Power3 } from 'gsap'
import DownArrow from "../DownArrow/DownArrow"


const Hero: React.FC = () => {
  let hero = useRef(null)
  let heading = useRef(null)
  let tl = new TimelineLite({ delay: 1.5 })

  useEffect(() => {
    const mainHeading = heading.firstElementChild
    const subHeading = heading.lastElementChild

    TweenMax.to(hero, 0, {css: {visibility: "visible"}})

    tl.from(mainHeading, 1.3, {y: 1000, scale: 0, ease: Power3.easeOut})
      .from(subHeading, 1, {x: -2000, ease: Power3.easeOut}, 1)
  })

  return (
    <div className="hero-grid-container" ref={el => hero = el}>
      <div></div>
      <div className="hero-header" ref={el => heading = el}>
        <h1>Hello, I'm Kee</h1>
        <p>Let's create a better world together</p>
      </div>
      <div className="hero-down-arrow">
        <Link to="/#about">
          <DownArrow />
        </Link>
      </div>
    </div>
  )
}

export default Hero
