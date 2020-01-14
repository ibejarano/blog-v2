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
    return `content/blog/${slug}/${slug}.md`
  },
  frontmatter(form) {
    let slug = slugify(form.title.toLowerCase())
    return new Promise(resolve => {
      resolve({
        title: form.title,
        description: form.description,
        data: new Date(),
        path: `content/blog/${slug}/${slug}`,
      })
    })
  },
  fields: [
    { name: "title", label: "Title", component: "text", required: true },
    {
      name: "description",
      label: "Description",
      component: "text",
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
