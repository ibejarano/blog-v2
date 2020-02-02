import React from "react"
import { css } from "@emotion/core"
import { Link, graphql, useStaticQuery } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <nav
      css={css`
        grid-area: nav;
        margin: 0 0;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
        <Link
          to={`/subscribe/`}
          css={css`
            display: inline-block;
            color: black;
            margin-left: 20px;
            padding: 0px 10px;
            border: 2px solid black;
            text-decoration: none;
            box-shadow: -2px 2px grey;
          `}
        >
          Suscribirse
        </Link>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          padding-left: 10px;
          text-decoration: none;
        `}
      >
        About
      </Link>
      <Link
        to={`/contact/`}
        css={css`
          float: right;
          text-decoration: none;
        `}
      >
        Contacto
      </Link>
    </nav>
  )
}
