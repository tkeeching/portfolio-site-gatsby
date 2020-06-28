import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DownArrow: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      downArrowImage: file(relativePath: { eq: "down-arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.downArrowImage.childImageSharp.fluid} />
}

export default DownArrow