import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

export default ({ post }) => {
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
          padding: 0.5rem 0.2rem;
          background: white;
          border-radius: 10px;
            transition: .1s ease-in-out; 
          :hover {
            box-shadow: -10px 6px blue;
            transform: translate(10px, -6px);
          }
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
        <span
          css={css`
            font-size: 1rem;
            color: #fff;
            background: grey;
            border-radius: 0.75rem;
            padding: 2px 4px;
            margin-bottom: 0.5rem;
          `}
        >
          {post.frontmatter.section}
        </span>{" "}
        {post.timeToRead} min lectura
        <p>{post.excerpt}</p>
      </div>
    </Link>
  )
}
