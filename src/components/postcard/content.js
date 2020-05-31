import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import ReadingTime from "./reading-time"

export default function CardContent({ post }) {
  return (
    <React.Fragment>
      <Link
        to={post.fields.slug}
        css={css`
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: row;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          {post.frontmatter.title}
          <span
            css={css`
              color: #00b;
            `}
          >
            {" "}
            - {post.frontmatter.date}
          </span>
        </h3>
      </Link>
      <p
        css={css`
          margin-bottom: 0;
        `}
      >
        {post.excerpt}
      </p>
      <ReadingTime time={post.timeToRead} />
    </React.Fragment>
  )
}
