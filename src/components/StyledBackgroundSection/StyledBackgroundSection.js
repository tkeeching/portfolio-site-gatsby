import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "bg-field.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 5472) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.backgroundImage.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`linen`}
        >
          { children }
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  position: relative;
  top: -80px;
  width: 100%;
  background-position: top center;
  background-size: cover;
`

export default StyledBackgroundSection