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
        grid-template-columns: 1fr 600px 1fr;
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
