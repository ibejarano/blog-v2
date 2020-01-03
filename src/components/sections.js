import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { css } from "@emotion/core"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allDirectory(filter: { name: { ne: "posts" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  return (
    <ul
      css={css`
        display: flex;
        width: 90%;
        justify-content: space-between;
        list-style-type: none;
      `}
    >
      {data.allDirectory.edges.map(({ node }, ind) => (
        <li
          key={ind}
          css={css`
            background: white;
            border: 2px solid black;
            border-radius: 24px;
            padding: 0 10px;
            transition: 0.4s ease-in-out;
            :hover {
              background: lightblue;
            }
          `}
        >
          <Link
            css={css`
              text-decoration: none;
              color: inherit;
            `}
            to={`/${node.name}`}
          >
            {node.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
