import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import ReadingTime from "./reading-time"

export default function CardContent({ post }) {
  return (
    <React.Fragment>
      <Link to={post.fields.slug}>
        <h3>
          {post.frontmatter.title}
          <span> - {post.frontmatter.date}</span>
        </h3>
      </Link>
      <p>{post.excerpt}</p>
      <ReadingTime time={post.timeToRead} />
    </React.Fragment>
  )
}
