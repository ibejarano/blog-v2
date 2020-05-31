import React from "react"
import Img from "gatsby-image"

export default function FeaturedImage({ image }) {
  return <Img fixed={image.childImageSharp.fixed} alt="post-cover" />
}
