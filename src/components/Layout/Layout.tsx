import React from "react"
import "./Layout.sass"

const Layout: React.FC = ({ children }) => (
  <div className="layout-grid-container">
    { children }
  </div>
)

export default Layout