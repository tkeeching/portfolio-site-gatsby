import React from "react"
import "./Layout.sass"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <div className="layout-grid-container">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout