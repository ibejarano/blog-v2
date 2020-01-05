import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import SocialLink from "./social-link"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        socialLinks {
         username
         socialUrl
        }
      }
    }
  
  `)

  const { socialLinks } = data.site

  return (
    <div
      css={css`
        position: fixed;
        top: 40vh;
        left: 95vw;
      `}
    >
      {socialLinks.map((social, idx) => (
        <SocialLink socialUrl={social.socialUrl} username={social.username} />
      ))}
    </div>
  )
}
