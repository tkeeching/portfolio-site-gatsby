import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImg: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "software-developer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.profileImage.childImageSharp.fluid} />
}

export default ProfileImg
