import React from "react"
import "./Footer.sass"

const Footer: React.FC = () => (
  <footer>
    <div>
      <p>
        &lt;/&gt; with <span className="love-symbol">❤</span> and 🍜 by Kee Tee © {new Date().getFullYear()}
      </p>
      <p>
        Photo by 
        <a href="https://unsplash.com/photos/-P9K2gujngQ"> Priscilla Du Preez </a>
        on 
        <a href="https://unsplash.com/photos/-P9K2gujngQ"> Unsplash</a>
      </p>
      <p>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer