import React from "react"
import { css } from "@emotion/core"
import slugify from "react-slugify"

import SocialBar from "./social-bar"
import Sections from "./sections"
import Nav from "./nav"
import Archives from "./archives"
import SEO from "./seo"

const Layout = ({ children, title, description }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: 100px 50px auto;
        grid-template-columns: 1fr 1fr 900px 1fr 1fr;
        grid-gap: 20px;
        grid-template-areas:
          ". nav nav nav ."
          ". . section . ."
          ". . body archives . ";
      `}
    >
      <SEO title={title} description={description} />
      <Nav />
      <Sections />
      <section
        css={css`
          grid-area: body;
        `}
      >
        {children}
      </section>
      <section
        css={css`
          grid-area: archives;
        `}
      >
        <Archives />
      </section>
      <SocialBar />
    </div>
  )
}

export default Layout
