import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLink from "./social-link"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            name
            user
            url
          }
        }
      }
    }
  `)

  const { socialLinks } = data.site.siteMetadata

  return (
    <div>
      {socialLinks.map((social, idx) => (
        <SocialLink {...social} />
      ))}
    </div>
  )
}
