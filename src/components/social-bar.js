import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
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
    <div
      css={css`
        position: fixed;
        top: 40vh;
        left: 95vw;
      `}
    >
      {socialLinks.map((social, idx) => (
        <SocialLink {...social} />
      ))}
    </div>
  )
}
