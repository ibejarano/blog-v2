import React from "react"
import { css } from "@emotion/core"

import SocialBar from './social-bar'
import Sections from './sections'
import Nav from './nav'

export default ({ children }) => {
  return (
    <div css={css`
        display: grid;
        grid-template-rows: 100px 50px auto;
        grid-template-columns: 200px auto 200px;
        grid-template-areas: 
          ". nav ."
          ". section ."
          ". body ."
      `}>
    <Nav />
    <Sections />
    <section css={css`
        grid-area: body;
      `}>
        {children}
    </section>
    <SocialBar />
    </div>
  )
}
