import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({post, noSectionName}) => {
  return (
    <div
      css={css`
        border: 2px solid #222;
        display: flex;
        align-items: stretch;
        margin-bottom: 1rem;
        padding: 0rem 0.2rem;
        padding-right: 0;
        background: white;
        border-radius: 10px;
        transition: 0.1s ease-in-out;
        :hover {
          box-shadow: -10px 6px blue;
          transform: translate(10px, -6px);
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
        `}
      >
        {(post.fields.section && !noSectionName) && (
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
            {post.fields.section.replace(/-/g, " ")}
          </span>
        )}
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
        <span
          css={css`
            width: 170px;
            left: 0%;
            margin-left: -0.2rem;
            background: black;
            border-radius: 0 8px 0 8px;
            color: white;
            padding-left: 10px;
          `}
        >
          {post.timeToRead} min lectura
        </span>
      </div>
      {post.featuredImg && (
        <Img fixed={post.featuredImg.childImageSharp.fixed} alt="post-cover" />
      )}
    </div>
  )
}
