import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

export default ({ post }) => {
  const blogSection = post.fields.section.replace(/-/g, " ")
  return (
    <Link
      to={post.fields.slug}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      <div
        css={css`
          border: 2px solid #222;
          margin-bottom: 1rem;
          padding: 0rem 0.2rem;
          background: white;
          border-radius: 10px;
          transition: 0.1s ease-in-out;
          :hover {
            box-shadow: -10px 6px blue;
            transform: translate(10px, -6px);
          }
        `}
      >
        <span
          css={css`
            font-size: 1rem;
            color: #fff;
            background: blue;
            border-radius: 0.5rem 0rem 0.75rem 0rem;
            padding: 2px 4px;
            margin-left: -0.2rem;
            text-transform: capitalize;
          `}
        >
          {blogSection}
        </span>{" "}
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
        <p css={css`margin-bottom: 0;`}>
          {post.excerpt}
          <span
            css={css`
              position: relative;
              top: 100%;
              width: 23%;
              left: 78%;
              display: block;
              background: black;
            border-radius: 0.75rem 0rem 0.5rem 0rem;
              color: white;
              padding-left: 10px;
            `}
          >
            {post.timeToRead} min lectura
          </span>
        </p>
      </div>
    </Link>
  )
}
