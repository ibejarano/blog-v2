import React from "react"
import slugify from "react-slugify"

import SocialBar from "./social-bar"
import Sections from "./sections"
import Nav from "./nav"
import Archives from "./archives"
import SEO from "./seo"

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <SEO title={title} description={description} />
      <Nav />
      <Sections />
      <section>{children}</section>
      <section>
        <Archives />
      </section>
      <SocialBar />
    </div>
  )
}

export default Layout
