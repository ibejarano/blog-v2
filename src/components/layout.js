import React from "react"
import { css } from "@emotion/core"
import { withPlugin } from "tinacms"
import { createRemarkButton } from "gatsby-tinacms-remark"
import slugify from "react-slugify"

import SocialBar from "./social-bar"
import Sections from "./sections"
import Nav from "./nav"

const CreatePostButton = createRemarkButton({
  label: "New Post",
  filename(form) {
    let slug = slugify(form.title.toLowerCase())
    return `content/${form.section}/${slug}.md`
  },
  frontmatter(form) {
    return new Promise(resolve => {
      resolve({
        title: form.title,
        date: new Date(),
      })
    })
  },
  fields: [
    { name: "title", label: "Title", component: "text", required: true },
    {
      name: "section",
      label: "Seccion",
      component: "select",
      options: [
        "General",
        "web-development",
        "100DaysOfGatsby"
        
      ],
      required: true,
    },
  ],
})

const Layout = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: 100px 50px auto;
        grid-template-columns: 1fr 600px 1fr;
        grid-template-areas:
          "nav nav nav"
          ". section ."
          ". body .";
      `}
    >
      <Nav />
      <Sections />
      <section
        css={css`
          grid-area: body;
        `}
      >
        {children}
      </section>
      <SocialBar />
    </div>
  )
}

export default withPlugin(Layout, CreatePostButton)
