import React from "react"
import "./Footer.sass"

const Footer: React.FC = () => (
  <footer>
    <div>
      <p
        data-sal="fade"
        data-sal-duration="1100"
        data-sal-easing="easeOutCubic"
      >
        &lt;/&gt; with <span className="love-symbol">❤</span> and 🍜 by Kee Tee © {new Date().getFullYear()}
      </p>
      <p
        data-sal="fade"
        data-sal-duration="1300"
        data-sal-easing="easeOutCubic"
      >
        Photo by 
        <a href="https://unsplash.com/photos/-P9K2gujngQ"> Priscilla Du Preez </a>
        on 
        <a href="https://unsplash.com/photos/-P9K2gujngQ"> Unsplash</a>
      </p>
      <p
        data-sal="fade"
        data-sal-duration="1500"
        data-sal-easing="easeOutCubic"
      >
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer