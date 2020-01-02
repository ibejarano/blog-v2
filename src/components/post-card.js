import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

export default ({ post }) => {
  return (
          <div 
                  css={css`
                          border: 2px solid #222;
                          margin-bottom: 1rem;
                          padding: 0.5rem 0.2rem;
                          `}
          >
      <Link
        to={post.fields.slug}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 8)};
          `}
        >
          {post.frontmatter.title}
          <span
            css={css`
              color: #bbb;
            `}
          > - {post.frontmatter.date}
          </span>
        </h3>
        <p>{post.excerpt}</p>
      </Link>
    </div>
  )
}
